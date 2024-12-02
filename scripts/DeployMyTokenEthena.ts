import { createPublicClient, http, createWalletClient, formatEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { defineChain } from "viem";
import { abi, bytecode } from "../artifacts/contracts/EthenaPredictionMarket.sol/EthenaPredictionMarket.json";  // Adjust the contract path if needed
import * as dotenv from "dotenv";
dotenv.config();

// Define Ethena Testnet chain
const ethenaTestnet = defineChain({
  id: 52085143,
  name: 'Ethena Testnet',
  network: 'ethena-testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://testnet.rpc.ethena.fi'],
    },
    public: {
      http: ['https://testnet.rpc.ethena.fi'],
    },
  },
});

const deployerPrivateKey = process.env.PRIVATE_KEY || "";  // Ensure you set this in .env

async function main() {
  // Create a public client to interact with the Ethereum network (Ethena Testnet)
  const publicClient = createPublicClient({
    chain: ethenaTestnet,
    transport: http('https://testnet.rpc.ethena.fi'),  // Ethena Testnet RPC URL
  });

  // Log the latest block number
  const blockNumber = await publicClient.getBlockNumber();
  console.log("Last block number:", blockNumber);

  // Get deployer's account from private key
  const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
  const deployer = createWalletClient({
    account,
    chain: ethenaTestnet,
    transport: http('https://testnet.rpc.ethena.fi'),  // Use Ethena Testnet RPC URL here
  });

  console.log("Deployer address:", deployer.account.address);

  // Check deployer's balance
  const balance = await publicClient.getBalance({
    address: deployer.account.address,
  });

  console.log(
    "Deployer balance:",
    formatEther(balance),
    deployer.chain.nativeCurrency.symbol
  );

  // Deploy the contract
  console.log("\nDeploying Token contract...");
  const hash = await deployer.deployContract({
    abi,
    bytecode: bytecode as `0x${string}`,  // Ensure bytecode is correctly formatted as 0x-prefixed string
  });

  // Log the transaction hash
  console.log("Transaction hash:", hash);

  // Wait for transaction confirmation
  console.log("Waiting for confirmations...");
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  const contractAddress = receipt.contractAddress;

  // Log the deployed contract address
  console.log("Token contract deployed to:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
