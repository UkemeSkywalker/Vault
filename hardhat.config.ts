require('dotenv').config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY]
    }
  }
};
