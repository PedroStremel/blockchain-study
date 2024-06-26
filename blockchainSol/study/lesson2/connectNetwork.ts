import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

(async () => {

    const connection = new Connection(clusterApiUrl("devnet"));
    const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
    const balance = await connection.getBalance(address);
    const balanceInSol = balance / LAMPORTS_PER_SOL;

    console.log(`The balance of the account at ${address} is ${balanceInSol} lamports`);
    console.log(`Finished!`)
})()




