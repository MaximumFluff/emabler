import * as actions from '../actions/appState';
import { ActionType, getType, Reducer } from 'typesafe-actions';
import { appState } from '../types/appState';

const initialState: appState = {
  startTime: undefined,
  endTime: undefined,
  endTimeDisabled: false,
  apiData: undefined,
  loading: false,
};

const reducer: Reducer<appState, ActionType<typeof actions>> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(actions.setStartTime): {
      return {
        ...state,
        startTime: action.payload.startTime,
      };
    }
    case getType(actions.setEndTime): {
      return {
        ...state,
        endTime: action.payload.endTime,
      };
    }
    case getType(actions.toggleEndStateDisabled): {
      return {
        ...state,
        endTimeDisabled: !state.endTimeDisabled,
      };
    }
    case getType(actions.setApiData): {
      return {
        ...state,
        apiData: action.payload.apiData,
      };
    }
    case getType(actions.setLoading): {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
