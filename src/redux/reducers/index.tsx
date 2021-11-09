import { combineReducers } from "redux";
import tutorials from "./tutorials";
import appSetting from "./appSetting";
import auth from "./authReducer";
export default combineReducers({
  tutorials,
  appSetting,
  auth
});
