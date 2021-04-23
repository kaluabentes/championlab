import React from "react";

import { THEME, useTheme } from "~/contexts/theme";

function App({ children }) {
  const { theme, setTheme } = useTheme();

  function handleThemeSwitch() {
    if (theme === THEME.light) {
      setTheme(THEME.dark);
      return;
    }
    setTheme(THEME.light);
  }

  return (
    <>
      <button onClick={handleThemeSwitch}>Switch Theme</button>
      {children}
    </>
  );
}

export default App;
