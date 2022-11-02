import { Container, Column, Row } from './Styles/Grid';
import GlobalStyle from './Styles/Global';
import Button from './Styles/Button';
import { useDispatch, useSelector } from 'react-redux';
import { increment, RootState } from './store/CounterSlice';

function App() {
  const dispatch = useDispatch()

  // assignation par décomposition dans un littéral avec plusieurs clés
  const { c: { number, parity, step }, s : { stars }} = useSelector((state: RootState) => {

    return {
      c: state.c, // pour le coompteur 
      s : state.s // pour les étoiles
    }
  })
  const handleIncrement = (e: any) => {
    dispatch(increment())
  }

  console.log(stars)

  return (
    <Container>
      <GlobalStyle />
      <Row>
        <Column>
          <Button onClick={handleIncrement}>
            Increment
          </Button>
        </Column>
      </Row>
      <Row>
        <Column>
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>{number}</p>
          <p>Parité : {parity} et valeur de l'incrément: {step}</p>
        </Column>
      </Row>
    </Container>
  );
}

export default App;
