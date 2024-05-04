import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if(!suppliedPublicKey) {
    throw new Error("Please provide a public key");
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
(async () => {
  const publicKey = new PublicKey(suppliedPublicKey);
  const balanceLamports = await connection.getBalance(publicKey);   
  const balanceSol = balanceLamports / LAMPORTS_PER_SOL;
  if(!publicKey){
    console.log("Invalid public key");
    return;
  }
  console.log(`${publicKey} has a SOL balance of ${balanceSol} SOL`);

})();  
