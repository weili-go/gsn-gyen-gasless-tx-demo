module.exports = {
  networks: {
    42: {
      addressUrl: 'https://dashboard.tenderly.co/contract/kovan/',
      txUrl: 'https://dashboard.tenderly.co/tx/kovan/',
      // addressUrl: 'https://kovan.etherscan.io/address/',
      // txUrl: 'https://kovan.etherscan.io/tx/',
      gyen: '0x6C8c489167cd40B6a609Fa37d832F35B556aE617',
      zusd: '0xf2e259598BC5D27BD71e066e86884F3275Ce30f6', 
      relayHub: '0xE9dcD2CccEcD77a92BA48933cb626e04214Edb92',
      paymaster: '0x1Ed32Ec494e62C7A57c0a1979488E77a212B7EB9',
      forwarder: '0x0842Ad6B8cb64364761C7c170D0002CC56b1c498'
    },
    3: {
      addressUrl: 'https://dashboard.tenderly.co/contract/ropsten/',
      txUrl: 'https://dashboard.tenderly.co/tx/ropsten/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      gyen: '0xC82aF3f91947486b398990657cA16Cf86D643C19',
      zusd: '0x01C12adbD00aE8147D65171ED1F15a5bB642802f',
      relayHub: '0x29e41C2b329fF4921d8AC654CEc909a0B575df20',
      paymaster: '0x38339eA061089ABf8b640e145f9Ec477969d3d72',
      forwarder: '0x25CEd1955423BA34332Ec1B60154967750a0297D'
    },
    4: {
      addressUrl: 'https://dashboard.tenderly.co/contract/rinkeby/',
      txUrl: 'https://dashboard.tenderly.co/tx/rinkeby/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      gyen: '0xC021ef8b81153E9Ef644036B82DE7a451a7B719f',
      zusd: '0x5736cFbCfd665BCF0D2Fe546b942E626ff91687E',
      relayHub: '0x53C88539C65E0350408a2294C4A85eB3d8ce8789',
      paymaster: '0x02e55f878E81AD01131870e1b46B732331f45EaC',
      forwarder: '0x956868751Cc565507B3B58E53a6f9f41B56bed74'
    },
  }
}
