import { createContext,useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}){
    const [nava, setNava] = useState(false);
    return(
        <GlobalState.Provider value={{nava, setNava}} >
            {children}
        </GlobalState.Provider>
    )
}