import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type MenuItem {
    name: String
    type: String
    price: Int
  }

  type Query {
    menuItems: [MenuItem]
  }
`;

const menuItems = [
  {
    name: 'Burger',
    type: 'Main Course',
    price: 5,
  },
  {
    name: 'Fries',
    type: 'Side',
    price: 2,
  },
];

const resolvers = {
  Query: {
    menuItems: () => menuItems,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`);
});
