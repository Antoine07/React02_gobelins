import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_count, set_message } from './store/actions/actions-types';
import { setUserName, increment, multiply, decrement } from './index';

function Home() {
  // lecture du store de la source de vérité read-only
  const { messages, count } = useSelector(state => state.message);
  const counter = useSelector(state => state.counter);
  // actions dispatch dans le reducer => newState 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(increment());
  }, [])

  return (
    <div className="App">
      <button onClick={() => dispatch(set_count())} > COUNT + 1 </button>
      {messages.map((message, i) => <p key={i}>{message}</p>)}
      <p>{count}</p>
      <button onClick={() => dispatch(set_message(Math.random().toString()))} > ADD ALEA MESSAGE </button>
      <button onClick={() => dispatch(increment())} >Counter Slice</button>
      <button onClick={() => dispatch(multiply())} >multiply Slice</button>
      <p>{counter}</p>

    </div>
  );
}

export default Home;
