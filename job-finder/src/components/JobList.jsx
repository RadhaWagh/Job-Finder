import JobCard from "./JobCard";

function JobList({ jobs }) {
  if (!jobs || jobs.length === 0) {
    return <p className="text-gray-400">No jobs found.</p>;
  }

  return (
    <div>
      {jobs.map((job) => (
        <JobCard
          key={job.job_id}
          job={{
            title: job.job_title,
            company: job.employer_name,
            location: job.job_city || "Remote",
          }}
        />
      ))}
    </div>
  );
}

export default JobList;
