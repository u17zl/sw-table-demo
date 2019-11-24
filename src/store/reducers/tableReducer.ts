import { FETCH_TABLE } from "../actions/actionTypes";

const tableReducer = (
  state = [],
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case FETCH_TABLE:
      return payload;
    default:
      return state;
  }
};

export default tableReducer;
