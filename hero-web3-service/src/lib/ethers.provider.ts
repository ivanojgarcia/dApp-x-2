import { ethers } from 'ethers';

export class EthersLib {
  getProvider(): ethers.JsonRpcProvider {
    const mainnet = `${process.env.MAINNET_URL}/${process.env.ALCHEMY_API_KEY}`;
    const provider = new ethers.JsonRpcProvider(mainnet);
    return provider;
  }

  getEthersBalance(balance: bigint): string {
    return ethers.formatEther(balance);
  }

  getSmartContract(contractAddress: string, erc20Bi: ethers.InterfaceAbi) {
    const contract = new ethers.Contract(
      contractAddress,
      erc20Bi,
      this.getProvider(),
    );
    return contract;
  }
}
