import { useReducer, createContext } from 'react';
import { initialState, reducer } from './reducer';

const PostContext = createContext([]);

const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <PostContext.Provider value={[state, dispatch]}>
            {children}
        </PostContext.Provider>
    )
};

export {  PostProvider, PostContext };