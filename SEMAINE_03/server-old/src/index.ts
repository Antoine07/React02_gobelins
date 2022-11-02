interface Author {
  author: string;
  title: string;
  rate: number;
}

interface AuthorState {
  authors: Author[];
  status?: "idle" | "pending" | "succeeded" | "failed";
  count: number;
  error: {};
}

const author : Author = {
    author : "Alan",
    title : "Node",
    rate : 19
}

console.log(author)