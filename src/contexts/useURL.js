import React, { useContext, createContext, useState, useEffect} from 'react';

const URLContext = createContext();

export const useURL = () => useContext(URLContext);

export const URLProvider = ({ children }) => {
    
    const [currentURL, updateCurrentURL] = useState("/");

    useEffect(() => {
        updateCurrentURL(window.location.pathname)
    }, []);

    const fetchCurrentURL = () => {
        updateCurrentURL(window.location.pathname);
    };

    const value = {
        currentURL,
        updateCurrentURL, fetchCurrentURL
    };
    return <URLContext.Provider value={value}>{children}</URLContext.Provider>
};