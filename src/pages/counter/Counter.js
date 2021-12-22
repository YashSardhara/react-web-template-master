import React from "react";
import { IncNum } from "../../redux/actions/countActions";
import { DecNum } from "../../redux/actions/countActions";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const changeTheNumber = useSelector((state) => state.changeTheNumber);
  console.log(changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div mt-4">
        <div className="">
          <h1>Increment/Decrement counter</h1>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={() => dispatch(DecNum())}>
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              readOnly
              value={changeTheNumber}
            />
            <a className="quantity__plus" title="Increment" onClick={() => dispatch(IncNum())}>
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Counter;
