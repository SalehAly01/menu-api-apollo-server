import { ApolloServer } from 'apollo-server';

import config from './config';
import connect from './db';

const start = async () => {
  const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `;

  const server = new ApolloServer({ typeDefs: [rootSchema], resolvers: {} });

  await connect(config.dbUrl);
  const { url } = await server.listen({ port: config.port });

  // eslint-disable-next-line no-console
  console.log(`🚀 Server listening on port ${url}`);
};

export default start;
