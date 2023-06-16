import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { ALCHEMY_API_KEY } from "@env";

const httpLink = createHttpLink({
  // uri: ALCHEMY_API_KEY,
  uri: 'https://eth-mainnet.alchemyapi.io/v2/vziysGT-h7dsBsXU_zkqUucTOv7_z1wb',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
