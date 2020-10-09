import { ApolloServer } from 'apollo-server';
import { mergeResolvers, mergeTypeDefs } from 'graphql-tools';

import config from './config';
import connect from './db';
import menuItem from './types/menu-item/menu-item.resolvers';

import loadTypeSchema from './helpers/schema';

const start = async () => {
  const menuItemSchema = await loadTypeSchema('menu-item');

  const server = new ApolloServer({
    typeDefs: mergeTypeDefs([menuItemSchema]),
    resolvers: mergeResolvers([menuItem]),
  });

  await connect(config.dbUrl);
  const { url } = await server.listen({ port: config.port });

  // eslint-disable-next-line no-console
  console.log(`🚀 Server listening on port ${url}`);
};

export default start;
