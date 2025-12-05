export async function getData(queryParams: string) {
  try {
    const response = await fetch(
      `https://jscamp-api.vercel.app/api/jobs?${queryParams}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
}
