import React from "react";

interface NavItem {
  setActive: (active: string) => void;
}

function NavBar({ setActive }: NavItem) {
  return (
    <div className="relative flex justify-evenly w-full list-none font-copperplate bg-reviot-blue text-3xl">
        <li onClick={()=>{setActive('Home')}}>Home</li>
        <li onClick={()=>{setActive('Projects')}}>projects</li>
        <li onClick={()=>{setActive('Contacts')}}>Contact</li>
    </div>
  );
}

export default NavBar;
