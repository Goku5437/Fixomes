// AppContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  // Add any state or functions you want to provide to other components
  const [navVisibility, setnavVisibility] = useState(true)

  const changeVisibility = ()=>{
    setnavVisibility(false);
    
  }
  const changeVisibilityTrue = ()=>{
    setnavVisibility(true);
    
  }

  return (
    <UserContext.Provider value={{ navVisibility, setnavVisibility, changeVisibility,changeVisibilityTrue }}>
      {children}
    </UserContext.Provider>
  );
};
