import fs from 'fs';
import path from 'path';
import { ethers } from 'ethers';

interface AbiItem {
  inputs: { name: string; type: string }[];
  name: string;
  outputs: { name: string; type: string }[];
  stateMutability: string;
  type: string;
}

interface ContractInterface extends ethers.Interface {
  functions: { [name: string]: ethers.FunctionFragment };
}

export class SmartContract {
  public getABIContract() {
    const contractName = process.env.XdAppManagement;
    const abiPath = path.join(
      __dirname,
      'src',
      'core',
      'artifact',
      'contracts',
      `${contractName}.json`,
    );
    const abiJson = fs.readFileSync(abiPath, 'utf8');
    const abi: AbiItem[] = JSON.parse(abiJson);
    return abi;
  }
}
