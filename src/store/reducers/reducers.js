import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { departmentsReducer, resourceReducer, touristicAttractionsReducer } from "./resourceReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  resources: resourceReducer,
  departments: departmentsReducer,
  touristicAttractions: touristicAttractionsReducer,
});

export default rootReducer;
