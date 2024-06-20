import { ethers } from 'ethers';

export const SMARTCONTRACT_ADDRESS =
  '0x889166f9D4304E845c5Be34272041DbF982336aB';
export const ERC20_ABI: ethers.InterfaceAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_mainUserAddress',
        type: 'address',
      },
    ],
    name: 'addFollowers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_postId', type: 'uint256' }],
    name: 'addLikes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: '_title', type: 'string' },
      { internalType: 'string', name: '_description', type: 'string' },
    ],
    name: 'createPost',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_mainUserAddress',
        type: 'address',
      },
    ],
    name: 'getFollowers',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPosts',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'id', type: 'uint256' },
          { internalType: 'string', name: 'title', type: 'string' },
          { internalType: 'string', name: 'description', type: 'string' },
          { internalType: 'address', name: 'author', type: 'address' },
          { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
          { internalType: 'address[]', name: 'likes', type: 'address[]' },
          { internalType: 'bool', name: 'isRead', type: 'bool' },
        ],
        internalType: 'struct XdAppManagement.Post[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getUnreadPosts',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'id', type: 'uint256' },
          { internalType: 'string', name: 'title', type: 'string' },
          { internalType: 'string', name: 'description', type: 'string' },
          { internalType: 'address', name: 'author', type: 'address' },
          { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
          { internalType: 'address[]', name: 'likes', type: 'address[]' },
          { internalType: 'bool', name: 'isRead', type: 'bool' },
        ],
        internalType: 'struct XdAppManagement.Post[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_userAddress', type: 'address' },
    ],
    name: 'getUser',
    outputs: [
      { internalType: 'string', name: '', type: 'string' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address[]', name: '', type: 'address[]' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_author', type: 'address' }],
    name: 'getUserPosts',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'id', type: 'uint256' },
          { internalType: 'string', name: 'title', type: 'string' },
          { internalType: 'string', name: 'description', type: 'string' },
          { internalType: 'address', name: 'author', type: 'address' },
          { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
          { internalType: 'address[]', name: 'likes', type: 'address[]' },
          { internalType: 'bool', name: 'isRead', type: 'bool' },
        ],
        internalType: 'struct XdAppManagement.Post[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_postId', type: 'uint256' }],
    name: 'getUsernamePost',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_postId', type: 'uint256' }],
    name: 'isReadPost',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: '_username', type: 'string' }],
    name: 'userRegister',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
