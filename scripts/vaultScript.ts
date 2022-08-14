require('dotenv').config();
import {ethers} from "hardhat";

async function main(){

    const CONTRACTADDRESS = "0x6411647e89907e1Aa33B9570FA69Bc0E73FDd03F";

    const beneficiary = "0xF8E7154C205Cb7A58eeC4AcD8706D55C0627eB8B";
    const time = "00190";
    const amount = ethers.utils.parseEther("0.0012");

    const Vault = await ethers.getContractAt("Ivault", CONTRACTADDRESS);
    

    // await Vault.createGrant(beneficiary, time, {value: amount});
    const result = await Vault.withdraw(1);
    console.log("feedback:", result);
    // const balance = await Vault.getBalance();

    // console.log("contract balance:", balance);
    
    }

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});