import { expect } from "chai";
import { ethers } from "hardhat";

describe("XdAppManagement", () => {
    it("Should deploy", async () => {
        const [owner] = await ethers.getSigners();
        const XdAppManagement = await ethers.getContractFactory("XdAppManagement");
        const xdAppManagement = await XdAppManagement.deploy();
    });
})