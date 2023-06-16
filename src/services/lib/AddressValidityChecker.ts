import { ethers } from "ethers";

export async function AddressChecker(address: string): Promise<Boolean> {
  return ethers.isAddress(address);
}
