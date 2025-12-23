function JobCard({ job }) {
  return (
    <div className="bg-gray-800 p-5 rounded-lg mb-4 hover:bg-gray-700 transition">
      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>

      <p className="text-gray-300">
        <span className="font-medium">Company:</span> {job.company}
      </p>

      <p className="text-gray-300 mb-3">
        <span className="font-medium">Location:</span> {job.location}
      </p>

      <button className="text-blue-400 hover:underline">
        View Details →
      </button>
    </div>
  );
}

export default JobCard;
