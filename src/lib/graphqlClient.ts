import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_API_URL as string;

export const graphqlClient = new GraphQLClient(endpoint);
