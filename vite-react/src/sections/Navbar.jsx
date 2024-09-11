import React, { useState } from "react";


const navlist = [{
    id:1,
    name:"home",
    href:"/",
},{
    id:2,
    name:"about",
    href:"/",
},{
    id:3,
    name:"projects",
    href:"/",
},{
    id:4,
    name:"contacts",
    href:"/",
}]

const NavItems = ()=>{
    return(
        <ul className="nav-ul">
            {["Home","About","Projects","Contacts"].map((ele,ind)=>(
                <li key={ind} className=" nav-li">
                    <a href="/" className="nav-li_a">{ele}</a>
                </li>
            ))}
        </ul>
    )
}
const Navbar = () => {
  const [Isopen, setIsOpen] = useState(false);

  const toggleMenu = () => [setIsOpen((prev) => !prev)];
  return (
    <header
      className=" fixed top-0 left-0 right-0 z-50 bg-black/90
    "
    >
      <div className="  max-w-7xl mx-auto">
        <div className=" flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className=" text-neutral-400 font-bold  text-xl hover:text-white transition-colors"
          >
            abc
          </a>
          <button
            onClick={toggleMenu}
            className=" text-neutral-400   hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={Isopen ? "/assets/menu.svg" : "/assets/close.svg"}
              className=" w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className=" sm:flex hidden">
            <NavItems/>
          </nav>

        </div>
      </div>
      <div className={`nav-sidebar ${Isopen ? " max-h-screen" : "max-h-0"}`}>
        <nav className=" p-5 ">
            <NavItems/>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
