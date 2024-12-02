# Ethena Prediction Market Contract
The Ethena Prediction Market Contract is a decentralized smart contract platform designed for creating and managing prediction markets on the Ethereum blockchain. It facilitates transparent, trustless, and efficient mechanisms for users to forecast outcomes and place wagers on various events.

Deployed ERC20 token (USDe) here:<br /> 
https://testnet.explorer.ethena.fi/address/0x997edF60A68F8fa5fDF313E205690e0DB7EB4Ba9?tab=contract <br />

Deployed the EthenaPredictionMarket contract here:<br /> 
https://testnet.explorer.ethena.fi/address/0x9aa08D9081221fAC06916164F5A31A225D7101F3?tab=txs <br />

Here's the link for the frontend:<br /> 
https://github.com/0xGRAV3R/ethena-prediction-market <br />

Demo video:<br />
https://www.youtube.com/watch?v=8_-LEn8qbYA<br />

## Features
- Create prediction markets with a question and two possible outcomes.
- Users can buy shares for either of the outcomes.
- Market resolution determines the winning outcome.
- Users can claim their winnings proportional to their shares if they bet on the correct outcome.
- Batch claim functionality for multiple users to claim winnings.

### Prediction Market

- Users can bet on the outcome of a question (e.g., *"Will the Lakers win tonight?"*).
- Each question has two options (e.g., *Option A* and *Option B*) for users to choose from.

### Shares

- **Shares** represent a user's stake in the outcome.
    - By purchasing shares in **Option A**, the user is betting on that outcome.
    - The total number of shares for each option increases as more users place their bets.
  
### Market Resolution

- The market "closes" after a predefined time (`endTime`).
- At this point, the **owner** (typically the creator of the contract) resolves the market and marks the correct outcome.
    - For example, if the Lakers win, the owner can mark **Option A** as the correct answer.

### Winnings

- Users who place their bets on the correct option (e.g., betting on **Option A** if **Option A** wins) are eligible to claim their winnings.
- Winnings are calculated based on the user's shares and the total number of shares purchased by others.

## Main Functions

### `createMarket`
- The owner of the contract can create a new market by providing:
  - A **question** to be predicted (e.g., *"Will the Lakers win tonight?"*).
  - Two **options** for users to bet on (e.g., *Option A* and *Option B*).

### `buyShares`
- Users can purchase shares in either **Option A** or **Option B** to place their bets on the outcome.

### `resolveMarket`
- The owner resolves the market once the set time (`endTime`) has passed.
- The owner chooses the winning option (e.g., marking **Option A** as the winner).

### `claimWinnings`
- Users can claim their winnings based on their shares and the winning option after the market has been resolved.

### `batchClaimWinnings`
- The owner can batch claim winnings for multiple users at once, simplifying the process of distributing rewards.


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

