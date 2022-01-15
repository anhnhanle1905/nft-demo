require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
module.exports = {
  networks: {
    hardhat: {
      chainID: 31337,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/zn-eHnoknxFWrWeqhTmQI3MV-MwiAG0v`,
      account: [privateKey],
    },
    // mainnet: {
    //   url:
    //   account: [privateKey]
    // },
  },
  solidity: "0.8.4",
};
