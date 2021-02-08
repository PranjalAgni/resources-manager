export const BASE_API_URL = 'https://api.resmanager.pranjal.me/api';

export const saveResource = async (payload) => {
  const API_URL = `${BASE_API_URL}/resources/create`;
  const response = await fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    method: 'POST',
  });

  const data = await response.json();
  return data;
};
