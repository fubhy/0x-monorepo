import { AssetProxyId } from '@0x/types';
import * as _ from 'lodash';
import { Dispatch } from 'redux';

import { BIG_NUMBER_ZERO } from '../constants';
import { AccountState, ERC20Asset, OrderProcessState, ProviderState } from '../types';
import { assetUtils } from '../util/asset';
import { buyQuoteUpdater } from '../util/buy_quote_updater';
import { coinbaseApi } from '../util/coinbase_api';
import { errorFlasher } from '../util/error_flasher';

import { actions } from './actions';
import { State } from './reducer';

export const asyncData = {
    fetchEthPriceAndDispatchToStore: async (dispatch: Dispatch) => {
        try {
            const ethUsdPrice = await coinbaseApi.getEthUsdPrice();
            dispatch(actions.updateEthUsdPrice(ethUsdPrice));
        } catch (e) {
            const errorMessage = 'Error fetching ETH/USD price';
            errorFlasher.flashNewErrorMessage(dispatch, errorMessage);
            dispatch(actions.updateEthUsdPrice(BIG_NUMBER_ZERO));
        }
    },
    fetchAvailableAssetDatasAndDispatchToStore: async (state: State, dispatch: Dispatch) => {
        const { providerState, assetMetaDataMap, network } = state;
        const assetBuyer = providerState.assetBuyer;
        try {
            const assetDatas = await assetBuyer.getAvailableAssetDatasAsync();
            const assets = assetUtils.createAssetsFromAssetDatas(assetDatas, assetMetaDataMap, network);
            dispatch(actions.setAvailableAssets(assets));
        } catch (e) {
            const errorMessage = 'Could not find any assets';
            errorFlasher.flashNewErrorMessage(dispatch, errorMessage);
            // On error, just specify that none are available
            dispatch(actions.setAvailableAssets([]));
        }
    },
    fetchAccountInfoAndDispatchToStore: async (
        providerState: ProviderState,
        dispatch: Dispatch,
        shouldAttemptUnlock: boolean = false,
        shouldSetToLoading: boolean = false,
    ) => {
        const web3Wrapper = providerState.web3Wrapper;
        const provider = providerState.provider;
        if (shouldSetToLoading && providerState.account.state !== AccountState.Loading) {
            dispatch(actions.setAccountStateLoading());
        }
        let availableAddresses: string[];
        try {
            // TODO(bmillman): Add support at the web3Wrapper level for calling `eth_requestAccounts` instead of calling enable here
            const isPrivacyModeEnabled = !_.isUndefined((provider as any).enable);
            availableAddresses =
                isPrivacyModeEnabled && shouldAttemptUnlock
                    ? await (provider as any).enable()
                    : await web3Wrapper.getAvailableAddressesAsync();
        } catch (e) {
            dispatch(actions.setAccountStateLocked());
            return;
        }
        if (!_.isEmpty(availableAddresses)) {
            const activeAddress = availableAddresses[0];
            dispatch(actions.setAccountStateReady(activeAddress));
            // tslint:disable-next-line:no-floating-promises
            asyncData.fetchAccountBalanceAndDispatchToStore(providerState, dispatch);
        } else {
            dispatch(actions.setAccountStateLocked());
        }
    },
    fetchAccountBalanceAndDispatchToStore: async (providerState: ProviderState, dispatch: Dispatch) => {
        const web3Wrapper = providerState.web3Wrapper;
        const account = providerState.account;
        // if (account.state !== AccountState.Ready) {
        //     return;
        // }
        try {
            const address = account.address;
            const ethBalanceInWei = await web3Wrapper.getBalanceInWeiAsync(address);
            dispatch(actions.updateAccountEthBalance({ address, ethBalanceInWei }));
        } catch (e) {
            // leave balance as is
            return;
        }
    },
    fetchCurrentBuyQuoteAndDispatchToStore: async (
        state: State,
        dispatch: Dispatch,
        shouldSetPending: boolean = false,
    ) => {
        const { buyOrderState, providerState, selectedAsset, selectedAssetAmount, affiliateInfo } = state;
        const assetBuyer = providerState.assetBuyer;
        if (
            !_.isUndefined(selectedAssetAmount) &&
            !_.isUndefined(selectedAsset) &&
            buyOrderState.processState === OrderProcessState.None &&
            selectedAsset.metaData.assetProxyId === AssetProxyId.ERC20
        ) {
            await buyQuoteUpdater.updateBuyQuoteAsync(
                assetBuyer,
                dispatch,
                selectedAsset as ERC20Asset,
                selectedAssetAmount,
                shouldSetPending,
                affiliateInfo,
            );
        }
    },
};
