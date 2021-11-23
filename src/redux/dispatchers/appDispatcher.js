// App wide dispatcher

import Stores from "../Stores/Store";
import Actions from "../Actions/AppActions";

export default AppDispatcher = {
  setUserLoggedIn: (data) => {
    Stores.dispatch({ type: Actions.SET_TOKEN, data: data.tokens });
    Stores.dispatch({ type: Actions.LOGIN, data: data.user });
  },
  setUserLoggedOut: () => {
    Stores.dispatch({ type: Actions.SET_USER_FUE, data: false });
    Stores.dispatch({ type: Actions.LOGOUT });
  },
  updateUserTokens: (data) => {
    Stores.dispatch({ type: Actions.SET_TOKEN, data });
  },
  updateUserInfo: (data) => {
    Stores.dispatch({ type: Actions.LOGIN, data });
  },
};
