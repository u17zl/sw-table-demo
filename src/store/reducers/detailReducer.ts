import { FETCH_DETAIL } from "../actions/actionTypes";

const detailReducer = (
  state = [],
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case FETCH_DETAIL:
      return payload;
    default:
      return state;
  }
};

export default detailReducer;
