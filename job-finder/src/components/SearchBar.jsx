import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(query, location);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Job title (React, Frontend...)"
        className="flex-1 px-4 py-2 rounded-md text-black"
      />

      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="flex-1 px-4 py-2 rounded-md text-black"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

