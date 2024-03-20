import { combineReducers } from "redux";

import authentication from './modules/authentication/reducer';
import user from './modules/user/reducer';
import admin from './modules/admin/reducer';


export default combineReducers({
  authentication,
  user,
  admin,
});
