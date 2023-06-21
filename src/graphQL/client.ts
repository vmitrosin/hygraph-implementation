import {ApolloClient, InMemoryCache} from "@apollo/react-hooks";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_HYGRAPH_API,
  cache: new InMemoryCache(),
});