import React, { createContext , useContext, useState } from 'react'

import sessionStorageManager from 'hooks/sessionStorageManager'

const SessionContext = createContext();

const SessionProvider = (props)=>{
    const [sessionData, setSessionDataTemp] = useState(sessionStorageManager.data);

    const setSessionData = (data)=>{
        setSessionDataTemp(data);
        sessionStorageManager.data = data;
    }

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