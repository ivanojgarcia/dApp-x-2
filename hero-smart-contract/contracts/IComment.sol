// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./CommentTypes.sol";

interface IComment {
    function addComment(uint _postId, string calldata _comment, string calldata _username) external;
    function getComments(uint _postId) external view returns (Comment[] memory);
    function countComments(uint _postId) external view returns (uint);
}