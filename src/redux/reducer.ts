import { combineReducers } from "redux";
import appReducer from './app/reducer';
import projectReducer from './project/reducer';

const reducer = combineReducers({
  App: appReducer,
  Project: projectReducer
  // etc.
});

export default reducer;