"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
describe("XdAppManagement", () => {
    it("Should deploy", async () => {
        const [owner] = await hardhat_1.ethers.getSigners();
        const XdAppManagement = await hardhat_1.ethers.getContractFactory("XdAppManagement");
        const xdAppManagement = await XdAppManagement.deploy();
    });
});
