import React, { createContext, useEffect, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextProps {
  token: string | null;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
});

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [authToken, setAuthToken] = useState<string | null>(null);

  const authenticate = (token: string) => {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  };

  const logout = () => {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  };

  const valueStore: AuthContextProps = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return (
    <AuthContext.Provider value={valueStore}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
