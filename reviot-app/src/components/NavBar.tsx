interface NavItem {
  setActive: (active: string) => void;
}

function NavBar({ setActive }: NavItem) {
  return (
    <div className="relative flex justify-evenly w-full list-none font-copperplate bg-reviot-blue text-xl md:text-3xl p-10 md:p-5">
        <li onClick={()=>{setActive('Home')}}>Home</li>
        <li onClick={()=>{setActive('Projects')}}>projects</li>
        <li onClick={()=>{setActive('Contacts')}}>Contact</li>
    </div>
  );
}

export default NavBar;
