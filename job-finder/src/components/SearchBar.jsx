const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search jobs (React, Backend, Intern...)"
      onChange={handleChange}
      className="search-input"
    />
  );
};

export default SearchBar;

