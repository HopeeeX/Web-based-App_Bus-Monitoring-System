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

const setAuthCookies = (tokenResult, displayName) => {
  document.cookie = `name=${displayName}; path=/; expires=${new Date(
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
      while (currentUser.userdata === null || currentUser.userdata === undefined) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100ms
      }
  
      const displayName = currentUser.userdata?.name;
      setAuthCookies(tokenResult, displayName);
      setState({ user: userCredential.user });
      navigate("/driver")
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

  useEffect(() => {
    if (state.user) {
    //   navigate("/driver");
    }
  }, [navigate, state.user]);

  return (
    <AuthContext.Provider value={{ user: state.user, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};