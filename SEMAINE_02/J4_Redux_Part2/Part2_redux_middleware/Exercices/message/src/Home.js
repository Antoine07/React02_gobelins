import { useSelector, useDispatch } from 'react-redux';
import { set_count, set_message } from './store/actions/actions-types';

function Home() {
  // lecture du store de la source de vérité read-only
  const { messages, count } = useSelector(state => state.message);

  // actions dispatch dans le reducer => newState 
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(set_count())} > COUNT + 1 </button>
      {messages.map((message, i) => <p key={i}>{message}</p>)}
      <p>{count}</p>
      <button onClick={() => dispatch(set_message(Math.random().toString()))} > ADD ALEA MESSAGE </button>

    </div>
  );
}

export default Home;
