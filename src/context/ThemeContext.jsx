import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// Keep track of darkmode state
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches ? setIsDarkMode(true) : setIsDarkMode(false);
  }, []);

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;