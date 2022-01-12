type RequestBody = {
  startTime: string;
  endTime?: string;
  chargerIDs?: string[];
  userIDs?: string[];
  groupIDs?: string[];
  rfidTags?: string[];
};

type Transaction = {
  startTimeUTC: string;
  endTimeUTC: string;
  chargerId: string;
  socketId: number;
  rfidTag: string;
  userId: number;
  userName: string;
  groupId: number;
  groupName: string;
  consumptionWH: number;
  consumptionKWH: number;
  transactionLengthMinutes: number;
};

type Results = {
  results: Transaction[];
};

type ChargerData = {
  activeConnection: false;
  chargerStatus: string;
};

export type { RequestBody, Transaction, Results, ChargerData };
