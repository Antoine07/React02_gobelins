import { useContext } from "react";

import {PostContext} from "./PostProvider";

const Posts = () => {
  const [state, dispatch] = useContext(PostContext);
  return (
    <>
      <div>
        <button
          onClick={() => dispatch({ type: "ADD_POST", post: Math.random() })}
        >
          Add post
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "SHUFFLE" })}>Shuffle</button>
      </div>
      {state.posts.length > 0 && (
        <ul>
          {state.posts.map((post, i) => (
            <li key={i}>{post}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
