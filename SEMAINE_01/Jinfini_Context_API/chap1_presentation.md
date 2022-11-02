# API Context

Pour présenter le **Context API** de React nous allons utiliser la CRA (create-react-app) qui nous permettra le développement d'application rapide.

## CRA présentation

Nous vous conseillons d'utiliser npm dans la suite du cours.

npx est normalement installé si vous avez Node.js sur votre machine. Si vous rencontrez des problèmes d'installation voyez la documentation ci-dessous :

[cra](https://create-react-app.dev/docs/getting-started)

Si vous souhaitez utiliser npx, vérifiez que vous n'avez pas la create-react-app installée de manière globale. La documentation retirez ce package avant d'utiliser npx.

npx si la cra est déjà installé en global ou en local cherchera dans cet ordre à l'utiliser pour faire l'installation. Par contre si vous n'avez pas fait l'installation de la CRA, npx télécharge sans l'installer la dernière version de la CRA. Cette dernière option est de toute évidence la plus optimisée.

```bash
# avec npm
npm uninstall -g create-react-app

# avec yarm
yarn global remove create-react-app
```

Lancez les commandes suivantes pour avoir la dernière version de la CRA configuré :

```bash
npx create-react-app my-app
cd my-app
# Démarre
npm start
```

Quelques commandes pratiques :

```bash
# démarre le serveur de production
npm start

# build les sources dossier build
npm run build

# build en supprimant toutes les dépendances inutiles
# Attention pas de retour en arrière possible...
npm run eject
```

### Structure de la CRA en mode développement

```text
app-stars
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public   <-- dossier public accès avec le live-server
│   ├── favicon.ico
│   ├── index.html <-- Point d'entrée de l'application
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js.    <-- Composant racine
    ├── App.test.js
    ├── index.css
    ├── index.js. <-- Bootstrap
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js  <-- tests
```

Attention, une fois que vous avez fait votre **build** vous aurez un dossier de build avec votre application pour la production. C'est ce dossier qu'il faudra mettre sur le serveur de production :

```text
# commande npm run build
build/
    ... <-- fichiers et dossiers pour la production
```

## Context API

Nous allons centraliser les données dans un store (magasin) sans sortir de React, nous verrons plus tard une autre approche pour traiter les données dans une application React avec Redux. Ce dernier n'est pas React, par contre les notions que nous aborderons ici font parties de React.

L'intérêt de centraliser les données dans un store c'est d'avoir une source de véritié unique pour les données, cohérente, que l'ensemble ou une partie de nos composantes peuvent consommer.

Nous allons présenter le concept de la Context API dans un fichier unique, puis nous implémenterons cet exemple à l'aide de la CRA dans une application plus technique.

### Context

Il nous faut tout d'abord créer un contexte, vous pouvez initialiser les données du contexte avec des valeurs, mais ce n'est pas obligatoire.

```js
const PostContext = React.createContext([]);
```

### Provider

Il permettra de faire passer les données à l'arbre de React ou une partie, notez que nous utilisons le Hook useReducer, il permettra de gérer la logique algorithmique sur les données. Il est à définir avant.

```js
const PostProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <PostContext.Provider value={[state, dispatch]}>
      {children}
    </PostContext.Provider>
  );
};
```

Nous pourrons dès lors contextualiser l'application pour faire passer les données ainsi que notre dispatcher pour modifier les données du store :

```js
<PostProvider>
  <App />
</PostProvider>
```

### useReducer

Il faudra également définir la logique algorithmique sur les données :

```js
const initialState = {
  posts: [],
};

// 2. Reducer l'algorithmique de l'application
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: state.posts.concat(action.post),
      };

    case "SHUFFLE":
      const posts = [ ...state.posts ] ;
      posts.sort(() => Math.random() - 0.5); // astuce qui joue sur l'algo de tri

      return {
        ...state,
        posts: posts,
      };

    default:
      return state;
  }
};
```

### Consommation des données

Dans un composant de l'arbre de React, vous pourrez dès lors consommer les données et dispatcher des actions dans votre reducer pour mettre les mettre à jour, notez qu'il faudra utiliser useContext en récupérant le context, ici PostContext, pour cette partie soit fonctionnelle :

```js

const Posts = ()  => {
    // On récupère les données et le dispatcher 
    const  [state, dispatch] = React.useContext(PostContext);

    return(
        <React.Fragment>
            <h1>Posts</h1>
            <div>
                <button onClick={() => dispatch({type : 'ADD_POST' , post : Math.random() }) }>Add post</button>
            </div>
            <div>
                <button onClick={() => dispatch({type : 'SHUFFLE' }) }>Shuffle</button>
            </div>
            { state.posts.length > 0 && (
                <ul>
                    {state.posts.map((post, i) => <li key={i} >{post}</li>)}
                </ul>
            )}
        </React.Fragment>
    )
}
```

### Exemples complet

Recopiez cet exemple dans un fichier index.html

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Hello React</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

    <!-- babel => compilation du JSX -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    <style>
        .heading {
            color: purple;
        }

        .principal {
            background-color: beige;
        }
    </style>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">

        // Create context React => faire passer le store il permettra de globaliser le store
        const PostContext = React.createContext([]);

        // useReducer 
        // 1. Source de véritié
        const initialState = {
            posts : []
        }

        // 2. Reducer l'algorithmique de l'application 
        const reducer = (state, action) =>{
            switch(action.type){
                case 'ADD_POST':
                    
                    return {
                        ...state,
                        posts : state.posts.concat(action.post)
                    }
                
                case 'SHUFFLE':
                    const posts = [ ...state.posts ];
                    posts.sort(() => Math.random() - .5 ); // astuce qui joue sur l'algo de tri
                    
                    return {
                        ...state,
                        posts : posts
                    }

                default:
                    return state;
            }

        }

        // Provider
        // rappel children permet de faire de la composition <PostProvider> ... </PostProvider>
        // Dans le Provider on passe notre reducer 
        const PostProvider = ({ children }) => {
            const [state, dispatch] = React.useReducer(reducer, initialState);

            return (
                <PostContext.Provider value={[state, dispatch]}>
                    {children}
                </PostContext.Provider>
            )
        }

        const Posts = ()  => {
            // dans useContext on récupère le useReducer
            const  [state, dispatch] = React.useContext(PostContext);

            return(
                <React.Fragment>
                    <h1>Posts</h1>
                    <div>
                        <button onClick={() => dispatch({type : 'ADD_POST' , post : Math.random() }) }>Add post</button>
                    </div>
                    <div>
                        <button onClick={() => dispatch({type : 'SHUFFLE' }) }>Shuffle</button>
                    </div>
                    { state.posts.length > 0 && (
                        <ul>
                            {state.posts.map((post, i) => <li key={i} >{post}</li>)}
                        </ul>
                    )}
                </React.Fragment>
            )
        }

        const App = () => {
            const  [state, dispatch] = React.useContext(PostContext);

            return (
                <React.Fragment>
                    <h1>Nombre de post(s) : {state.posts.length}</h1> 
                    <Posts />
                </React.Fragment>
            )
        };

        const CONTAINER = document.getElementById('root');

        ReactDOM.render(
            <PostProvider>
                <App />
            </PostProvider>,
            CONTAINER
        );
    </script>
</body>

</html>
```

### 01 Exercice/application context-api

Vous reprendrez l'exemple que nous venons de voir pour l'adapter à ce qui suit :

Créez une application React avec la CRA et implémentez dans des fichiers séparés chaque fonctionnalités décrites ci-dessus. 

```text

src/
    App.js
    Posts.js
    PostProvider.js
    reducer.js

    index.js <-- N'oubliez pas de contextualiser l'arbre React avec votre Provider
```