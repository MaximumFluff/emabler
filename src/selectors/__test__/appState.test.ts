import formatISO from 'date-fns/formatISO';
import { appState } from '../../types/appState';
import { createApiBody } from '../appState';

describe('appState selectors', () => {
  describe(createApiBody.name, () => {
    it('Should return RequestBody with endDate disabled', () => {
      const currentDate = new Date();
      const state = {
        startTime: currentDate,
        endTime: currentDate,
        endTimeDisabled: true,
        chargerIDs: [] as string[],
        userIDs: [] as string[],
        groupIDs: [] as string[],
        rfidTags: [] as string[],
      } as appState;
      expect(createApiBody(state)).toEqual({
        startTime: formatISO(currentDate),
        endTime: '',
        chargerIDs: undefined,
        userIDs: undefined,
        groupIDs: undefined,
        rfidTags: undefined,
      });
    });

    it('should return RequestBody with endDate enabled', () => {
      const startDate = new Date('2010-01-01');
      const endDate = new Date();
      const state = {
        startTime: startDate,
        endTime: endDate,
        endTimeDisabled: false,
        chargerIDs: [] as string[],
        userIDs: [] as string[],
        groupIDs: [] as string[],
        rfidTags: [] as string[],
      } as appState;
      expect(createApiBody(state)).toEqual({
        startTime: formatISO(startDate),
        endTime: formatISO(endDate),
        chargerIDs: undefined,
        userIDs: undefined,
        groupIDs: undefined,
        rfidTags: undefined,
      });
    });

    it('should return request body with text strings if found', () => {
      const startDate = new Date('2010-01-01');
      const endDate = new Date();
      const state = {
        startTime: startDate,
        endTime: endDate,
        endTimeDisabled: false,
        chargerIDs: ['test1', 'test2'],
        userIDs: ['user1', 'user2'],
        groupIDs: ['group1', 'group2'],
        rfidTags: ['rfid1', 'rfid2'],
      } as appState;
      expect(createApiBody(state)).toEqual({
        startTime: formatISO(startDate),
        endTime: formatISO(endDate),
        chargerIDs: ['test1', 'test2'],
        userIDs: ['user1', 'user2'],
        groupIDs: ['group1', 'group2'],
        rfidTags: ['rfid1', 'rfid2'],
      });
    });
  });
});
