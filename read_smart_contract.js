const { ethers } = require("ethers")

//get your blockchain endpoint 

//get your own node provider id mine is by infura 

const INFURA_ID = ''

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
const address =  ''
//setup the contract object with ethers 
const contract = new ethers.contract(address,ERC20_ABI)