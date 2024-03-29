import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import detailReducer from "./reducers/detailReducer";
import tableReducer from "./reducers/tableReducer";
import thunk from "redux-thunk";

const AllReducers = combineReducers({
  detail: detailReducer,
  data: tableReducer
});

const InitialStates = {
  detail: {
    isFetching: false,
    payload: {
      name: "",
      height: "",
      mass: "",
      birthYear: "",
      gender: "",
      list: [],
      film_list: []
    }
  },
  data: { isFetching: true }
};

const middleware = [applyMiddleware(thunk)];

if (
  process.env.NODE_ENV !== "production" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
) {
  middleware.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(AllReducers, InitialStates, compose(...middleware));

export default store;
