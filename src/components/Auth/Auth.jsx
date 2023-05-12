/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext, createContext } from "react";
import { auth } from "../../../firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import CurrentUser from "./CurrentUser";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const setAuthCookies = (tokenResult, displayName, persona) => {
  document.cookie = `name=${displayName}; path=/; expires=${new Date(
    tokenResult.expirationTime
  ).toUTCString()}; secure`;
  document.cookie = `persona=${persona}; path=/; expires=${new Date(
    tokenResult.expirationTime
  ).toUTCString()}; secure`;
  document.cookie = `session=${tokenResult.token}; path=/; expires=${new Date(
    tokenResult.expirationTime
  ).toUTCString()}; secure`;
};

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({ user: null });
  const navigate = useNavigate();

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const tokenResult = await userCredential.user.getIdTokenResult();
      const currentUser = await new CurrentUser(userCredential.user);
  
      // Wait until userdata is not null or undefined
      while (currentUser.userdata === null || currentUser.userdata === undefined || currentUser.persona == null || currentUser.persona == undefined) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100ms
      }
  
      const displayName = currentUser.userdata?.name;
      setAuthCookies(tokenResult, displayName, currentUser.persona);
      setState({ user: userCredential.user });
      switch(currentUser.persona){
        case "driver":
          navigate("/driver");
          break;
        case "mechanic":
          navigate("/mechanic");
          break;
        case "admin":
          navigate("/admin");
          break;
        case "superadmin":
          navigate("/admin");
          break;
      }

    } catch (error) {
      console.error(error);
      throw new Error("Invalid email or password.");
    }
  };

  const logout = () => {
    signOut(auth);
    document.cookie = 'name=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    setState({ user: null });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser != null) {
        currentUser = await new CurrentUser(currentUser);
        setState({ user: currentUser });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user: state.user, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};



export const UserAuth = () => {
  return useContext(AuthContext);
};
