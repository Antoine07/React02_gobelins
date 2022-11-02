import Provider from "./Provider";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import Message from "./components/Message";
import StyleRender from "./components/StyleRender";

import GlobalStyle from "./Styles/GlobalStyle";
import Li from "./Styles/Li";
import Container from "./Styles/Container";

const Nav = () => {
  return (
    <ul>
      <Li>
        <NavLink  exact activeClassName="active" to="/">
          Message
        </NavLink>
      </Li>
      <Li>
        <NavLink
          exact
          activeClassName="active"
          to="/style"
        >
          Rendu
        </NavLink>
      </Li>
    </ul>
  );
};

const App = () => {
  return (
    <Provider>
      <Container>
        <GlobalStyle />
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Message} />
            <Route path="/style" component={StyleRender} />
            <Route component={({ location }) => <p>404 Page Not Found </p>} />
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
};

export default App;
