import Header from "../components/header/Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { menuItem } from "./routes";

const Router = () => {

  return (
    <>
      <div className="container">
        <Header />
        <BrowserRouter>
          {/* <Redirect to="/login" /> */}
          <Switch>
            {menuItem.map((i) => (
              <Route key={`Route-${i.path}`} exact path={i.path} component={i.component} />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Router;
