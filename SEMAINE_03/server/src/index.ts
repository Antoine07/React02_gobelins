import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

interface Book {
  title: string;
  author: string;
  id: number;
  rate?: number;
  notes?: number[];
}

interface Author {
  author: string;
  id: number;
}

const books: Book[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
    id: 1,
    rate: 20,
    notes: [11, 20, 18],
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
    id: 2,
    rate: 17,
    notes: [11, 20, 18],
  },
  {
    title: "Guerre et Paix",
    author: "Tolstoi",
    id: 3,
    rate: 20,
  },
];

function getAuthors(): Author[] {
  const authors = books.map(({ author, id }) => ({ author, id }));

  return authors;
}

const resolvers = {
  Query: {
    books: () => books,
    authors: () => getAuthors(),
    bookById: (parent, args, context, info) => {
      const { id } = args;

      const book = books.find((b) => b.id === id);
      let avg = null ;
      if (book?.notes?.length) {
        avg = Math.floor(( book.notes.reduce((acc, curr) => acc + curr) / book.notes.length )* 100 ) / 100;
      }

      return { ...book, avg };
    },
  },
};

const typeDefs = `#graphql

    type Book {
        title: String
        author: String
        id: Int
        rate: Int
    }

    type BookAvg {
      title: String
      author: String
      id: Int
      rate: Int
      avg: Float
    }

    type Author {
        author: String
        id: Int
    }

    type Query {
        books: [Book]
        book: Book
        authors: [Author]
        bookById(id: Int): BookAvg
    }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
