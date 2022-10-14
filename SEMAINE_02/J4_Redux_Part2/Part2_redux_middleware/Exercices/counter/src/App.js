import Button from './Styles/Button';
import Global from './Styles/Global';
import Container from './Styles/Container';
import Grid from './Styles/Grid';
import Presentation from './Styles/Presentation';

import { useSelector, useDispatch} from 'react-redux';
import { start_counter } from './store/actions/actions-types';

function App() {
  const { count, active } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <Container>
      <Global />
      <Grid>
        <h1>Counter</h1>
      </Grid>
      <Grid>
        <Button onClick={() => dispatch(start_counter(2))} >Start</Button>
        <Presentation>{count}</Presentation>
      </Grid>
    </Container>
  );
}

export default App;
