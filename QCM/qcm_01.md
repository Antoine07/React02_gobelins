# QCM React

## Question 1
Que signifie JSX ?

Choisissez une seule et bonne réponse ci-dessous :

*Réponses* :
* [ ] C'est un langage qui permet de générer des objets avec une notation HTML.
* [ ] C'est un langage qui permet de typer des variables et objets JS.
* [ ] C'est un langage qui permet de générer des classes avec une notation HTML.
* [ ] C'est un langage qui permet de générer des objets avec une notation XML.

## Question 2

Définissez simplement ce que représente le DOM virtuel en choisissant une seule et unique définition ci-dessous :

*Réponses* :
* [ ] C'est une représentation du DOM réel sous d'une arborescence XML.
* [ ] C'est une représentation du DOM réel sous forme d'objets simples JS.
* [ ] C'est une représentation du DOM réel sous forme de fonctions écrites en C.
* [ ] C'est une représentation du DOM réel sous de tableau JS et XML.

## Question 3

Est ce que le code dans le fichier App.js suivant est valide ?

```js
const Message = (props) => {
    props.message = "Nouveau message" ;
    return(
        <p>{props.message}</p>
    )
}
const App =() => <Message message="message" />;

```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Oui car la propriété est passée par décomposition.
* [ ] Oui car les propriétés sont mutables.
* [ ] Non car les propriétés sont en lecture seule.

## Question 4

Est-ce que le code React suivant est valide ?

```js

const Post = () => {
   
    return(
        <p>post</p>
    )
}
const App =() => (
    <Post />
    <Post />
    <Post />
);

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Il est valide et affichera trois paragraphes dans le DOM.
* [ ] Il est valide et affichera un paragraphe dans le DOM.
* [ ] Il n'est pas valide le code produira une erreure.

## Question 5

Qu'affiche le code suivant ?

```js

const Clock = () => {
    const [ date, setDate ] = React.useState(new Date);

    useEffect(() => {
        setTimeout(() =>setDate(new Date) , 1000)
    });

    return(
        <p>{date.toLocaleTimeString()}</p>
    )
}
const App =() => <Clock />;

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Il affiche une horloge hh/mm/ss du temps qui passe.
* [ ] Il affiche la date au format hh/mm/ss une seule fois.
* [ ] Il affiche la date au format hh/mm/ss deux seule fois.

## Question 6

Qu'affiche le code suivant ?

```js

import React, {useEffect, useState} from 'react';
const Clock = () => {
    const [ date, setDate ] = React.useState(new Date);

    useEffect(() => {
        setTimeout(() =>setDate(new Date) , 1000)
    }, []);

    return(
        <p>{date.toLocaleTimeString()}</p>
    )
}
const App =() => <Clock />;

```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Il affiche une horloge hh/mm/ss du temps qui passe.
* [ ] Il affiche une date au format hh/mm/ss une seule fois.
* [ ] Il affiche une date au format hh/mm/ss deux seule fois.

## Question 7

Dans quel ordre s'affiche les console.log ci-dessous ? Considérez la valeur de count lors de l'exécution du script.

Répondez en choisissant une seule et bonne réponse.

```js

const App = () => {
    const [ count, setCount ] = React.useState(0);

        React.useEffect(() => {
            console.log(' useEffect ', count);

        }, [count]);

        console.log(' component ', count);

        if(count === 0) {
            setTimeout(() => setCount( count + 1 ), 1000)
        };

        return(
            <p>Je suis un test</p>
        )
}

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Dans l'ordre suivant :
```text
useEffect  0
component  0
component  1
useEffect  1
```
* [ ] Dans l'ordre suivant :
```text
component  0
useEffect  0
component  1
useEffect  1
```
* [ ] Dans l'ordre suivant :
```text
component  1
component  0
useEffect  0
useEffect  1
```
* [ ] Dans l'ordre suivant :
```text
useEffect  1
component  0
useEffect  0
component  1
```

## Question 8

Dans quel ordre s'affiche les console.log ci-dessous ? Considérez la valeur de count lors de l'exécution du script.

Répondez en choisissant une seule et bonne réponse.

```js

const App = () => {
    const [ count, setCount ] = React.useState(0);

        React.useEffect(() => {
            console.log(' useEffect ', count);
            if(count === 0) {
                setTimeout(() => setCount( count + 1 ), 1000)
            };

        }, []);
        
        console.log(' component ', count);

        return(
            <p>Je suis un test</p>
        )
}

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Dans l'ordre suivant :
```text
component  0
useEffect  0
component  1
```
* [ ] Dans l'ordre suivant :
```text
useEffect  0
component  0
component  1
```
* [ ] Dans l'ordre suivant :
```text
component  1
useEffect  1
component  0
```
* [ ] Dans l'ordre suivant :
```text
useEffect  1
component  0
component  1
```

## Question 9

Qu'affiche le code suivant ?

Répondez en choisissant une seule et bonne réponse.

```js
const App = () => {
    const [ count, setCount ] = React.useState(0);

        useEffect(() => {
            setTimeout(() => setCount( count + 1 ), 1000)
        }, [count]);
        
        return(
            <p>{count}</p>
        )
}

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Il affiche 0 puis 1 au bout d'une seconde dans le DOM.
* [ ] Il affiche 1 au bout d'une seconde dans le DOM
* [ ] Il affiche 0 puis 1, 2, ... avec un interval 1s dans le DOM.
* [ ] Il affiche 0 dans le DOM

## Question 10

Est-ce que le code suivant est valide ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```js

const App =() => {
    const [value, setValue] = React.useSate('');

    return(
        <label>
        Choisissez votre parfum favori :
        <select value={value} onChange={() => setState(value)}>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
        </select>
        </label>
        <p>Response : {value}</p>
    )
}

```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Oui 
* [ ] Non

## Question 11

Qu'affiche le code suivant ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```js

const App =() => {
    const [count, setCount] = React.useState(0);

    change = () =>{
        setCount(11);
    }

    return (
        <div>
            <Message onChange={() => change() } />
            <p>{count}</p>
        </div>
    )
}

const Message = (props) => {

    React.useEffect(() => {
        setTimeout(() => props.onChange(), 1000)
    }, []);

    return(
        <p>Message !</p>
    )
}

export default App;
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Ce code n'est pas valide, il affichera une erreur React. 
* [ ] Ce code affichera dans le DOM 0 uniquement.
* [ ] Ce code affichera dans le DOM 11 uniquement.
* [ ] Ce code affichera dans le DOM 0 puis au bout 1s 11.

## Question 12

Quel est le code du Wrapper suivant ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```js

const App = (props) => {
    return(
        <>
            <Wrapper>
                <ul>
                    <li>Home</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <p>Hello</p>
            </Wrapper>
        </>
    )
}
```

Répondez en choisissant une seule et bonne réponse ci-dessous

*Réponses* :
* [ ] Le Wrapper doit s'écrire :
```js
const Wrapper = () => <></>;
```
* [ ] Le Wrapper doit s'écrire :
```js
const Wrapper = ({children}) => <div className="main">children</div>;
```
* [ ] Le Wrapper doit s'écrire :
```js
const Wrapper = ({children}) => <div className="main">{children}</div>;
```
