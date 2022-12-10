require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile property harvest fashion flee season'; 
let testAccounts = [
"0x4e3219b27499ba2a32c7ac8a3755dbe0f5ceeef547d9ea92cc3c97023a207b3b",
"0x2ef7f786d5c8284bdabfe54e6314f1b2cb70eca78e796ecb080eca5660f030a5",
"0x95a65d620823f3bdb18a405002cc7ec67ae9ecb65de8ebbebdbdedaffb297ab1",
"0x5c3d472d6cfe51be063d73c37cf4a6053339affccca5007d43289a3803c724ef",
"0x7c601d8dd47cdf59d14e6b61349e9adb4418b6c0fa6edc8d6d1a39cdf36088eb",
"0x8b341b9b6b96b6a8d6b021ca39f618a6c0dc7a10cc996beed89700e6c48f44a9",
"0x3749c54d04961c2d419d89f17382fea8d3bdb6cbbf8a050f691e11a0f000ce20",
"0x009b563ed6eb931574f4298822b4620e1ad30f4d51ce93ad745836ba0781d5fa",
"0x3a8ada1ba760749ae30bf0e8324c0958c9b485e466b3bf9b0acd1a6cab3b2c6e",
"0x59137a01e5141335643fee4c694230b74f41d8fac19b254044f521be3e9af224"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

