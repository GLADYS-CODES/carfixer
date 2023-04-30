import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-gray-700 font-bold text-lg">
            CarFixer
          </Link>
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`${isOpen ? '' : 'hidden'} lg:flex lg:items-center`}>
            <li className="my-3 lg:my-0 lg:mx-3">
              <Link
                to="/services"
                className="block text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li className="my-3 lg:my-0 lg:mx-3">
              <Link
                to="/appointments"
                className="block text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                Appointments
              </Link>
            </li>
            <li className="my-3 lg:my-0 lg:mx-3">
              <Link
                to="/about"
                className="block text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li className="my-3 lg:my-0 lg:mx-3">
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
