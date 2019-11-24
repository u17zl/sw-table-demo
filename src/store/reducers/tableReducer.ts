import {
  FETCH_TABLE,
  PAGI_TABLE,
  TABLE_FETCHING
} from "../actions/actionTypes";

const initState: object = { isFetching: true };

const tableReducer = (
  state = initState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case TABLE_FETCHING:
      return { ...state, isFetching: true };
    case FETCH_TABLE:
      return { ...state, isFetching: false, payload };
    case PAGI_TABLE:
      return { ...state, isFetching: false, payload };
    default:
      return state;
  }
};

export default tableReducer;
