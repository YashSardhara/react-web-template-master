import Stores from "../store";
import Actions from "../Actions/countActions";

// eslint-disable-next-line no-undef
export default  countDispatcher = {
  setIncrement: () => {
    Stores.dispatch({ type: Actions.IncNum });
  },
  setDecrement: () => {
    Stores.dispatch({ type: Actions.DecNum });
  },
};
