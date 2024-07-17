import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import { logos } from "../Details";
// import Toggle from 'react-toggle';
// import 'react-toggle/style.css';

function Header() {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  // const handleThemeToggle = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width backdrop-blur-lg ">
      <div className="flex justify-between items-center py-2 md:py-10 ">
        <NavLink to="/">
            <img className="w-14" style={{ width:'200px'}}  src={logos.logoLight} alt="logo" />
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="text-white font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0 hover:text-cyan-500">
            <NavLink to="/" onClick={toggleClass}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0 hover:text-cyan-500">
            <NavLink to="/about" onClick={toggleClass}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0 hover:text-cyan-500">
            <NavLink to="/technologies" onClick={toggleClass}>
              Skills
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0 hover:text-cyan-500">
            <NavLink to="/projects" onClick={toggleClass}>
              Projects
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0 hover:text-cyan-500">
            <NavLink to="/contact" onClick={toggleClass}>
              Contact
            </NavLink>
          </li>
          {/* <li>
            <Toggle
              checked={isDarkMode}
              onChange={handleThemeToggle}
              icons={{
                checked: <span className="toggle-icon">🌙</span>,
                unchecked: <span className="toggle-icon">☀️</span>,
              }}
              className={`relative inline-block w-12 h-6 rounded-full bg-gray-300 ${isDarkMode ? 'bg-blue-500' : 'bg-gray-400'}`}
              style={{ padding: '2px' }} // Adjust padding if necessary
            />
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
