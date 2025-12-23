import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";

function Home() {
    return (
        <div style={{ padding: "20px", maxWidth: "900px", margin: "auto"}}>
            <h1 style={{ textAlign: "centre" }}>💼 Job Finder</h1>
            <SearchBar />
            <JobList />
        </div>
    );
}

export default Home;