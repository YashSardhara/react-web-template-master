import React, { createContext, useState } from "react";
import Router from "./router/index";

const isDark = createContext();

const App = () => {
  const [themeProvider, setThemeProvider] = useState(false);
  const handleSwitch = (e) => {
    setThemeProvider(e);
    console.log(e, themeProvider);
  };
  return (
    <isDark.Provider value={themeProvider === true ? "-dark" : ""}>
      <Router handleSwitch={handleSwitch} />
    </isDark.Provider>
  );
};

export default App;
export { isDark };
