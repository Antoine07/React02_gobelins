# React / TypeScript / GraphQL

- Installez le projet data-analyst à l'aide la commande suivante :

```bash

npx create-react-app data-analyst --template typescript

```

- Installez le router avec les pages suivantes

## Installation du serveur

créez un dossier server à côté du projet

dans le dossier

```bahs
npm init -y

```

Dans le fichier package.json ajoutez les lignes suivantes

```json
  "type": "module",
  "exports": "./dist/index.js",
  "scripts": {
    "dev": "nodemon --watch './**/*.ts' --exec 'node --experimental-specifier-resolution=node --loader ts-node/esm' src/index.ts",
    "start": "node dist/src/index.js"
  },
```

Les dépendances

```bash
npm install @apollo/server
npm install graphql

```

Les dépendances dev

```bash
  npm install typescript --dev
  npm install @types/node --dev
  npm install ts-node-dev --dev

```

Avec typescript vous avez un fichier de configuration pour typescript propre

```json
{
  "compilerOptions": {
    "rootDirs": ["src"],
    "outDir": "dist",
    "lib": ["es2020"],
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "types": ["node"]
  }
}
```

## TP 01 (révision middleware)

1. Partie 1 createSlice / counter

Remarque avant de commencer : c'est en option, mais vous pouvez utiliser TypeScript (+1 point de bonus) pour ce TP.

Dans ce but vous pouvez pour le TP utilisez l'une des commandes suivante au choix ?

```bash
npx create-react-app counter --template typescript
```

```bash
npx create-react-app counter
```

Sans oublier les autres dépendances nécessaires à votre projet

```bash
npm install @reduxjs/toolkit react-redux
```

Créez un compteur qui s'incrémente de manière aléatoire (incrément entre 1 et 10) à l'aide d'un bouton en page d'accueil, utilisez **createSlice** pour la gestion du reducer associé à l'état de ce dernier.

Aidez-vous de la documentation suivante, pour l'implémentation de votre compteur. Elle vous guidera pour votre développement.

https://redux-toolkit.js.org/tutorials/quick-start

Si vous utilisez TypeScript il faudra typer éventuellement vos actions en important le type générique

```js
import type { PayloadAction } from "@reduxjs/toolkit";
```

2. Partie middleware

Lorsque le compteur s'incrémente d'un nombre premier entre 1 et 10, à savoir : 2, 3, 5, et 7, alors une petite étoile graphique s'ajoute sous le compteur. Cette partie sera gérée à l'aide d'un middleware.

## TP 02 (noté)

Terminez le projet avec GraphQL et React **data-analyst**

Importez la dépendance suivante dans le projet pour effectuer la requête sur le serveur appolo (Node/Express) côté client.

Dans React :

```js
import { useQuery, gql } from "@apollo/client";
```

Et faite une requête sur votre serveur Appolo pour récupérer l'ensemble des livres.

```js
const { loading, error, data } = useQuery(GET_LOCATIONS);
```

Notez que **GET_LOCATIONS** construit la requête à faire. Utilisez loading et error pour afficher de manière conditionnelle les données dans la page.

Bonus + 5 points

1. Si vous avez le temps vous pouvez créer deux pages : une pour afficher les livres et les auteurs.

2. Vous allez maintenant faire un fake waiting à l'aide d'une promesse côté serveur. Il faudra alors consommer les données de votre API en considérant l'asynchronisme dans votre Redux/toolkit.

Dans Redux/toolkit on utilisera les deux importants suivants

```js
createAsyncThunk;
createSlice;
```

Vous pouvez construire une méthode fetch comme suit pour récupérer les données dans React à l'aide d'axios.

```js

const fetchFoo =  async (): Promise<any[]> => {
    const response = await axios("http://localhost:4000", {
      method: 'post',
      data: {
        query: `
        query foo {

        }
      `
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
```
Notez que bien que createAsyncThunk permet de gérer dans extraReducers les états de la promesse ci-dessus.

- pending

- fulfilled

- rejected