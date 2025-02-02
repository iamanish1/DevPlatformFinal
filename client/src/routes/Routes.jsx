import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import EventSection from "../pages/Event";
import ProblemSection from "../pages/Problem";
import CreateAccount from "../pages/CreateAccount";
import LoginAccount from "../pages/AlreadyAccout";
import AlreadyAccount from "../pages/AlreadyAccout";
import CarrierSection from "../pages/Carrier";
import CodingRoomSection from "../pages/CodingRooms";
import CommunitySection from "../pages/Community";
import  ProfilePage  from "../pages/Profile";
import BugHuntArena from "../pages/BugHuntArena";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContext}  from "../Context/AuthContext";
import { useContext } from "react";
import EventArenaPage from "../pages/EventArenaPage";
import HackthonPage from "../pages/HackthonPage";
import DebuggingduelPage from "../pages/DebuggingDuelPage";
import CodeBattelPage from "../pages/CodeBattelPage";
import SpeedGuidnace from "../pages/SpeedGuidnace";
import QuizPage from "../pages/QuizPage";

const AppRoutes = () => {
    const isAuthenticated = useContext(AuthContext); 
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
        <Route path="/Events" element={< EventSection/>} />
        <Route path="/Community" element={<CommunitySection/>} />
        <Route path="/CodingRoom" element={<CodingRoomSection/>} />
        <Route path="/Carrier" element={<CarrierSection/>} />
        <Route path="/Practice" element={<ProblemSection/>} />
        <Route path="/Profile" element={<ProfilePage/>} />
        <Route path="/participant/Eventarena" element={<EventArenaPage/>} />
        <Route path="participant/bughunt"  element={<BugHuntArena/>} />
        <Route path="participant/Hackthon" element={<HackthonPage/>}/>
        <Route path="participant/debuggingduel" element={<DebuggingduelPage/>} />
        <Route path="participant/codebattel" element={<CodeBattelPage/>} />
        <Route path="participant/speedguide" element={<SpeedGuidnace/>}/>
        <Route path="participant/Quiz" element={<QuizPage/>} />

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