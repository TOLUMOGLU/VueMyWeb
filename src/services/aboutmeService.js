import axios from 'axios';

const API_URL = 'http://localhost:5282/api/About';

export const aboutGetAll = async () => {
  const response = await axios.get(API_URL)
  return {data:response.data, status:response.status}
}

