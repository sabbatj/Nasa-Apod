import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

export const fetchApod = async (date?: string) => {
  try {
    const params: any = { api_key: API_KEY };

    if (date) {
      params.date = date;
    } else {
      params.date = new Date().toISOString().split('T')[0];
    }

    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch APOD data');
  }
};
export const fetchApodsInRange = async (startDate?: string, endDate?: string, count?: number) => {
  try {
    const params: any = { api_key: API_KEY };

    if (startDate && endDate) {
      params.start_date = startDate;
      params.end_date = endDate;
    } else {
      const today = new Date();
      const pastDate = new Date();
      pastDate.setDate(today.getDate() - 32); // Fetch last  31 days APODs
      params.start_date = pastDate.toISOString().split('T')[0];
      params.end_date = today.toISOString().split('T')[0];
    }

    if (count) {
      params.count = count;
    }
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch APOD data');
  }
};
