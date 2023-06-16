// import { ethers } from "ethers";
// import { INFURA_API_KEY } from "@env";
// import * as WebBrowser from "expo-web-browser";

// export const AddressGetEthBalance = async (address: string) => {
// export const AddressGetEthBalance = async () => {
//   const provider = new ethers.InfuraProvider('mainnet', INFURA_API_KEY)
//   const balance = await provider
//     .getBalance("0xad94bd19cd23e3390c62fda595c175c4fffdaa68")

//     console.log(balance);

//     // .then((balance) => {
//     //   console.log(balance);
//     // })
//     // .catch((err) => {
//     //   console.log("error: ", err);
//     // });

//   //   return ethers.formatEther(balance);
// };

import { gql } from "@apollo/client";
import client from "../../../api";

export const AddressGetEthBalance = async (address: string) => {
  const query = gql`
    query GetAddressBalance($address: String!) {
      account(address: $address) {
        balance {
          eth
        }
      }
    }
  `;

  try {
    const response = await client.query({
      query,
      variables: {
        address,
      },
    });

    const balance = response.data.account.balance.eth;
    console.log("Balance:", balance);
  } catch (error) {
    console.error("Erreur lors de la récupération de la balance:", error);
  }
};
