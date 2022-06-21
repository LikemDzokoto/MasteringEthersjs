const { ethers } = require("ethers")

//get the endpoint for the blockchain node 
const INFURA_ID = ''


const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)
//get the account address of two accounts on the kovan test network
const account1  = '' //account1 
const account2 = '' //account2

const privatekey = 'c38cd0aa1ac5da6ed4e08635b952741911320e04016d02b188bc84bacaecdf52' //privatekey for the first account because this is the signers account 

const wallet = new ethers.Wallet(privatekey, provider)
 
//make an async await function to get the values of the accounts 
const main  = async () =>{
        const sendersBalanceBefore = await provider.getBalance(account1)
        const recieversBalanceBefore = await provider.getBalance(account2)

        const tx = await wallet.sendTransaction({
            to: account2,
            value : ethers.utils.parseEther("0.025")
        })  
        await tx.wait()
        console.log(tx)
        

        const sendersBalanceAfter = await provider.getBalance(account1)
        const recieversAfter = await provider.getBalance(account2)


        console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
        console.log(`reciever balance after: ${ethers.utils.formatEther(recieversAfter)}\n`)

}
main()


