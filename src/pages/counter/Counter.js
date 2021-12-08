import React from "react";
import store from "../../redux/store";
const Counter = () => {
  console.log(store);
  return (
    <>
      <div className="main-div mt-4">
        <div className="">
          <h1>Increment/Decrement counter</h1>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={""}>
              <span>-</span>
            </a>
            <input name="quantity" type="text" className="quantity__input" value={"0"} />
            <a className="quantity__plus" title="Increment" onClick={""}>
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
