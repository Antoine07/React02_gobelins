import { useReducer } from "react";

import { CharContext, initialState, reducer } from "./reducers/characters";

// Permet de contextualiser => rendre disponible partout votre useReducer

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CharContext.Provider value={[state, dispatch]}>
      {children}
    </CharContext.Provider>
  );
};

export default Provider;
