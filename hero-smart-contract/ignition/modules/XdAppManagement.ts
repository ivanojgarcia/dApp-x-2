import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("XdAppManagementModule", (m) => {
    const xdAppManagement = m.contract("XdAppManagement", []);
    console.log("Smart contract Deployed: ", xdAppManagement)
    return { xdAppManagement };
  });