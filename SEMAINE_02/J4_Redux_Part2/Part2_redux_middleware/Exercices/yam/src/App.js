import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { logout  } from "./store";
import { useEffect } from "react";

const ProtectedRoute = ({
  checkLogin,
  redirectPath,
  children,
}) => {
  if (!checkLogin) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function Navigation({ isLogin }) {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isLogin === false && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {isLogin === true && (
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/dashboard">Dashbord</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Logout(){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate('/');
  }, [])

  return null ;
}

function App() {
  const { isLogin } = useSelector(state => state.user);
  
  
  return (
    <>
      <Navigation isLogin={isLogin} />
      <Routes>
        <Route index path="/" element={<Home />} />
        {isLogin === false && (
          <Route path="/login" element={<Login />} />
        )}
        {isLogin === true && (
          <Route path="/logout" element={<Logout />} />
        )}
        <Route path="/dashboard" element={
          <ProtectedRoute checkLogin={isLogin} redirectPath="/login">
            <p>Hello Dashbord</p>
          </ProtectedRoute>
        } />

        <Route path="*" element={<p>No match</p>} />
      </Routes>
    </>
  );
}

export default App;
