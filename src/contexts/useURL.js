import React, { useContext, createContext, useState, useEffect} from 'react';

const URLContext = createContext();

export const useURL = () => useContext(URLContext);

export const URLProvider = ({ children }) => {
    
    const [currentURL, updateCurrentURL] = useState("/");

    useEffect(() => {
        const url = window.location.pathname.replace("/potential-adventure", "");
        updateCurrentURL(
            url === ""
                ? "/"
                : url
        );
    }, []);

    const value = {
        currentURL,
        updateCurrentURL, 
    };
    return <URLContext.Provider value={value}>{children}</URLContext.Provider>
};