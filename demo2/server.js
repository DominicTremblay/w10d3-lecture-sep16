const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const books = require('./db/books');
const resolvers = require('./resolvers');

const filePath = path.join(__dirname, 'typedefs.graphql');

// Define the GraphQl schema
const typeDefs = fs.readFileSync(filePath, 'utf8');


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});