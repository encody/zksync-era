import '@nomiclabs/hardhat-vyper';
import '@matterlabs/hardhat-zksync-solc';
import '@matterlabs/hardhat-zksync-vyper';

export default {
    zksolc: {
        version: '1.3.13',
        compilerSource: 'binary',
        settings: {
            isSystem: true
        }
    },
    zkvyper: {
        version: '1.3.9',
        compilerSource: 'binary'
    },
    networks: {
        hardhat: {
            zksync: true
        }
    },
    solidity: {
        version: '0.8.20'
    },
    vyper: {
        version: '0.3.3'
    }
};
