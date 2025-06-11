import { createContext, ReactNode, useContext, useState } from "react";
import React from 'react';
import { LoginUser } from "../helpers/api-communicator";

type User = {
  name: string;     
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;   
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

// Create context
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email: string, password: string) => {
    const data=await LoginUser(email,password);
    if(data){
      setUser({email:data.email,name:data.name});
      setIsLoggedIn(true);
    }
    // login logic here
  };

  const signup = async (name: string, email: string, password: string) => {
    // signup logic here
  };

  const logout = async () => {
    // logout logic here
  };

  const value = { user, isLoggedIn, login, signup, logout };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export const useAuth=()=>useContext(AuthContext);
