import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"


export const showBalance = async(publicKey : PublicKey) => {
    const conn = new Connection("http://localhost:8899", "confirmed")
    const response = await conn.getAccountInfo(publicKey)
    return response
};

const pk = new PublicKey('6Bs6RfHvXvC5VUAFFph2Qa6U38evYJChnngWy85W64sp');

(async()=>{
    const res = await showBalance(pk)
    console.log(`The balance of address ${pk} is ${res?.lamports!/LAMPORTS_PER_SOL}`)
})()