require('dotenv').config();
import {ethers} from "hardhat";

async function main(){
    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.deploy();

    await vault.deployed();

    console.log("Contract was deployed to:" , vault.address);


    // const beneficiary = "0xEd521548b91C5e4f58bCc1f30dE9691eff517048";
    // const time = "00190";

    // const amount = ethers.utils.parseEther('0.00005')

    // const CreateGrant = await vault.createGrant(beneficiary, time, {value: amount});
    // const result = (await CreateGrant.wait()).logs;
    // console.log(result);

    


}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});