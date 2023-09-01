"use client";
import { useState, createContext, useContext, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { CircularProgress } from '@mui/material';
import firebase_app from '../firebase/config';

const auth = getAuth(firebase_app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <CircularProgress /> : children}
        </AuthContext.Provider>
    );
};