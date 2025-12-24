import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import { fetchJobs } from "../services/jobService";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchJobs(search).then(setJobs);
  }, [search]);

  return (
    <>
      <SearchBar onSearch={setSearch} />
      <JobList jobs={jobs} />
    </>
  );
};

export default Home;


