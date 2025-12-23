function JobCard({ job }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <a href="#" style={{ color: "blue" }}>
        View Details
      </a>
    </div>
  );
}

export default JobCard;
