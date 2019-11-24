import { FETCH_DETAIL, DETAIL_FETCHING } from "../actions/actionTypes";

const initState = {
  payload: {
    name: "",
    height: "",
    mass: "",
    birthYear: "",
    gender: "",
    list: [],
    film_list: []
  },
  isFetching: false
};

const detailReducer = (
  state = initState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case DETAIL_FETCHING:
      return { ...state, isFetching: true };
    case FETCH_DETAIL:
      return { ...state, isFetching: false, payload };
    default:
      return state;
  }
};

export default detailReducer;
