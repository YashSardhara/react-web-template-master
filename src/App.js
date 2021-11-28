import React, { createContext, useState } from "react";
import Router from "./router/index";

const isDark = createContext();

const App = () => {
  const [themeProvider, setThemeProvider] = useState("");
  const handleSwitch = (e) => {
    !e == true ? setThemeProvider("-dark") : setThemeProvider("");
  };
  return (
    <isDark.Provider value={themeProvider}>
      <Router handleSwitch={handleSwitch} />
    </isDark.Provider>
  );
};

export default App;
export { isDark };
