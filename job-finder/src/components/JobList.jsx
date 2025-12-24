const JobList = ({ jobs }) => {
  if (!jobs.length) return <p className="empty">No jobs found.</p>;

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h2>{job.title}</h2>
          <p className="company">{job.company_name}</p>
          <span className="type">
            {job.job_type.replace("_", " ").toUpperCase()}
          </span>

          <a
            href={job.url}
            target="_blank"
            rel="noreferrer"
            className="apply-btn"
          >
            Apply Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobList;
