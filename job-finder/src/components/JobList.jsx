const JobList = ({ jobs }) => {
  if (!jobs.length) return <p>No jobs found.</p>;

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.company_name}</p>
          <p>{job.job_type}</p>
          <a href={job.url} target="_blank">Apply</a>
        </div>
      ))}
    </div>
  );
};

export default JobList;
