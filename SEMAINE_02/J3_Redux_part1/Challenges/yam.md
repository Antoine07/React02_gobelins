# Jeu de dé

## Contraintes

Vous allez créer une petite application avec la CRA et react-router-dom (voir plus bas comment l'installer dans votre projet). 

Vous utiliserez également styled-components.

- Pour les données de l'application.

Vous utiliserez Redux que nous avons vu cette semaine. Respectez bien la structure de l'exemple que nous avons vu précédement.

Si vous voulez, ce n'est pas obligatoire, plus de modernité dans votre approche avec Redux, implémentez toolkit redux. Dans le projet vous taperez la ligne de commande suivante :

```bash
npm install @reduxjs/toolkit
```

Dans votre fichier Bootstrap (index.js), vous avez alors la possibilité de gérer vos reducers comme suit :

```js
import { configureStore } from '@reduxjs/toolkit';
import message from './store/reducers/yam';

const store = configureStore({
  reducer : { yam }
});
```
Attention, si vous utilisez toolkit vous continuez à utiliser également react-redux pour lire le store (en tout cas pour l'instant) dans vos composants.

```js
import { useSelector, useDispatch } from 'react-redux'
```

## Contexte

Vous créez un bouton, en page d'accueil, qui lance trois dés et compte le nombre de fois que l'on obtient un brelan de 6, brelan == trois dés identiques; à chaque fois que l'on relance l'expérience on ré-initialise le compteur. Réfléchissez à un gain à obtenir lorsqu'on lance les dés.

L'application possède deux pages pour l'instant : la page Home qui permet de lancer l'expérience, une statistiques qui donne des informations sur notre chance à obtenir le bon résultat.

## Page Home le jeu

Sur cette page vous avez un bouton pour lancer les dés aux nombres de 3. Un autre champ du formulaire permet de définir le nombre de fois que vous répétez l'expérience. Pour consuler les résultats un lien cliquable permet de voir la page des statistiques. Vous utiliserez les paramètres de react-router-dom de route pour afficher les résultats.

```txt
[Home] [Statistiques]

Nombre d'expérience : [100]

[Lancer]
```

## La page statistiques

Libre à vous de l'interpréter comme vous le souhaitez.

## Comptez

Comptez d'autres combinaisons du jeu du Yam.

## Le jeu qui gagne

Cette partie est une partie libre et de recherche.

Maintenant, vous allez faire gagner l'utilisateur du Bitcoin selon sa chance en utilisant le jeu du Yam que vous avez mis en place. Etablissez des règles pour le jeu, correspondance entre gain au jeu et Bitcoin.

**Remarques si vous avez le temps créez une nouvelle page pour se connecter au jeu avec un compte utilisateur pour garder en "mémoire" vos résultats.**

## Compléments de cours sur react-router

```bash
npm install react-router-dom@6
```

Dans l'index.js du projet, on contextualise le router

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const container = document.getElementById("root") ;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

Dans l'App.js vous pouvez maintenant gérer le chargement des composants comme suit :

```js

 <>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/statistiques" element={<p>statistiques</p>} />
        <Route path="*" element={<p>No match</p>} />
      </Routes>
    </>

// le composant Navigation
function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/statistiques">Statistiques</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
```
