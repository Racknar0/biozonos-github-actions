'use client'
import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export function AppWrapper({ children }) {
    const [loading, setLoading] = useState(false);
    const state = {
        loading,
        setLoading,
    };
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}