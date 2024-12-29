import Herosection from "../components/Herosection"
import NavBar from "../components/NavBar"
import Opportunities from "../components/Opportunites"
import ProjectShowcase from "../components/ProjectShowcase"
import UpcomingEvent from "../components/UpcomingEvent"

const HomePage = ()=>{
    return (
        <>
        <NavBar/>
        <Herosection/>
        <UpcomingEvent/>
        <Opportunities/>
        <ProjectShowcase/>
        </>
    )
}
export default HomePage