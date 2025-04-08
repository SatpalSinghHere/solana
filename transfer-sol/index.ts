import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";

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