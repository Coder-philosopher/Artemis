// ./src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-black text-white p-4 flex items-center justify-between shadow-md relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-700">
      {/* Logo and Project Name */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Artemis</h1>
        <p className="text-gray-400 text-xs mt-1">Made by
           <span className='font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse' > Abdullah </span>
           with 💖</p>
      </div>

      {/* Hamburger Icon */}
      <div className="relative">
        <button
          className="text-2xl hover:bg-gray-800 p-2 rounded transition-all duration-300"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <FaBars />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
            //we want on hover it to open on navbar from right before hamburgur icon to left (flex-row)
            className="z-10 absolute top-full left-0 rounded w-full bg-gray-800 text-white p-4 shadow-lg flex flex-col items-start animate-slide-in-left transition duration-300 ease-in-out"
          >
            <Link
              to="/"
              className="px-4 py-2 w-full hover:bg-gray-700 rounded transition duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 w-full hover:bg-gray-700 rounded transition duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              About Project
            </Link>
            <Link
              to="/features"
              className="px-4 py-2 w-full hover:bg-gray-700 rounded transition duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
          </div>
        )}
        <a
          href="https://github.com/Coder-philosopher/projectAI"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition duration-200 shadow-md ml-4"
        >
          Source Code
        </a>
      </div>
    </header>
  );
};

export default Navbar;
