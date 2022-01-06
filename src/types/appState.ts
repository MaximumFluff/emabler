import { Results } from './api';

export type appState = {
  startTime: Date | null | undefined;
  endTime: Date | null | undefined;
  endTimeDisabled: boolean;
  apiData?: Results;
  loading: boolean;
  chargerIDs: string[];
  userIDs: string[];
  groupIDs: string[];
  rfidTags: string[];
};
