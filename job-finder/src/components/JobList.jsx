import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
  },
  {
    id: 2,
    title: "React Intern",
    company: "Microsoft",
    location: "India",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Startup XYZ",
    location: "Pune",
  },
];

function JobList() {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
