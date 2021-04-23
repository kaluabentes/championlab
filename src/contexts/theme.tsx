import React, { createContext, useContext, useState } from "react";

import darkTheme from "~/styles/themes/dark";
import lightTheme from "~/styles/themes/light";

const ThemeStateContext = createContext(undefined);
const ThemeDispatchContext = createContext(undefined);

export const THEME = {
  dark: darkTheme,
  light: lightTheme,
};

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(THEME.dark);

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

function useTheme() {
  const theme = useContext(ThemeStateContext);
  const setTheme = useContext(ThemeDispatchContext);

  if (!theme || !setTheme) {
    throw new Error("useTheme must be used within ThemeContextProvider");
  }

  return { theme, setTheme };
}

export { ThemeContextProvider, useTheme };
