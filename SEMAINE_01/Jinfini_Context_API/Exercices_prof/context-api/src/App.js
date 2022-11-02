import { useContext } from "react";

import {PostContext} from "./PostProvider";

import Posts from "./Posts";

const App = () => {
  const [state, dispatch] = useContext(PostContext);
  return (
    <>
      <h1>Posts</h1>
      <h1>Nombre de post(s) : {state.posts.length}</h1>
      <Posts />
    </>
  );
};

export default App;
