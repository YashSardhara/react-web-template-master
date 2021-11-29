import Header from "../components/header/Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { menuItem } from "./routes";
import PropTypes from "prop-types";

const Router = (props) => {
  return (
    <>
      <div className="container">
        <Header handleSwitch={props.handleSwitch} />
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
Router.propTypes = {
  handleSwitch: PropTypes.func,
};
export default Router;
