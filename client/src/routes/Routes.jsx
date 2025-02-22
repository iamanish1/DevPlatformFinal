import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import EventSection from "../pages/Event";
import CreateAccount from "../pages/CreateAccount";
import LoginAccount from "../pages/AlreadyAccout";
import AlreadyAccount from "../pages/AlreadyAccout";
import CommunitySection from "../pages/Community";
import  ProfilePage  from "../pages/Profile";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContext}  from "../Context/AuthContext";
import { useContext } from "react";
import HackthonPage from "../pages/HackthonPage";
import DebuggingduelPage from "../pages/DebuggingDuelPage";
import CodeBattelPage from "../pages/CodeBattelPage";
import SpeedGuidnace from "../pages/SpeedGuidnace";
import QuizPage from "../pages/QuizPage";
import DeveloperMarketPlace from "../pages/DeveloperMarketPlace";
import MentorshipPage from "../pages/Mentorship";
import FinalRegistrationPage from "../pages/SubEventRegistrationPage";
import EventDetailPage from "../pages/EventDetailPage";
import EventParticipatingPage from "../pages/EventParticipatingPage";

const AppRoutes = () => {
    const isAuthenticated = useContext(AuthContext); 
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
        <Route path="/Events" element={< EventSection/>} />
        <Route path="/Community" element={<CommunitySection/>} />
        <Route path="/DeveloperMarket" element={<DeveloperMarketPlace/>} />
        <Route path="/Profile" element={<ProfilePage/>} />
        <Route path="/events/:refrenceId"  element={<EventDetailPage/>} />
        <Route path="participant/Hackthon" element={<HackthonPage/>}/>
        <Route path="participant/debuggingduel" element={<DebuggingduelPage/>} />
        <Route path="participant/codebattel" element={<CodeBattelPage/>} />
        <Route path="participant/speedguide" element={<SpeedGuidnace/>}/>
        <Route path="participant/Quiz" element={<QuizPage/>} />
        <Route path="/mentorship" element={<MentorshipPage/>} />
        <Route path="/participate/:refrenceId" element={<FinalRegistrationPage/>} />
        <Route path="/eventparticipate" element={<EventParticipatingPage/>} />

        </Route>
        <Route path="/" element={<HomePage/>} />
        <Route path="/CreateAccount" element={<CreateAccount/>} />
        <Route path="/LoginAccount" element={< LoginAccount/>} />
        <Route path="/AlreadyAccount" element={<AlreadyAccount/>} />
       
    
    

      </Routes>
    </Router>
  );
};

export default AppRoutes;