export async function getData(queryParams: string) {
  try {
    const response = await fetch(
      `https://jscamp-api.vercel.app/api/jobs?${queryParams}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
}

export async function getJobData(id: string) {
  try {
    const response = await fetch(
      `https://jscamp-api.vercel.app/api/jobs/${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching job data: ', error);
    return null;
  }
}
