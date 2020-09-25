import React, { createContext , useContext, useState } from 'react'

const SessionContext = createContext();

const SessionProvider = (props)=>{
    const [sessionData, setSessionData] = useState();

    return (
        <SessionContext.Provider value={{sessionData,setSessionData}}>
            {props.children}
        </SessionContext.Provider>
    )
};

const useSession = () => {
    const session = useContext(SessionContext);
    return session;
}

export { SessionProvider , useSession};