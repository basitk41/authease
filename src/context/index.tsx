import React, { useState, useContext, createContext } from "react";

// Define the type for the context state
type AuthContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

// Create the context with an appropriate default value
const ContextState = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the context
export const useAuth = (): AuthContextType => {
  const context = useContext(ContextState);
  if (!context) {
    throw new Error("useAuth must be used within a ContextProvider");
  }
  return context;
};

// Context provider component
const ContextProvider: React.FC<{
  isAuth?: boolean;
  children: React.ReactNode;
}> = ({ isAuth = false, children }) => {
  const state = useState(isAuth);
  return (
    <ContextState.Provider value={state}>{children}</ContextState.Provider>
  );
};

export default ContextProvider;
