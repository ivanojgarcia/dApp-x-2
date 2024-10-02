// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "./CommentTypes.sol";
import "./IComment.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract CommentManagement is IComment, AccessControl {

   constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
   bytes32 public constant CALLER_ROLE = keccak256("CALLER_ROLE");
   mapping(uint => Comment[]) private commentsByPost;

   modifier onlyRegisteredContracts {
    require(hasRole(CALLER_ROLE, msg.sender), "Caller is not authorized");
    _;
   }


   function addComment(uint _postId, string calldata _comment, string calldata _username) external onlyRegisteredContracts override {

      Comment memory newComment = Comment({
         comment: _comment,
         username: _username,
         postId: _postId,
         created: block.timestamp
      });

      commentsByPost[_postId].push(newComment);
   }

   function getComments(uint _postId) external view override returns (Comment[] memory) {
      return commentsByPost[_postId];
   }

   function grantCallerRole(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(CALLER_ROLE, account);
    }

    function revokeCallerRole(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(CALLER_ROLE, account);
    }

    function countComments(uint _postId) external view returns (uint) {
        return commentsByPost[_postId].length;
    }

}