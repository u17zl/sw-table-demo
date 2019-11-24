import Axios from "axios";
import { FETCH_TABLE } from "./actionTypes";

const fetch_table = () => (dispatch: any) => {
  Axios.get("https://swapi.co/api/people")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_TABLE, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
export default fetch_table;
