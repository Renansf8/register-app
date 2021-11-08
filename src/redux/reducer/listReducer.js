import { SWITCH_LIST } from '../actions';

const INITIAL_STATE = {
  listSwitch: false,
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_LIST:
      return {
        ...state,
        listSwitch: true,
      };
    default: {
      return state;
    }
  }
};

export default listReducer;
