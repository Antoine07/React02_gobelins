import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";

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
        </ul>
      </nav>
    </div>
  );
}

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="*" element={<p>No match</p>} />
      </Routes>
    </>
  );
}

export default App;
