require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan recipe place concert harvest cash equal giant'; 
let testAccounts = [
"0x1e50113969caabf6bfd479762ac3ff64aedf7612cd8e046c1c570098556b9c7e",
"0x4897a1deb8b8960043f83c18797fc7a61315b3df00c68d81ea89c6f399f57941",
"0x5ac017d5a5362c4ce211c6e511c18b1f4c78dd7695b3da66f337238c00659797",
"0x209e25bf323d7de953e2a7e39c559d810fb442c27a5db8b9916f7e28399386d6",
"0x7773774cb6456ce19775b26b060fdc01197e3b55c5b3740ce0347bdc65546d9c",
"0x0c73ac208ea251d17820816bb5fa16a4c44227847726ace9c0ceb1fc977dbb0d",
"0x585c644ea4db692398e350755eeb9a6bdf1b8842d021eb9bc66566de7b6fb593",
"0x421d9727c62ae9e025cab3b166e4148e58bfed49dcd487576f82759d72b53b71",
"0xc6d17b76ad2abb53cc1ba9858957de6945c0521a9c3245147ed56daa05382806",
"0xe0dc3da9c5a8a10d91c03d5c8637d90c4e6b3b8f2b138aacae4089cfef2c663e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


