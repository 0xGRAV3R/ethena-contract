// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract EthenaPredictionMarket is Ownable, ReentrancyGuard {
    enum MarketOutcome {
        UNRESOLVED,
        OPTIONS_A,
        OPTION_B
    }

    struct Market {
        string question;
        uint256 endTime;
        MarketOutcome outcome;
        string optionA;
        string optionB;
        uint256 totalOptionAShares;
        uint256 totalOptionBShares;
        bool resolved;
        mapping(address => unit256) optionASharesBalance;
        mapping(address => unit256) optionBSharesBalance;

        mapping(address => bool) hasClaimed;
    }

    IERC20 public bettingToken;
    uint256 public marketCount;
    mapping(uint256 => Market) public markets;

    event MarketCreated(
        uint256 indexed marketId,
        string question,
        string optionA,
        string optionB,
        uint256 endTime
    );

    event SharesPurchased(
        uint256 indexed merketId,
        address indexed buyer,
        bool isOptionA,
        uint256 amount
    );

    event Claimed(
        uint256 indexed marketId
        address indexed user,
        uint256 amount
    );

    constructor(address _bettingToken) {
        bettingToken = IERC20(_bettingToken);
        
    }
}