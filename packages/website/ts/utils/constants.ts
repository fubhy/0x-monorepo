import { ALink } from '@0x/react-shared';
import { BigNumber } from '@0x/utils';
import { Key, WebsitePaths } from 'ts/types';

const URL_FORUM = 'https://forum.0x.org';
const URL_ZEROEX_CHAT = 'https://discord.gg/d3FTX3M';

export const constants = {
    DECIMAL_PLACES_ETH: 18,
    DECIMAL_PLACES_ZRX: 18,
    ETHER_TOKEN_SYMBOL: 'WETH',
    ZRX_TOKEN_SYMBOL: 'ZRX',
    ETHER_SYMBOL: 'ETH',
    TOKEN_AMOUNT_DISPLAY_PRECISION: 4,
    GENESIS_ORDER_BLOCK_BY_NETWORK_ID: {
        1: 4145578,
        42: 3117574,
        50: 0,
        3: 1719261,
        4: 1570919,
    } as { [networkId: number]: number },
    HOME_SCROLL_DURATION_MS: 500,
    HTTP_NO_CONTENT_STATUS_CODE: 204,
    LOCAL_STORAGE_KEY_ACCEPT_DISCLAIMER: 'didAcceptPortalDisclaimer',
    LOCAL_STORAGE_KEY_DISMISS_WETH_NOTICE: 'hasDismissedWethNotice',
    MAKER_FEE: new BigNumber(0),
    MAINNET_NAME: 'Main network',
    MINT_AMOUNT: new BigNumber('100000000000000000000'),
    NETWORK_ID_MAINNET: 1,
    NETWORK_ID_KOVAN: 42,
    NETWORK_ID_TESTRPC: 50,
    NETWORK_ID_ROPSTEN: 3,
    NULL_ADDRESS: '0x0000000000000000000000000000000000000000',
    PROVIDER_NAME_LEDGER: 'Ledger',
    PROVIDER_NAME_METAMASK: 'MetaMask',
    PROVIDER_NAME_PARITY_SIGNER: 'Parity Signer',
    PROVIDER_NAME_MIST: 'Mist',
    PROVIDER_NAME_CIPHER: 'Cipher Browser',
    PROVIDER_NAME_COINBASE_WALLET: 'Coinbase Wallet',
    PROVIDER_NAME_GENERIC: 'Injected Web3',
    PROVIDER_NAME_PUBLIC: '0x Public',
    ROLLBAR_ACCESS_TOKEN: '32c39bfa4bb6440faedc1612a9c13d28',
    S3_DOC_BUCKET_ROOT: 'https://s3.amazonaws.com/doc-jsons',
    S3_STAGING_DOC_BUCKET_ROOT: 'https://s3.amazonaws.com/staging-doc-jsons',
    SUCCESS_STATUS: 200,
    UNAVAILABLE_STATUS: 503,
    TAKER_FEE: new BigNumber(0),
    TESTNET_NAME: 'Kovan',
    NUMERAL_USD_FORMAT: '$0,0.00',
    EMAIL_JOBS: 'jobs@0x.org',
    PROJECT_URL_ETHFINEX: 'https://www.ethfinex.com/',
    PROJECT_URL_AMADEUS: 'http://amadeusrelay.org',
    PROJECT_URL_DDEX: 'https://ddex.io',
    PROJECT_URL_DECENT_EX: 'https://decent.exchange',
    PROJECT_URL_DEXTROID: 'https://www.dextroid.io',
    PROJECT_URL_ERC_DEX: 'https://ercdex.com',
    PROJECT_URL_OPEN_RELAY: 'https://openrelay.xyz',
    PROJECT_URL_RADAR_RELAY: 'https://radarrelay.com',
    PROJECT_URL_PARADEX: 'https://paradex.io',
    PROJECT_URL_DYDX: 'https://dydx.exchange',
    PROJECT_URL_MELONPORT: 'https://melonport.com',
    PROJECT_URL_DISTRICT_0X: 'https://district0x.io',
    PROJECT_URL_DHARMA: 'https://dharma.io',
    PROJECT_URL_LENDROID: 'https://lendroid.com',
    PROJECT_URL_MAKER: 'https://makerdao.com',
    PROJECT_URL_ARAGON: 'https://aragon.one',
    PROJECT_URL_BLOCKNET: 'https://blocknet.co',
    PROJECT_URL_0CEAN: 'https://theocean.trade',
    PROJECT_URL_IMTOKEN: 'https://tokenlon.token.im/',
    PROJECT_URL_AUGUR: 'https://augur.net',
    PROJECT_URL_AUCTUS: 'https://auctus.org',
    PROJECT_URL_OPEN_ANX: 'https://www.openanx.org',
    PROJECT_URL_IDT: 'https://kinalpha.com',
    URL_ANGELLIST: 'https://angel.co/0xproject/jobs',
    URL_APACHE_LICENSE: 'http://www.apache.org/licenses/LICENSE-2.0',
    URL_BITLY_API: 'https://api-ssl.bitly.com',
    URL_BLOG: 'https://blog.0xproject.com',
    URL_DISCOURSE_FORUM: 'https://forum.0x.org',
    URL_ECOSYSTEM_APPLY: 'https://0x.smapply.io/',
    URL_EXTENSIONS_BLOG_POST: 'https://blog.0xproject.com/0x-extensions-enabling-new-types-of-exchange-1db0bf6125b6',
    URL_ECOSYSTEM_BLOG_POST: 'https://blog.0xproject.com/announcing-the-0x-ecosystem-acceleration-program-89d1cb89d565',
    URL_VOTE_BLOG_POST: 'https://blog.0xproject.com/zeip-23-trade-bundles-of-assets-fe69eb3ed960',
    URL_FIREFOX_U2F_ADDON: 'https://addons.mozilla.org/en-US/firefox/addon/u2f-support-add-on/',
    URL_TESTNET_FAUCET: 'https://faucet.0x.org',
    URL_GITHUB_ORG: 'https://github.com/0xProject',
    URL_GITHUB_WIKI: 'https://github.com/0xProject/wiki',
    URL_FORUM,
    URL_PROTOCOL_SPECIFICATION:
        'https://github.com/0xProject/0x-protocol-specification/blob/master/v2/v2-specification.md',
    URL_METAMASK_CHROME_STORE: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
    URL_METAMASK_FIREFOX_STORE: 'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/',
    URL_COINBASE_WALLET_IOS_APP_STORE: 'https://itunes.apple.com/us/app/coinbase-wallet/id1278383455?mt=8',
    URL_COINBASE_WALLET_ANDROID_APP_STORE: 'https://play.google.com/store/apps/details?id=org.toshi&hl=en',
    URL_METAMASK_HOMEPAGE: 'https://metamask.io/',
    URL_METAMASK_OPERA_STORE: 'https://addons.opera.com/en/extensions/details/metamask/',
    URL_MIST_DOWNLOAD: 'https://github.com/ethereum/mist/releases',
    URL_PARITY_CHROME_STORE:
        'https://chrome.google.com/webstore/detail/parity-ethereum-integrati/himekenlppkgeaoeddcliojfddemadig',
    URL_REDDIT: 'https://reddit.com/r/0xproject',
    URL_SANDBOX: 'https://codesandbox.io/s/github/0xproject/0x-codesandbox',
    URL_STANDARD_RELAYER_API_GITHUB: 'https://github.com/0xProject/standard-relayer-api/blob/master/README.md',
    URL_TWITTER: 'https://twitter.com/0xproject',
    URL_FACEBOOK: 'https://www.facebook.com/0xProject/',
    URL_WETH_IO: 'https://weth.io/',
    URL_CANONICAL_WETH_POST: 'https://blog.0xproject.com/canonical-weth-a9aa7d0279dd',
    URL_ZEROEX_CHAT,
    URL_LAUNCH_KIT: 'https://github.com/0xProject/0x-launch-kit',
    URL_LAUNCH_KIT_ERC20_DEMO: 'https://demo.0x.org/erc20/',
    URL_LAUNCH_KIT_ERC721_DEMO: 'https://demo.0x.org/marketplace/',
    URL_WEB3_DOCS: 'https://github.com/ethereum/wiki/wiki/JavaScript-API',
    URL_WEB3_DECODED_LOG_ENTRY_EVENT:
        'https://github.com/0xProject/web3-typescript-typings/blob/f5bcb96/index.d.ts#L123',
    URL_WEB3_LOG_ENTRY_EVENT: 'https://github.com/0xProject/web3-typescript-typings/blob/f5bcb96/index.d.ts#L127',
    URL_WEB3_PROVIDER_DOCS: 'https://github.com/0xProject/web3-typescript-typings/blob/f5bcb96/index.d.ts#L150',
    URL_BIGNUMBERJS_GITHUB: 'http://mikemcl.github.io/bignumber.js',
    URL_MISSION_AND_VALUES_BLOG_POST: 'https://blog.0xproject.com/the-0x-mission-and-values-181a58706f9f',
    DEVELOPER_TOPBAR_LINKS: [
        {
            title: Key.Wiki,
            to: WebsitePaths.Wiki,
        },
        {
            title: Key.Forum,
            to: URL_FORUM,
            shouldOpenInNewTab: true,
        },
        {
            title: Key.LiveChat,
            to: URL_ZEROEX_CHAT,
            shouldOpenInNewTab: true,
        },
    ] as ALink[],
};
