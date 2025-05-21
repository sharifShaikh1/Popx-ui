import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      console.log('Searching for:', searchQuery);
      // Place your actual search logic here
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="bg-white shadow px-6 sm:px-8 lg:px-12 w-full relative z-10">
      <div className="flex items-center justify-between h-16 lg:h-20 w-full">
        {/* Logo (Left) */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center">
            <img
              className="h-8 lg:h-10"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
              alt="PostCrafts Logo"
            />
          </a>
        </div>
{/* Desktop Nav Links */}


        {/* Search bar (Center) */}
        <div className="flex-grow max-w-md mx-4 hidden md:flex">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        {/* Right: Profile Icon */}
        <div className="flex items-center space-x-3 ml-auto">
          <a
            href="#"
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Get started now
          </a>
          <button
            onClick={toggleSidebar}
            className="text-3xl text-gray-700 focus:outline-none"
            aria-label="Profile"
          >
            <FontAwesomeIcon icon={faUserCircle} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center justify-between p-4">
        <button
          onClick={toggleMenu}
          className="text-2xl text-gray-700 focus:outline-none"
        >
          <FontAwesomeIcon icon={faUserCircle} />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden mt-2 ${isMenuOpen ? 'block' : 'hidden'} bg-white border rounded shadow px-6 py-4`}
      >
       
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-2xl text-gray-700">
            <FontAwesomeIcon icon={faUserCircle} />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <a href="#" className="block text-lg text-black hover:text-blue-600">
            Profile
          </a>
          <a href="#" className="block text-lg text-black hover:text-blue-600">
            Settings
          </a>
          <a href="#" className="block text-lg text-black hover:text-blue-600">
            Logout
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
