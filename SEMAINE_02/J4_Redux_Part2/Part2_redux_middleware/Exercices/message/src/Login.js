import { useSelector, useDispatch } from 'react-redux';
import { checkLogin, setLogin } from './index';

import {
    useNavigate
} from 'react-router-dom';
import { useEffect } from 'react';

function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLogin, email, password } = useSelector(state => state.login);

    useEffect(() => {
        if (isLogin) {
            navigate('/dashboard');
        }
    }, [isLogin])

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(checkLogin());
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        dispatch(setLogin({ [name]: value }));
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