import React from "react";
import { isDark } from "src/App";
const HomePage = () => {
  return (
    <>
      <isDark.Consumer>
        {(theme) => {
          return (
            <div className={`container${theme}`}>
              <h1>this is HomePage </h1>
            </div>
          );
        }}
      </isDark.Consumer>
    </>
  );
};

export default HomePage;
