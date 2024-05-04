const { getKeypairFromEnvironment } = require('@solana-developers/helpers');
const { Keypair } = require('@solana/web3.js');

//generate a keypair
const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);

//Loading an existent keypair
const existKeypair = getKeypairFromEnvironment("SECRET_KEY");