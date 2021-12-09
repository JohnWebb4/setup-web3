module.exports = function (accountService) {
  let operations = {
    GET,
  };

  async function GET(req, res) {
    const accountId = req.params.account;

    try {
      const account = await accountService.getAccount(accountId);

      res.send({ account });
    } catch (error) {
      res.status(err.status || 500).send({ error });
    }
  }

  GET.apiDoc = {
    summary: "Returns worlds by name.",
    operationId: "getWorlds",
    parameters: [],
    responses: {
      200: {
        description: "Get account balance",
        schema: {
          type: "array",
        },
      },
      default: {
        description: "An error occurred",
        schema: {
          additionalProperties: true,
        },
      },
    },
  };

  return operations;
};
