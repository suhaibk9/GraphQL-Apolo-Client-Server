import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = `#graphql
schema{
    query: Query
}
type Query {
    greeting: String,
    Hello: String
}
`;
const resolvers = {
  Query: {
    greeting: () => 'Hello GraphQL!',
    Hello: () => 'Hello World!',
  },
};
const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
const info = await startStandaloneServer(server, { listen: { port: 8080 } });
console.log(`🚀 Server ready at ${info.url}`);
