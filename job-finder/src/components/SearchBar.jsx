function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <input
        type="text"
        placeholder="Job title (React, Frontend...)"
        className="flex-1 px-4 py-2 rounded-md text-black outline-none"
      />

      <input
        type="text"
        placeholder="Location"
        className="flex-1 px-4 py-2 rounded-md text-black outline-none"
      />

      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
