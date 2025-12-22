import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Finder App</h1>

      {loading && <p>Loading jobs...</p>}

      {!loading && jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company_name}</p>
          <p><strong>Location:</strong> {job.candidate_required_location}</p>
          <a href={job.url} target="_blank">View Job</a>
        </div>
      ))}
    </div>
  );
}

export default App;
