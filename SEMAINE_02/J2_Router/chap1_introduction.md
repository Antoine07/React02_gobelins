# Router

Nous allons présenter les principes généraux du module **react-router-dom V6**, nous vous invitons à regarder de prêt la documentation sur ce module :

Documentation : [react-router-dom](https://reactrouter.com/)

## Installation de la dépendance

```bash
npm install react-router-dom@6
```

## Contextualiser la racine principale de React

1. Utilisez BrowserRouter sur le composant racine.

```js
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Home />
    // ...
  </BrowserRouter>
);
```

2. Définir les routes dans un composant Nav par exemple, notez également dans l'exemple qui suit, que nous explicitons la mise en place des liens actifs.

Dans la navigation vous utilisez soit Link ou NavLink.

```js
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const checkIsactive = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "oragne" : "",
    };
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink style={checkIsactive} to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/logs">
            LOGS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
```

3. Le composant Nav.

Il faut placer ce composant sur le composant racine. Puis à l'aide des composants Routes et Route définissez les routes.

La syntaxe du Link ou NavLink doit matcher avec le path définit dans le composant Route. Attention ce composant se trouve dans le composant Routes.

```js
<BrowserRouter>
  <Nav />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="logs" element={<Log />} />
  </Routes>
</BrowserRouter>
```

## Gestion de la route 404 ou des routes qui ne "match" pas

Vous pouvez parfaitement gérer les routes qui ne "match" pas avec l'attribut path et l'opérateur \* comme suit :

```js
<Route
  path="*"
  element={
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
    </main>
  }
/>
```

## Routes dynamiques

Pour gérer une route avec un paramètre dynamique voyez la syntaxe suivante utilisée avec le module react-router, urls du type /home/2

```js
<Routes>
  <Route path="/home" element={<Home />}>
    <Route path=":postId" element={<Post />} />
  </Route>
</Routes>
```

Vous pouvez également utiliser cette syntaxe seule, urls du type posts/11

```js
<Routes>
  <Route path="/post/:postId" element={<Post />} />
</Routes>
```

Pour récupérer l'id du post que l'on souhaite afficher vous utiliserez le Hook suivant propre au module react-router-dom, dans le composant Post :

```js
import { useParams } from "react-router-dom";

const post = () => {
  const { postId } = useParams();

  return <h2>Post : {postId}</h2>;
};
```

## Paramètres de route

Pour récupérer les paramètres d'une route vous utiliserez le Hook **useSearchParams**. La méthode get permettra de récupérer les paramètres nommés.

```js
const { useSearchParams, BrowserRouter } = ReactRouterDOM;
        const App = () => {
            const [searchParams, setSearchParams] = useSearchParams(0);
            const numberBananas = searchParams.get("banana");

            return <div>
                {numberBananas && (<p>Bananas : {numberBananas}</p>)}
                <button onClick={() => setSearchParams({ banana: 3 })} >Send parameters</button>
                <button onClick={() => setSearchParams({ banana: 0 })} >Reset</button>
            </div>;
        };

        ReactDOM.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
            document.getElementById("root")
        );
);
```

### 01 Exercice bananas

En utilisant des champs de type radio sélectionnez le nombre de banane(s) que vous souhaitez et affichez ce nombre de le composant. Utilisez un fichier index_bananas.html pour faire l'exercice.

```js
const bananas = ["🍌", "🍌🍌", "🍌🍌🍌", "🍌🍌🍌🍌"];
```

Indications : utilisez le code suivant pour réaliser l'exercice dans un fichier unique :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React router-dom</title>
    <!-- Note: When deploying to production, replace "development.js"
         with "production.min.js" in each of the following tags -->

    <!-- Load React and React DOM -->
    <!-- See https://reactjs.org/docs/add-react-to-a-website.html to learn more -->
    <script
      src="https://unpkg.com/react@>=16.8/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@>=16.8/umd/react-dom.development.js"
      crossorigin
    ></script>

    <!-- Load history -->
    <script
      src="https://unpkg.com/history@5/umd/history.development.js"
      crossorigin
    ></script>

    <!-- Load React Router and React Router DOM -->
    <script
      src="https://unpkg.com/react-router@6/umd/react-router.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-router-dom@6/umd/react-router-dom.development.js"
      crossorigin
    ></script>

    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
    <script type="text/babel">
      const { useSearchParams, BrowserRouter } = ReactRouterDOM;
      const App = () => {
        const [searchParams, setSearchParams] = useSearchParams();

        return <div></div>;
      };

      ReactDOM.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

## Gestion des sous-routes avec le composant Outlet

Vous pouvez à l'aide de la syntaxe suivante définir des sous-routes de manière simple :

```js
<Routes>
  <Route path="/posts/*" element={<Posts />} />
</Routes>
```

Dans le composant Posts vous écrirez les liens de manière relative, **vous devez cependant utiliser dans le composant concerné le composant Outlet**.

```js
<div>
  <ul>
    <li>
      <NavLink to="single/1">Post 1</NavLink>
    </li>
    <li>
      <NavLink to="single/2">Post 2</NavLink>
    </li>
  </ul>
  <Outlet />
</div>
```

## Redirection composant Navigate

- La syntaxe d'une redirection est simple avec le composant Navigate et peux facilement être intégrée dans la définition même d'une route :

```js
<Route path="/category" element={<Navigate to="/home" />} />
```

- Une autre manière de faire une redirection est la suivante

Vous pouvez également utiliser le Hook **useNavigate** pour gérer une redirection ainsi que l'historique des liens, navigate(-1) vous permettra de revenir par exemple à la route précédente.

```js
const { BrowserRouter, Routes, Route, NavLink, useSearchParams, useNavigate } =
  ReactRouterDOM;
const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/success?message=Alan", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Login </button>
    </form>
  );
};

const Success = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const message = searchParams.get("message");

  return <p>Success, welcome {message} !</p>;
};

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<p>Home page</p>} />
        <Route path="/login" element={<Signup />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
```
