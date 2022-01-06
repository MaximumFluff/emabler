import { RequestBody, Results } from './types/api';

export async function callApi(requestBody: RequestBody) {
  const data = await fetch(
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
  const formattedData: Results = await data.json();
  return formattedData;
}
