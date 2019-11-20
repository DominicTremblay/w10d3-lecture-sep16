const { ApolloServer, gql } = require('apollo-server');




// Define the GraphQl schema
const typeDefs = gql`

  type Book {
    id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(id: ID!):Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (root, args, context, info) => {
      console.log(args);

      const result = books.find(book => book.id === Number(args.id));
      console.log(result)
      return result;
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});