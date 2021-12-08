import Stores from "../store";
import Actions from "../Actions/countActions";

export default countDispatcher = {
  setIncrement: () => {
    Stores.dispatch({ type: Actions.IncNum });
  },
  setDecrement: () => {
    Stores.dispatch({ type: Actions.DecNum });
  },
};
