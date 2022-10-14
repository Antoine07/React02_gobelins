import { useSelector, useDispatch } from 'react-redux';
import { checkUser, setLogin } from '../store/index';

import {
    useNavigate
} from 'react-router-dom';
import { useEffect } from 'react';

function Login(props) {
    const navigate = useNavigate(); // redirection
    const dispatch = useDispatch();
    const { isLogin, email, password } = useSelector(state => state.user);

    useEffect(() => {
        if (isLogin) {
            navigate('/dashboard'); // redirection spécifique 
        }
    }, [isLogin])

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password)
            dispatch(checkUser());

        // TODO gestion des messages d'erreurs 
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        console.log(value, name)
        dispatch(setLogin({ value, name : name }));
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <p><input onChange={handleChange} type="email" value={email} name="email" /></p>
                <p><input onChange={handleChange} type="password" value={password} name="password" /></p>
                <p><button>Login</button></p>
            </form>
        </div>
    )
}

export default Login;