import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import { fetchJobs } from "../services/jobService";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchJobs(search)
      .then(setJobs)
      .finally(() => setLoading(false));
  }, [search]);

  return (
  <div className="page-center">
    <div className="container">
      <SearchBar onSearch={setSearch} />

      {loading && <p className="loader">Loading jobs...</p>}

      <JobList jobs={jobs} />
    </div>
  </div>
);

};

export default Home;
