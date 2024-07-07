import { ethers } from 'ethers';

export class EthersLib {
  getProvider(): ethers.JsonRpcProvider {
    const mainnet = `${process.env.MAINNET_URL}/${process.env.ALCHEMY_API_KEY}`;
    // const mainnet = 'http://127.0.0.1:7545';
    const provider = new ethers.JsonRpcProvider(mainnet);
    return provider;
  }

  convertToEther(balance: bigint): string {
    return ethers.formatEther(balance);
  }

  readSmartContract(contractAddress: string, erc20Bi: ethers.InterfaceAbi) {
    const contract = new ethers.Contract(
      contractAddress,
      erc20Bi,
      this.getProvider(),
    );
    return contract;
  }

  writeSmartContract(
    contractAddress: string,
    erc20Bi: ethers.InterfaceAbi,
    signer: ethers.Wallet,
  ) {
    const contract = new ethers.Contract(contractAddress, erc20Bi, signer);
    return contract;
  }

  getBalance(address: string) {
    return this.getProvider().getBalance(address);
  }

  getSignerFromPrivateKey(privateKey: string) {
    const wallet = new ethers.Wallet(privateKey, this.getProvider());
    return wallet;
  }

  async getSigner() {
    const provider = this.getProvider();
    return await provider.getSigner();
  }
}
