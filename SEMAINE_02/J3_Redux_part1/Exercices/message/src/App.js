import { useSelector, useDispatch } from 'react-redux';
import {set_count} from './store/actions/actions-types';

function App() {
  // lecture du store de la source de vérité read-only
  const { messages } = useSelector( state => state.m );

  // actions dispatch dans le reducer => newState 
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(set_count())} > COUNT + 1 </button>
      {messages.map((message, i) => <p key={i}>{message}</p>)}
    </div>
  );
}

export default App;
