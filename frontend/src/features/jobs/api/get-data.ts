import { API_BASE_URL } from '@/shared/lib/api';

export async function getData(queryParams: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs?${queryParams}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
}

export async function getJobData(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching job data: ', error);
    return null;
  }
}
