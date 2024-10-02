import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("XdAppDeployment", (m) => {
  // Deploy CommentManagement
  const commentManagement = m.contract("CommentManagement", []);

  // Deploy XdAppManagement with the CommentManagement address
  const xdAppManagement = m.contract("XdAppManagement", [commentManagement]);

  // Assign CALLER_ROLE to XdAppManagement in CommentManagement
  m.call(commentManagement, "grantCallerRole", [xdAppManagement])

  return { commentManagement, xdAppManagement };
});