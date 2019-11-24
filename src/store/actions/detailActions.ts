import Axios from "axios";
import { FETCH_DETAIL, DETAIL_FETCHING } from "./actionTypes";
import fetch_films from "../../utils/fetchFilms";
import stripHttps from "../../utils/stripHttps";

const fetch_table = (url: string) => (dispatch: any) => {
  dispatch({ type: DETAIL_FETCHING });

  Axios.get(stripHttps(url))
    .then(async res => {
      console.log(res);
      const film_list = await fetch_films(res.data.films);
      dispatch({
        type: FETCH_DETAIL,
        payload: { ...res.data, film_list: film_list }
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export default fetch_table;
