import React, { createContext } from "react";
import Router from "./router/index";

const isDark = createContext();
  
const App = () => {
  return (
    <isDark.Provider value={""}>
      <Router />
    </isDark.Provider>
  );
};

export default App;
export { isDark };
