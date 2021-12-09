const { getBlockNumber } = require("../utils/web3.util");

async function handleGetBlockNumber(req, res) {
  try {
    const blockNumber = await getBlockNumber();

    res.status(200).send({ block_number: blockNumber });
  } catch (err) {
    console.error(err);

    res.status(500).end();
  }
}

module.exports = { handleGetBlockNumber };
