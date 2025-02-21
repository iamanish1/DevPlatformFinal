import express from "express" ; 
import authentication from "../controller/authRegisterController.js";
import authLoginUser from "../controller/authLoginController.js";
import logoutUser from "../controller/LogoutController.js";
import {
    createBugHuntArenaEvent,
    createHackathonEvent,
    createDebuggingDuelEvent,
    createCodeBattleEvent,
    createSpeedGuidanceEvent,
    createQuizEvent,
} from "../controller/EventCreationcontroller.js";
import getauthUserDetail from "../controller/GetauthUserDetailController.js";
import authenticateUser from "../Middleware/AuthMidellware.js";



const  Routes = express.Router();

Routes.post("/authentication", authentication)
Routes.post("/authLoginUser",authLoginUser)
Routes.post("/logout", logoutUser)
Routes.post("/create/bug_hunt_arena", createBugHuntArenaEvent);
Routes.post("/create/hackathon", createHackathonEvent);
Routes.post("/create/debugging_duel", createDebuggingDuelEvent);
Routes.post("/create/code_battle", createCodeBattleEvent);
Routes.post("/create/speed_guidance", createSpeedGuidanceEvent);
Routes.post("/create/quiz", createQuizEvent);
Routes.get("/authuser", authenticateUser,getauthUserDetail);



export default Routes;