import { Contract } from '@algorandfoundation/tealscript';

export class AssetCreator extends Contract {
  asset = GlobalStateKey<AssetID>();

  createApplication(): void {}

  /**
   * This creates the asset that can be claimed once by any address.
   */
  createAsset() {
    assert(this.txn.sender === this.app.creator);
    assert(!this.asset.exists);

    const asset = sendAssetCreation({
      configAssetTotal: 10000,
      configAssetName: 'NAIJA',
      configAssetDecimals: 0,
      configAssetFreeze: this.app.address,
      configAssetManager: this.app.address,
    });

    this.asset.value = asset;
  }

  /**
   * This method transfers and freezes one unit of the asset to the account
   * that calls the method
   */
  claimAsset() {
    assert(this.txn.sender.assetBalance(this.asset.value) === 0);

    sendAssetTransfer({
      assetAmount: 1,
      assetReceiver: this.txn.sender,
      xferAsset: this.asset.value,
    });

    sendAssetFreeze({
      freezeAsset: this.asset.value,
      freezeAssetFrozen: true,
      freezeAssetAccount: this.txn.sender,
    });
  }
}
