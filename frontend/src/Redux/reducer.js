import {
  combineReducers
} from "redux";
import dashboardReducer from "./dashbard/dashbardReducer";
const Root = combineReducers({
  dashboard: dashboardReducer,
});

export default Root;