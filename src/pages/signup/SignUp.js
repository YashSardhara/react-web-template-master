import React, { useState } from "react";
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import PropTypes from "prop-types";

const SignUp = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");
  const [confirmPass, setConfirmPass] = useLocalStorage("confirmPass", "");
  const [items, setItems] = useState(() => {
    item;
  });
  var item = { name: name, email: email, password: password, confirmPass: confirmPass };

  useEffect(() => {
    // storing input name
    // localStorage.setItem("name", JSON.stringify(name));
    // localStorage.setItem("email", JSON.stringify(email));
    // localStorage.setItem("password", JSON.stringify(password));
    // localStorage.setItem("confirmPass", JSON.stringify(confirmPass));
    localStorage.setItem("user", JSON.stringify(items));
  }, [items]);

  localStorage.setItem("name", JSON.stringify(name));
  localStorage.setItem("email", JSON.stringify(email));
  localStorage.setItem("password", JSON.stringify(password));
  localStorage.setItem("confirmPass", JSON.stringify(confirmPass));

  localStorage.setItem("user", JSON.stringify(items));

  const listOfItems = () => {
    setItems((oldItems) => {
      console.log(oldItems);
      return [items];
    });
    // setInputList("");
  };

  // console.log(localStorage.getItem("user"));

  return (
    <div className="login-body">
      <div id="loginform">
        <div>
          <h2 id="headerTitle">Login</h2>
        </div>
        <div id="alternativeLogin">
          <div id="iconGroup">
            <a href="#" id="facebookIcon"></a>
            <a href="#" id="twitterIcon"></a>
            <a href="#" id="googleIcon"></a>
          </div>
          <label>Or sign in with:</label>
        </div>
        <form>
          <div>
            <div className="row">
              <label>Username</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="fullname"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div>
            <div className="row">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <div className="row">
              <label>Password</label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div>
            <div className="row">
              <label>Confirm Password</label>
              <input
                type="text"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                aria-label="confirmpass"
                placeholder="Re-enter your password"
              />
            </div>
          </div>
          <div id="button" className="row">
            {/* <button type="submit" value="Submit" onClick={listOfItems}> */}
            <button onClick={listOfItems}>Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  title: PropTypes.any,
};
SignUp.defaultProps = {
  title: "Login",
};
export default SignUp;
