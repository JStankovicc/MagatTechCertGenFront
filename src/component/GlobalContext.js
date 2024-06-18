import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [globalVariable, setGlobalVariable] = useState('http://192.168.1.27:8080');

    return (
        <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
