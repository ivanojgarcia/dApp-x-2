"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = require("@nomicfoundation/hardhat-ignition/modules");
exports.default = (0, modules_1.buildModule)("XdAppManagementModule", (m) => {
    const xdAppManagement = m.contract("XdAppManagement", []);
    return { xdAppManagement };
});
