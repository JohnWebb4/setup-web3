const { getBlockNumber } = require("../utils/web3.util");

class AccountService {
  async getAccount(accountId) {
    return getBlockNumber();
  }
}

module.exports = new AccountService();
