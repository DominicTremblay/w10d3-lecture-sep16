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

module.exports = resolvers;