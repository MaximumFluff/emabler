import * as actions from '../actions/appState';
import { ActionType, getType, Reducer } from 'typesafe-actions';
import { appState } from '../types/appState';

const initialState: appState = {
  startTime: new Date(),
  endTime: new Date(),
  endTimeDisabled: false,
  apiData: undefined,
  loading: false,
  chargerIDs: [],
  userIDs: [],
  groupIDs: [],
  rfidTags: [],
};

const reducer: Reducer<appState, ActionType<typeof actions>> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(actions.setStartTime): {
      return {
        ...state,
        startTime: action.payload,
      };
    }
    case getType(actions.setEndTime): {
      return {
        ...state,
        endTime: action.payload,
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
    case getType(actions.setChargerIDs): {
      return {
        ...state,
        chargerIDs: [...action.payload],
      };
    }
    case getType(actions.setUserIDs): {
      return {
        ...state,
        userIDs: [...action.payload],
      };
    }
    case getType(actions.setGroupIDs): {
      return {
        ...state,
        groupIDs: [...action.payload],
      };
    }
    case getType(actions.setRfidTags): {
      return {
        ...state,
        rfidTags: [...action.payload],
      };
    }
    default:
      return state;
  }
};

export default reducer;
