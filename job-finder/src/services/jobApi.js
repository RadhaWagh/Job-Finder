export const fetchJobs = async (query, location) => {
  const url = `https://jsearch.p.rapidapi.com/search?query=${query}&location=${location}&num_pages=1`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data.data;
};
