import { combineReducers } from "redux";
import { calenderActionsManager } from "./manageCalenderActions";
export const reducers = combineReducers({
  allData: calenderActionsManager,
});
