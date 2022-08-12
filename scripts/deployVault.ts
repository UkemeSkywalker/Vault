require('dotenv').config();
import {ethers} from "hardhat";

async function main(){
    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.deploy();

    await vault.deployed();

    console.log("Contract was deployed to:" , vault.address);


}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});