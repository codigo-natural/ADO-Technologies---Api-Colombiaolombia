import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { departmentsReducer, resourceReducer, touristicAttractionsReducer } from "./resourceReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  resources: resourceReducer,
  departments: departmentsReducer,
  touristicAttractions: touristicAttractionsReducer
});
