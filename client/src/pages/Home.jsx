import CollabWithUs from "../components/CollabWithUs"
import Footer from "../components/footer"
import Herosection from "../components/Herosection"
import HostEventSection from "../components/HostEvent"
import NavBar from "../components/NavBar"
import Opportunities from "../components/Opportunites"
import ProjectShowcase from "../components/ProjectShowcase"
import UpcomingEvent from "../components/UpcomingEvent"
import UserTestinomial from "../components/Usertestimonial"
import WeAre from "../components/WeAre"

const HomePage = ()=>{
    return (
        <>
        <NavBar/>
        <Herosection/>
        <WeAre/>
        <UpcomingEvent/>
         <HostEventSection/>
        <Opportunities/>
        <UserTestinomial/>
        <ProjectShowcase/>
        <CollabWithUs/>
        <Footer/>
        </>
    )
}
export default HomePage