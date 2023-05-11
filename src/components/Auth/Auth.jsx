/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext, createContext} from "react";
import {auth} from "../../../firebase"
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "@firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={{user, logout, signIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
}