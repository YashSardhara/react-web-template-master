// import React, { useState } from "react";
// // import { createContext } from "react";
// import Theme from "./context/providers/ThemeProvider";
// import Router from "./router/index";

// const App = () => {
//   const [isDarkTheme, setIsDarkTheme] = useState("");

//   const handleSwitch = (e) => {
//     !e == true ? setIsDarkTheme("-dark") : setIsDarkTheme("");
//     console.log(e);
//   };
//   // const [checkTheme, setCheckTheme] = useState();

//   return (
//     <Theme.Provider value={isDarkTheme} isDarkTheme={isDarkTheme}>
//       <Router handleSwitch={handleSwitch} />
//     </Theme.Provider>
//   );
// };

// export default App;

import React, { createContext, useState } from "react";
import Router from "./router/index";

const isDark = createContext(true);

const App = () => {
  const [themeProvider, setThemeProvider] = useState("");
  const handleSwitch = (e) => {
    !e == true ? setThemeProvider(" -dark dark") : setThemeProvider("");
  };
  return (
    <>
      <isDark.Provider value={themeProvider}>
        <Router handleSwitch={handleSwitch} />
      </isDark.Provider>
    </>
  );
};

export default App;
export { isDark };
