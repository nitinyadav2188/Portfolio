import React, { createContext, useContext, useState } from 'react';

interface ThemeContextType {
  powerMode: boolean;
  togglePowerMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [powerMode, setPowerMode] = useState(false);

  const togglePowerMode = () => {
    setPowerMode(!powerMode);
  };

  return (
    <ThemeContext.Provider value={{ powerMode, togglePowerMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};