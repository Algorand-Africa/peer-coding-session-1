import { 
  Contract, 
  abimethod, 
  assert, 
  gtxn, 
  uint64, 
  Global,
  Asset,
  Txn,
  itxn,
} from '@algorandfoundation/algorand-typescript'

export class EventAssetClaimer extends Contract {
  @abimethod({ onCreate: 'allow' })
  public createApplication() {}

  @abimethod()
  public bootstrap(
    mbrTxn: gtxn.PaymentTxn, 
    ipfsUrl: string, 
    numberOfUnits: uint64, 
    assetName: string, 
    assetUnitName: string,
  ): uint64 {
    assert(mbrTxn.amount >= 200_000, 'Minimum balance must be at least 0.2 algos');
    assert(mbrTxn.receiver === Global.currentApplicationAddress);
    assert(numberOfUnits > 0);

    const response = itxn.assetConfig({
      assetName,
      unitName: assetUnitName,
      url: ipfsUrl,
      decimals: 0,
      total: numberOfUnits,
      manager: Global.currentApplicationAddress,
    }).submit();

    return response.createdAsset.id
  }

  @abimethod()
  public claimAsset(assetId: uint64): void {
    const assetBalance = Asset(assetId).balance(Global.currentApplicationAddress);
    const userAssetBalance = Asset(assetId).balance(Txn.sender);
    assert(assetBalance > 0);
    assert(userAssetBalance === 0);
    assert(Txn.sender.isOptedIn(Asset(assetId)));

    itxn.assetTransfer({
      xferAsset: assetId,
      assetAmount: 1,
      assetReceiver: Txn.sender,
    }).submit();
  }
}
