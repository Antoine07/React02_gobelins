import { useReducer } from 'react';
import Button from '../Styles/Button';
import Grid from '../Styles/Grid';

import { reducer, initialeState, ADD, MULT, SET_NUMBER, RESET, MESSAGE } from '../store/calculator';

function Calculator(props) {
    const [state, dispatch] = useReducer(reducer, initialeState);
    const { total, number1, number2, message } = state;

    function handleChange(e) {
        const { value, name } = e.target;
        dispatch({type: MESSAGE, message : ''});
        dispatch({ type: SET_NUMBER, name: name, value });
    }

    return (
        <>
            <Grid>
                <h1>Calculator</h1>
                {message && (
                    <p>{message}</p>
                )}
            </Grid>
            <Grid>
                <p>number1 : <input name="number1" type="text" onChange={handleChange} value={number1} /></p>
                <p>number2 : <input name="number2" type="text" onChange={handleChange} value={number2} /></p>
                <div>
                    Addition
                    <Button
                        onClick={() => dispatch({ type: ADD })}
                    >
                        Addition
                    </Button>
                </div>

                <div>
                    
                    <Button
                        onClick={() => dispatch({ type: MULT })}
                    >
                        Multiplication
                    </Button>
                </div>
                {total !== 0 && (
                    <>
                    <p>{total}</p>
                    <Button
                        onClick={() => dispatch({ type: RESET })}
                    >
                        Reset
                    </Button>
                    </>
                )}
            </Grid>
        </>
    )
}


export default Calculator;