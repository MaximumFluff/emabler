import { createAction } from 'typesafe-actions';
import { Results } from '../types/api';

export const setStartTime = createAction('SET_START_TIME')<
  Date | null | undefined
>();

export const setEndTime = createAction('SET_END_TIME')<
  Date | null | undefined
>();

export const toggleEndStateDisabled = createAction(
  'TOGGLE_END_STATE_DISABLED'
)();

export const setApiData = createAction('SET_API_DATA')<{
  apiData: Results;
}>();

export const setLoading = createAction('SET_LOADING')<boolean>();

export const setChargerIDs = createAction('SET_CHARGER_IDS')<string[]>();

export const setUserIDs = createAction('SET_USER_IDS')<string[]>();

export const setGroupIDs = createAction('SET_GROUP_IDS')<string[]>();

export const setRfidTags = createAction('SET_RFID_TAGS')<string[]>();
