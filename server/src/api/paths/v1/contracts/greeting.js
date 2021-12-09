const GreetingContract = require("../../../../../../contracts/build/contracts/Greeting.json");

module.exports = function () {
  let operations = {
    GET,
  };

  async function GET(req, res) {
    try {
      console.log("Fetched greeting");

      res.status(200).json(GreetingContract);
    } catch (error) {
      res.status(err.status || 500).send({ error });
    }
  }

  GET.apiDoc = {
    summary: "Get greeting contract",
    operationId: "getContractGreeting",
    parameters: [],
    responses: {
      200: {
        description: "Get greeting contract",
        schema: {
          type: "object",
          additionalProperties: true,
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
