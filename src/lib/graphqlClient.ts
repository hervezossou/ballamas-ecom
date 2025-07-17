import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_API_URL as string;

console.log("GRAPHQL endpoint:", endpoint);

export const graphqlClient = new GraphQLClient(endpoint);
