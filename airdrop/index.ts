import {PublicKey, Connection, LAMPORTS_PER_SOL} from "@solana/web3.js"

export const airdrop = async(address: string, amount: number) =>{
    const publicKey = new PublicKey(address)
    const conn = new Connection("http://localhost:8899", "confirmed")
    const signature = await conn.requestAirdrop(publicKey ,LAMPORTS_PER_SOL * amount)
    await conn.confirmTransaction(signature)
}

// airdrop("6Bs6RfHvXvC5VUAFFph2Qa6U38evYJChnngWy85W64sp", 3)

