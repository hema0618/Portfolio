import React from "react";
import { Switch,Route } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Contact from "./contact";
import projects from "./projects";
import Resume from  "./resume";

const Main = () => (

    <switch>
        <Route exact path="/" component={LandingPage} />

    </switch>
)
export default  Main;