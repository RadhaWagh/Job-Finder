import axios from "axios";

const API_URL = "https://remotive.com/api/remote-jobs";

export const fetchJobs = async (search = "") => {
  const response = await axios.get(API_URL, {
    params: { search }
  });
  return response.data.jobs;
};
