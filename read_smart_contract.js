const { ethers } = require("ethers")

//get your blockchain endpoint 

//get your own node provider id mine is by infura 

const INFURA_ID = '1ce214ac2166482f95a4288ef60c5413'

//get the node provider 
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)


//get the abi of the contract 
const ERC20_ABI= [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns(uint256)",
    "function balanceOf(address) view returns(uint256)"

]





//read from a smart contract address
// in this case i would be reading from the dai stablecoin  contract address 
const address =  '0x6B175474E89094C44Da98b954EedeAC495271d0F'
//setup the contract object with ethers 
const contract =  new  ethers.Contract(address,ERC20_ABI,provider)

//make an async function to return the values of the functions in the abi 
const main = async() => {
    const name = await contract.name()
    const symbol = await contract.symbol()
    const  totalSupply = await contract.totalSupply()

    console.log(`\nReading from this ${address} \n`)
    console.log(`NAME -> ${name}`)
    console.log(`Symbol -> ${symbol}`)
    console.log(`totalSupply is ${totalSupply} \n`)

    //output the balance of any random address on dai and format ether
    const balance = await contract.balanceOf('0x6c6Bc977E13Df9b0de53b251522280BB72383700')
    console.log(`balance of 0x6c6Bc977E13Df9b0de53b251522280BB72383700 -> ${balance}`)
    console.log(`formater balance is ${ethers.utils.formatEther(balance)}`)
}
main()

