import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-eu-west-2.hygraph.com/v2/cli7wz01v3t9301t9eprl3906/master',
  cache: new InMemoryCache(),
});