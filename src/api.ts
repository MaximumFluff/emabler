import { RequestBody, Results } from './types/api';

export async function callTransactionsApi(requestBody: RequestBody) {
  const response = await fetch(
    `https://api.emabler.net/api/statistics/transactions?code=${process.env.REACT_APP_API_KEY}&clientId=${process.env.REACT_APP_CLIENT_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-functions-key': `${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const formattedData: Results = await response.json();
  return formattedData;
}

export async function callChargerApi(chargerId: string) {
  const response = await fetch(
    `https://emabler.azurewebsites.net/api/charger-api?chargerName=${chargerId}&code=${process.env.REACT_APP_API_KEY}&clientId=${process.env.REACT_APP_CLIENT_ID}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const formattedData = await response.json();
  return formattedData;
}
