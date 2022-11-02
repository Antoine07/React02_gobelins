import { useSelector, useDispatch } from 'react-redux';
import { addText } from '../store/index';

function Home(props) {
    const dispatch = useDispatch();
    const { result } = useSelector(state => state.user);

    const handleMultiply = (e) => {
        dispatch(addText("Bonjour"));
    }

    return (
        <div>
            <button onClick={handleMultiply}>Multiply</button>
            {result.map((r, i) =><p key={i}> ID : {r.id} {r.text}</p>)}
        </div>
    )
}

export default Home;