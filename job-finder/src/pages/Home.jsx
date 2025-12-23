import { useState } from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import { fetchJobs } from "../services/jobApi";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query, location) => {
    setLoading(true);
    try {
      const results = await fetchJobs(query, location);
      setJobs(results || []);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          💼 Job Finder
        </h1>

        <SearchBar onSearch={handleSearch} />

        {loading && <p>Loading jobs...</p>}

        <JobList jobs={jobs} />
      </div>
    </div>
  );
}

export default Home;

