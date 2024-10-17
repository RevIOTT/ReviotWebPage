import { useState } from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

function LandingPage() {
    const [active, setActive] = useState("Home");
    return (
        <div className="text-white">
        <NavBar setActive={setActive}/>
        {active === "Home" && <Home />}
        {active === "Projects" && <Projects />}
        {active === "Contacts" && <Contacts />}
        </div>
    );
}

export default LandingPage;
