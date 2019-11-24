import Axios from "axios";
import { FETCH_DETAIL } from "./actionTypes";
import fetch_films from "../../utils/fetchFilms";

const fetch_table = (people_id: number) => (dispatch: any) => {
  Axios.get(`https://swapi.co/api/people/${people_id}`)
    .then(async res => {
      console.log(res);
      const film_list = await fetch_films(res.data.films);
      dispatch({
        type: FETCH_DETAIL,
        payload: { ...res.data, films: film_list }
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export default fetch_table;
