const Web3 = require("web3");

const URL = process.env.BLOCKCHAIN_URL || "http://localhost:8545";

const web3 = new Web3(URL);

function getBlockNumber() {
  return web3.eth.getBlockNumber();
}

module.exports = { getBlockNumber };
