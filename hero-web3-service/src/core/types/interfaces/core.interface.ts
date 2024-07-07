export interface AbiItem {
  inputs: { name: string; type: string }[];
  name: string;
  outputs: { name: string; type: string }[];
  stateMutability: string;
  type: string;
}
