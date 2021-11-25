import { handleActions } from 'redux-actions';
import { CHANGE_PUBLIC_APIS_PROPS, GET_PUBLIC_APIS } from 'store/action-types';

const initialState = {
  publicApis: [],
  error: '',
  count: 0,
};

function updateState(state, newProps) {
  let newState = Object.assign({}, state, newProps);
  return newState;
}

const publicApis = handleActions(
  {
    [CHANGE_PUBLIC_APIS_PROPS]: (state, action) => {
      let newState = updateState(state, action.payload);
      return newState;
    },

    [GET_PUBLIC_APIS]: (state, action) => {
      if (action.error) {
        const newState = updateState(state, {
          error: action.payload.error,
        });

        return newState;
      }

      const { count, entries } = action.payload;

      const newState = updateState(state, {
        count,
        publicApis: entries,
        error: '',
      });

      return newState;
    },
  },
  initialState,
);

export default publicApis;