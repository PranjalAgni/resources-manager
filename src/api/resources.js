const BASE_API_URL = 'http://localhost:4004/api';

export const fetchResources = async () => {
  const API_URL = `${BASE_API_URL}/resources`;
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
