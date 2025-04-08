import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { showBalance } from "../show-balance";

export const transferSol = async(from : Keypair, to : PublicKey, amount: number) => {
    const conn = new Connection("http://localhost:8899", "confirmed")
    const transaction = new Transaction();

    const instruction = SystemProgram.transfer({
        fromPubkey : from.publicKey,
        toPubkey : to,
        lamports : amount * LAMPORTS_PER_SOL
    })

    transaction.add(instruction)

    await sendAndConfirmTransaction(conn, transaction, [from])

    console.log('Done')
}

const secret = Uint8Array.from([161,27,216,128,35,84,57,73,111,20,102,235,76,192,211,234,135,227,222,124,39,173,170,12,148,96,174,250,141,134,53,13,77,18,226,55,238,156,22,39,151,39,10,162,79,200,209,108,3,143,110,56,72,110,62,66,189,228,29,16,182,115,173,199])
const fromKeypair = Keypair.fromSecretKey(secret)
const toPublicKey = new PublicKey('3d8vYbgnqeCf5x4DcwEeKdHorHEdww4ht7pW7k7mgEUq');

(async()=>{
    const initBalance = await showBalance(toPublicKey)
    console.log(`Initial Balance of ${toPublicKey} is ${initBalance}`)
    await transferSol(fromKeypair, toPublicKey, 2)
    const finalBalance = await showBalance(toPublicKey)
    console.log(`Final Balance of ${toPublicKey} is ${finalBalance}`)
})()

