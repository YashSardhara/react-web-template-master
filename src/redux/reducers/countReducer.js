import Actions from "../actions/countActions";

let initialState = 0;

const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.IncNum:
      return state + 1;
    case Actions.DecNum:
      return state - 1;
    default:
      return state;
  }
};

export default CountReducer;
