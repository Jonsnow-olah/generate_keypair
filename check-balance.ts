// To read the balance of an account:

// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// const publicKey = new PublicKey("8jZPViDZPGY1r39KzSxT3RTnF4dnYgT1aHSFb6D1RCEq");

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

// console.log(
//   `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
// );



///////// Read balance of another person's wallet address //////////////

import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey ) {
  throw new Error("Provide a public key to check the balance of!");
}
if (suppliedPublicKey.length !==44) {
    throw new Error("Your wallet address is invalid or it's missing a letter");
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);