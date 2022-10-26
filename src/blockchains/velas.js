const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0iTGF5ZXJfMSIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUuNCA0NS40IgoJIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwMDM3QzE7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjkuMiwxOS45bC02LjUsMTEuM2wtNi41LTExLjRMMjkuMiwxOS45TDI5LjIsMTkuOXogTTM1LjcsMTYuMUg5LjdsMTMsMjIuOEwzNS43LDE2LjF6IE01LjUsOC41bDIuMSwzLjhoMzAuMQoJbDIuMi0zLjhINS41eiIvPgo8L3N2Zz4K'

export default {
  name: 'velas',
  id: '0x6A',
  networkId: '106',
  label: 'VELAS',
  fullName: 'Velas EVM Mainnet',
  logo,
  currency: {
    name: 'Velas',
    symbol: 'VLX',
    decimals: 18
  },
  explorer: 'https://evmexplorer.velas.com',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://evmexplorer.velas.com/tx/${transaction.id || transaction}` }
    if(token) { return `https://evmexplorer.velas.com/token/${token}` }
    if(address) { return `https://evmexplorer.velas.com/address/${address}` }
  },
  rpc: 'https://evmexplorer.velas.com/rpc',
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "VLX", "name": "Velas", "decimals": 18, "logo": logo, "type": "NATIVE"},
    {"address": "0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126", "symbol": "WVLX", "name": "Wrapped Velas", "decimals": 18, "logo": "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0xc579d1f3cf86749e05cd06f7ade17856c2ce3126/logo.png?raw=true", "type": "20"},
    {"address": "0xc111c29A988AE0C0087D97b33C6E6766808A3BD3", "symbol": "BUSD", "name": "Multichain BUSD", "decimals": 18, "logo": "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0xc111c29a988ae0c0087d97b33c6e6766808a3bd3/logo.png?raw=true", "type": "20"},
    {"address": "0x01445C31581c354b7338AC35693AB2001B50b9aE", "symbol": "USDT", "name": "Multichain USDT", "decimals": 6, "logo": "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0x01445c31581c354b7338ac35693ab2001b50b9ae/logo.png?raw=true", "type": "20"},
    {"address": "0x85219708c49aa701871Ad330A94EA0f41dFf24Ca", "symbol": "ETH", "name": "ETH", "decimals": 18, "logo": "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0x85219708c49aa701871ad330a94ea0f41dff24ca/logo.png?raw=true", "type": "20"},
    {"address": "0xaBf26902Fd7B624e0db40D31171eA9ddDf078351", "symbol": "WAG", "name": "WagyuSwap", "decimals": 18, "logo": "https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0xabf26902fd7b624e0db40d31171ea9dddf078351/logo.png?raw=true", "type": "20"},
  ]
}
