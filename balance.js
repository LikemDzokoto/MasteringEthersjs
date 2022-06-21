const { ethers } = require("ethers")

//get your blockchain endpoint 

//get your own node provider id mine is by infura 

const INFURA_ID = ''

//get the node provider 
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

//get an address of a live account on the mainnet and verify on etherscan 

const address = '0x00000000219ab540356cBB839Cbe05303d7705Fa'

//use an async function to get the balance of  the account
const main = async () => {
    const balance = await provider.getBalance(address)
    //display the balance and format the eth to return a smaller value 
    console.log(`\n ETH balance of ${address} -> ${ethers.utils.formatEther(balance)}`)
}
main()