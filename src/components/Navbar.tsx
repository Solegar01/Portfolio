// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Navbar({ activeSection, scrollToSection }: {
  activeSection: string,
  scrollToSection: (id: string) => void
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, children, mobile = false }: {
    href: string;
    children: React.ReactNode;
    mobile?: boolean;
  }) => (
    <button
      onClick={() => {
        scrollToSection(href);
        setIsMenuOpen(false);
      }}
      className={`$${
        mobile
          ? 'block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'
          : `text-gray-700 hover:text-indigo-600 transition-colors font-medium ${
              activeSection === href ? 'text-indigo-600' : ''
            }`
      }`}
    >
      {children}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-indigo-600">Portfolio</div>
          <div className="hidden md:flex space-x-8">
            {sections.map(section => (
              <NavLink key={section} href={section}>{section[0].toUpperCase() + section.slice(1)}</NavLink>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg">
            <div className="p-4 space-y-2">
              {sections.map(section => (
                <NavLink key={section} href={section} mobile>
                  {section[0].toUpperCase() + section.slice(1)}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// import { useState } from 'react';
// import logo from '../assets/Solegar.jpeg'; // Ganti dengan path gambar kamu

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <span>
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={logo} // Ganti dengan path gambar kamu
//                   alt="Logo"
//                   className="w-14 h-14 rounded-full shadow-lg"
//                 />
//                 <span className="text-xl font-bold text-white">Solegar</span>
//               </div>
//             </span>
            
//           </div>

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex space-x-8">
//             <a href="#home" className="text-gray-300 hover:text-blue-400 transition font-medium">Home</a>
//             <a href="#about" className="text-gray-300 hover:text-blue-400 transition font-medium">About</a>
//             <a href="#projects" className="text-gray-300 hover:text-blue-400 transition font-medium">Projects</a>
//             <a href="#contact" className="text-gray-300 hover:text-blue-400 transition font-medium">Contact</a>
//           </nav>

//           {/* Hamburger */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-200 focus:outline-none"
//             >
//               {isOpen ? (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
//                   viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
//                   viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-900 px-4 pb-4 transition-all duration-300">
//           <nav className="flex flex-col space-y-3">
//             <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400 font-medium">Home</a>
//             <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400 font-medium">About</a>
//             <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400 font-medium">Projects</a>
//             <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400 font-medium">Contact</a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
