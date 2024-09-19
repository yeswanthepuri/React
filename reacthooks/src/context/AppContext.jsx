import { createContext} from 'react';

export const AppContext = createContext();

const ContextProvider =(props)=>{
    const phone ='+91 9703114588';
    const name ='Epuri Yeswanth';

    return(
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;