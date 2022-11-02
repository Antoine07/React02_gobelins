import { useSelector } from "react-redux";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";


const ProtectedRoute = ({
  checkLogin,
  redirectPath = '/login',
  children,
}) => {
  if (!checkLogin) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function Navigation() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashbord</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  const { isLogin, email, password } = useSelector(state => state.login);

  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute checkLogin={isLogin}>
            <p>Hello Dashbord</p>
          </ProtectedRoute>
        } />

        <Route path="*" element={<p>No match</p>} />
      </Routes>
    </>
  );
}

export default App;
