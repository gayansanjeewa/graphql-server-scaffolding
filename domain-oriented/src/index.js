import { ApolloServer, gql } from "apollo-server";
import { typeDef as _typeDef, resolvers } from "./books";

const typeDef = gql`
    type Query
`;

const server = new ApolloServer({
    typeDefs: [typeDef, _typeDef],
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
