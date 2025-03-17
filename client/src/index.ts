import * as algokit from "@algorandfoundation/algokit-utils";
import { AppClient } from "@algorandfoundation/algokit-utils/types/app-client";
import algosdk, { makeAssetTransferTxnWithSuggestedParamsFromObject, makePaymentTxnWithSuggestedParamsFromObject } from 'algosdk';
import { ASSET_CREATOR_ARC_32 } from "./client";
import { MNEMONIC } from "./constant";

async function loadAccount() {
    const client = algokit.AlgorandClient.fromConfig({
        algodConfig: {
            server: "https://testnet-api.algonode.cloud",
        },
        indexerConfig: {
            server: 'https://testnet-idx.algonode.cloud',
        }
    });

    const account = client.account.fromMnemonic(MNEMONIC);
    return { account, client };
}

async function main() {
    const { account, client } = await loadAccount();

    // Create factory
    // const appFactory = client.client.getAppFactory({
    //     appSpec: JSON.stringify(ASSET_CREATOR_ARC_32),
    //     defaultSender: account.addr,
    //     defaultSigner: account.signer,
    // });

    /**
     * Create application
     */
    // const response = await appFactory.send.create({
    //     method: 'createApplication',
    // });
    // const appId = response.result.appId;

    // Load app client for interacting with app
    const appClient = new AppClient({
        appId: BigInt(735919053),
        appSpec: JSON.stringify(ASSET_CREATOR_ARC_32),
        algorand: client,
    });

    const suggestedParams = await client.client.algod.getTransactionParams().do();

    /**
     * Fund application
     */
    // const fundingTxn = makePaymentTxnWithSuggestedParamsFromObject({
    //     amount: 200_000,
    //     from: account.addr,
    //     to: response.result.appAddress,
    //     suggestedParams,
    // })

    const atomTransactionComposer = new algosdk.AtomicTransactionComposer();

    // atomTransactionComposer.addTransaction({
    //     txn: fundingTxn,
    //     signer: account.signer,
    // });

    /**
     * Call createAsset
     */
    // atomTransactionComposer.addMethodCall({
    //     method: appClient.getABIMethod('createAsset')!,
    //     methodArgs: [],
    //     suggestedParams: {
    //         ...suggestedParams,
    //         fee: 2_000,
    //     },
    //     sender: account.addr,
    //     signer: account.signer,
    //     appID: Number(735919053),
    // });

    const globalState = await appClient.getGlobalState();
    const assetId = globalState.asset.value;
    console.log(globalState.asset.value)

    /**
     * Opt into asset
     */
    // const assetOptinTxn = makeAssetTransferTxnWithSuggestedParamsFromObject({
    //     amount: 0,
    //     from: account.addr,
    //     to: account.addr,
    //     assetIndex: Number(assetId),
    //     suggestedParams,
    // });

    // atomTransactionComposer.addTransaction({
    //     txn: assetOptinTxn,
    //     signer: account.signer,
    // });

    /**
     * claim asset
     */
    atomTransactionComposer.addMethodCall({
        method: appClient.getABIMethod('claimAsset')!,
        methodArgs: [],
        suggestedParams: {
            ...suggestedParams,
            fee: 3_000,
        },
        sender: account.addr,
        signer: account.signer,
        appID: Number(735919053),
        appForeignAssets: [Number(assetId)],
    });

    const finalResponse = await atomTransactionComposer.execute(client.client.algod, 8);
    console.log(finalResponse);
}

main();