const URL = "http://localhost:8080";
let web3;

async function getWeb3Instance() {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);

    await window.ethereum.request({ method: "eth_requestAccounts" });

    return web3;
  } else {
    throw new Error("MetaMask missing");
  }
}

async function getContract() {
  const response = await fetch(`${URL}/v1/contracts/greeting`, {
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  netId = await web3.eth.net.getId();

  const deployedNetwork = data.networks[netId];

  const greeting = new web3.eth.Contract(
    data.abi,
    deployedNetwork && deployedNetwork.address
  );

  return greeting;
}

window.addEventListener("load", async () => {
  web3 = await getWeb3Instance();

  const greeting = await getContract();
});
