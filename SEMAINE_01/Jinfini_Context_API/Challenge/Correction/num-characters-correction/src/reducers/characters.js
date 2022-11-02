import { createContext } from "react";
import styled from "styled-components";

const initialState = {
  content: "",
  letters: "",
  colors: ["palevioletred", "tomato"],
  color: "tomato", // valeur par défaut
  sizes: [15, 16, 17, 18, 19, 20],
  size: 15,
  styles: [],
  message : ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ON_CHANGE":
      const { value } = action;

      const letters = value
        .trim()
        .split(" ")
        .map((word) => word.length)
        .join(" ");

      return {
        ...state,
        content: value,
        letters: letters,
      };

    // SET_SELECT permet de factoriser les sélections dans le formulaire
    // l'astuce c'est de prendre name et value et d'utiliser [name] pour dynamiser le choix de la clé
    // dans le state [name] va valoir color et size
    case "SET_SELECT":
      // Attention renommer la constante value car elle est déjà définie dans le scope du switch pour le ON_CHANGE
      const { name, value: select } = action;

      return {
        ...state,
        [name]: select,
      };

    case "ADD":
      if (state.content.trim() === "") {
        return {
          ...state,
          message: "Attention votre champ message est vide",
        };
      }

      if (
        state.colors.includes(state.color) === false ||
        state.sizes.includes(parseInt(state.size)) === false
      ) {
        return {
          ...state,
          message: "Attention l'application a rencontré un problème technique",
        };
      }

      return {
        ...state,
        message: "Merci pour votre contenu",
        content: "",
        size: 15,
        color: "tomato",
        letters : "",
        // concat retourne un nouveau tableau
        styles: state.styles.concat({
          // id unique Date.now() timestamp + un nombre aléatoire pour éviter d'avoir le même nombre
          id: Math.floor( Math.random() * 1000 ) + Date.now(), // ajouter un random sur 0 1000 + Date.now() le timestamp
          size: state.size,
          content: state.content,
          color: state.color,
        })
      };

    case "DELETE":

      const newStyles = state.styles.map( s => ({ ...s }) ) ; // copie des styles dans une nouvelle variable 
      
      return {
        ...state,
        styles : newStyles.filter( s => s.id !== action.id ) // tous les rendus sauf celui que l'on veut supprimer
      };

    case 'RESET':

      return {
        ...state,
        message : ''
      }

    default:
      return state;
  }
};

const CharContext = createContext([]);

export { initialState, reducer, CharContext };
