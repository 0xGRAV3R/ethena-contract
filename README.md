# Ethena Prediction Market Contract
The Ethena Prediction Market Contract is a decentralized smart contract platform designed for creating and managing prediction markets on the Ethereum blockchain. It facilitates transparent, trustless, and efficient mechanisms for users to forecast outcomes and place wagers on various events.

Deployed ERC20 token (USDe) here: https://testnet.explorer.ethena.fi/address/0x997edF60A68F8fa5fDF313E205690e0DB7EB4Ba9?tab=contract <br /><br />

Deployed the EthenaPredictionMarket contract here: https://testnet.explorer.ethena.fi/address/0x9aa08D9081221fAC06916164F5A31A225D7101F3?tab=txs <br /><br />

Here's the link for the frontend: https://github.com/0xGRAV3R/ethena-prediction-market <br /><br />

## Getting Started
```shell
git clone 
cd ethena-contract
npx hardhat compile
```

### Running a script


To deploy a new contract you can run the DeployWithViem.ts script below:
```shell 
npx ts-node --files ./scripts/DeployWithViem.ts 
npx ts-node --files ./scripts/DeployWithViem.ts defaultParams 
```


### Installation

-copy all files/folders from project2 except artifacts, cache, node_modules<br /> 
-create new project3 and paste here<br /> 
-make sure you have the .env file (.gitignore it)<br /> 
create a scripts folder under the root project4 folder & then create a DeployWithHardhat.ts file under scripts directory<br /> 

### Prerequisites 
```shell
nvm use --lts   
node -v
v20.14.0
```

## Hardhat 
```shell
npm init
npm install --save-dev hardhat
npx hardhat init
```
-> Create a typescript project

```shell
npx hardhat compile
npx hardhat test
npx hardhat clean


cretae a .mocharc.json with contents:
{
  "require": "hardhat/register",
  "timeout": 40000,
  "_": ["test*/**/*.ts"]
}


rm ./contracts/*
rm ./ignition/*
rm ./test/*
npx hardhat clean
npm i viem
npm install --save-dev @nomicfoundation/hardhat-chai-matchers
```

## References
<img width="516" alt="Screenshot 2024-08-18 at 3 32 13 PM" src="https://github.com/user-attachments/assets/1ad7cd81-ce60-4f71-a9bb-b07b8c541284">

