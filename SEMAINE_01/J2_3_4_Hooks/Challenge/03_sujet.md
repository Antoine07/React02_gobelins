# 03 sujet Challenge Calculatrice

Vous allez faire une petite calculatrice avec les notions du cours useState, useEffect, ...

Oragnisez l'application comme suit dans un fichier unique.

```text
index.html
```

Créez deux champs de saisi permettant de définir deux nombres pour la calculatrice. Puis créez les boutons suivants :

1. Un bouton + pour effectuer l'addition.

2. Un bouton X pour faire la multiplication.

3. Un bouton Reset pour effacer le résultat.

4. Gérez les messages d'erreur

5. En utilisant le useEffect comptez le nombre d'opérations effectuées et affichez un message au bout de 10 calculs fait par l'utilisateur.

Implémentez également les boutons proposés dans le Wireframe ci-dessous.

```text

Resultat : 17 <- Affichage du résultat

Num1 : [2]  Num2 : [15] <--  deux champs texte pour saisir vos nombres

[+] <-- Additionner 
[*] <-- Multiplier 
[Reset]
```

Indications pour récupérez la valeur d'un champ texte dans le rendu, créez le state **number** avec sa fonction de mise à jour setNumber, pensez à tout maîtriser avec React lors de la récupération des données et de l'affichage de celles-ci dans l'élément HTML.

```js
<p>
  <input
    type="text"
    name="number"
    value={number}
    onChange={(e) => setNumber(e.target.value)}
  />
</p>
```

Vous pouvez vous aidez du code suivant :

```js
const Calculator = (props) => {
  const [number, setNumber] = React.useState("");

  return (
    <div>
      <p>Number : {number}</p>
      <p>
        <input
          type="text"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </p>
    </div>
  );
};

ReactDOM.render(<Calculator />, document.getElementById("root"));
```
