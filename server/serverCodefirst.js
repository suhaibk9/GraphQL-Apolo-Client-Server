import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { queryType, makeSchema } from 'nexus';
const Query = queryType({
  definition(t) {
    t.string('greeting', {
      resolve: () => 'Hello GraphQL!',
    });
    t.string('Hello', {
      resolve: () => 'Hello World!',
    });
  },
});
const schema = makeSchema({ types: [Query] });
const server = new ApolloServer({ schema: schema });
const info = await startStandaloneServer(server, { listen: { port: 8000 } });
console.log(`🚀 Server ready at ${info.url}`);
