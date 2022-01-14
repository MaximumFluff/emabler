import { formatISO } from 'date-fns';
import { RequestBody } from '../types/api';
import { appState } from '../types/appState';

export const createApiBody = (state: appState): RequestBody => ({
  startTime: state.startTime ? formatISO(state.startTime) : '',
  endTime:
    state.endTime && !state.endTimeDisabled ? formatISO(state.endTime) : '',
  chargerIDs: state.chargerIDs.length > 0 ? state.chargerIDs : undefined,
  userIDs: state.userIDs.length > 0 ? state.userIDs : undefined,
  groupIDs: state.groupIDs.length > 0 ? state.groupIDs : undefined,
  rfidTags: state.rfidTags.length > 0 ? state.rfidTags : undefined,
});
