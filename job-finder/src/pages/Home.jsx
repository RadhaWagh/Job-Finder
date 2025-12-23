import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          💼 Job Finder
        </h1>

        <SearchBar />
        <JobList />
      </div>
    </div>
  );
}

export default Home;
