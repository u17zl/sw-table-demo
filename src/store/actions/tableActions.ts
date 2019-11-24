import Axios from "axios";
import { FETCH_TABLE, TABLE_FETCHING, PAGI_TABLE } from "./actionTypes";
import stripHttps from "../../utils/stripHttps";

export const fetchTable = () => (dispatch: any) => {
  console.log("asdasd");
  dispatch({ type: TABLE_FETCHING });
  Axios.get("/swapi.co/api/people")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_TABLE, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const pagiTable = (url: string) => (dispatch: any) => {
  console.log("asdasd");
  dispatch({ type: TABLE_FETCHING });
  Axios.get(stripHttps(url))
    .then(res => {
      console.log(res);
      dispatch({ type: PAGI_TABLE, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
