module.exports = {
  networks: {
    42: {
      addressUrl: 'https://dashboard.tenderly.co/contract/kovan/',
      txUrl: 'https://dashboard.tenderly.co/tx/kovan/',
      // addressUrl: 'https://kovan.etherscan.io/address/',
      // txUrl: 'https://kovan.etherscan.io/tx/',
      gyen: '0x0BFa7Ab9F16f7a89323c1f89089d12788e6C22A5',
      zusd: '0xfe738253a9e0943e881d0844285e50F8a0123d19', 
      relayHub: '0xcfcb6017e8ac4a063504b9d31b4AbD618565a276',
      paymaster: '0x569D1065E647a82F466B96a58cCB0633221569B0',
      forwarder: '0x663946D7Ea17FEd07BF1420559F9FB73d85B5B03'
    },
    3: {
      addressUrl: 'https://dashboard.tenderly.co/contract/ropsten/',
      txUrl: 'https://dashboard.tenderly.co/tx/ropsten/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      gyen: '0x1a1FE778E4026aB3677b402E232Ac7C35E318f05',
      zusd: '0x989bE8F86DbE3e5DD98e3E54982C941a09a15B84',
      relayHub: '0xF0851c3333a9Ba0D61472de4C0548F1160F95f17',
      paymaster: '0x4aa21CdEba9dfEC2C2621b83a15262a41C67aC67',
      forwarder: '0x766400B526fB5889AE6C52b369671F5eE137880b'
    }
  }
}
