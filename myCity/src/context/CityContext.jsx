import { createContext, useState, useEffect} from "react";
export const Context = createContext();

function CityProvider({children}){
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export default CityProvider;