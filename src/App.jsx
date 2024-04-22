import Header from './components/Navbar.jsx'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from "./components/JobListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";

const App = () => {
    return (
        <>
            <Header />
            <Hero title="React Jobs" subtitle="Find your next developer job." />
            <HomeCards />
            <JobListings />
            <ViewAllJobs />
        </>
    )
}
export default App
