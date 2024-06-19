"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = config_1.vars.get("ALCHEMY_API_KEY");
const SEPOLIA_PRIVATE_KEY = config_1.vars.get("SEPOLIA_PRIVATE_KEY");
const config = {
    solidity: "0.8.24",
    networks: {
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
            accounts: [SEPOLIA_PRIVATE_KEY]
        }
    }
};
exports.default = config;
