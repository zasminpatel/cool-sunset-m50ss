interface IappSetting {
  isLoggedIn: boolean;
  isAppSidebarOpen: boolean;
}
const initialState: IappSetting = {
  isLoggedIn: false,
  isAppSidebarOpen: false
};

function appSettingReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "OPEN":
      return { ...state, isAppSidebarOpen: true };
    case "CLOSE":
      return { ...state, isAppSidebarOpen: false };
    case "ISLOGGEDIN":
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
}

export default appSettingReducer;
