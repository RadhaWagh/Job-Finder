function SearchBar() {
    return (
        <div style={{ display: "flex", gap: "10px", margin: "20px 0"}}>
            <input
            type="text"
            placeholder="Job title (React, Frontend...)"
            style={{ flex: 1, padding: "10px"}}
            />
            <input
            type="text"
            placeholder="Location"
            style={{ flex: 1, padding: "10px"}}
            />
            <button style={{ padding: "10px 20px", cursor: "pointer"}}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;