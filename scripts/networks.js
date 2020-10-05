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
      gyen: '0x89Ebdb14400a13e956A5Be01EE38b8eA0eDd6b6e',
      zusd: '0x4E50a95B7c7bcbCDBB689ccf668d62cE107F62f5',
      relayHub: '0xF0851c3333a9Ba0D61472de4C0548F1160F95f17',
      paymaster: '0x62dd8DC97d43FaD1558209627908896299831d37',
      forwarder: '0x766400B526fB5889AE6C52b369671F5eE137880b'
    }
  }
}
