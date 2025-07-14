import { useState } from 'react';
import logo from '../assets/Solegar.jpeg'; // Ganti dengan path gambar kamu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span>
              <div className="flex items-center space-x-4">
                <img
                  src={logo} // Ganti dengan path gambar kamu
                  alt="Logo"
                  className="w-14 h-14 rounded-full shadow-lg"
                />
                <span className="text-xl font-bold text-white">Solegar</span>
              </div>
            </span>
            
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition font-medium">About</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition font-medium">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition font-medium">Contact</a>
          </nav>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 transition-all duration-300">
          <nav className="flex flex-col space-y-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400 font-medium">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400 font-medium">About</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400 font-medium">Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400 font-medium">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
