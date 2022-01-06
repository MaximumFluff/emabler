import { createAction } from 'typesafe-actions';
import { Results } from '../types/api';

export const setStartTime =
  createAction('SET_START_TIME')<{ startTime: Date | null | undefined }>();

export const setEndTime =
  createAction('SET_END_TIME')<{ endTime: Date | null | undefined }>();

export const toggleEndStateDisabled = createAction(
  'TOGGLE_END_STATE_DISABLED'
)();

export const setApiData = createAction('SET_API_DATA')<{
  apiData: Results;
}>();

export const setLoading = createAction('SET_LOADING')<boolean>();
