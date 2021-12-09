# Setup Web 3

Goal: Setup Web 3 to better understand blockchain and how it applies to the stack.

## Setup

Install [Ganache](http://trufflesuite.com/ganache/)

Setup a Ganache Etherium blockchain

Install [Ganache-cli](https://www.npmjs.com/package/ganache-cli)

Install [Truffle](http://trufflesuite.com/index.html)

```sh
npm i -g truffle
```

Install [Solidity](https://docs.soliditylang.org/en/v0.8.10/)

```
npm i -g solc
```

## Local Development

Start ganache

Start ganache-cli

```sh
ganache-cli
```

Start server

```sh
cd server
node index.js
```

Open website

```
open http://localhost:8080
```

## Contracts

Create a contract inside contracts

```sh
cd contracts
truffle create contract $NAME
```

Update the contract. And add a migration in `migrations/`. When ready to migrate

```sh
truffle compile
truffle migrate
```
