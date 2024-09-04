"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import Logo from '@/assets/svg/logo.svg'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (name: any) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  return (
    <header className="bg-gradient-to-b from-black via-black to-transparent hover:bg-black text-white fixed w-full z-50 px-28 py-5">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image alt="logo" src={Logo} />
            {/* <img src="/path-to-logo.svg" alt="ARM Logo" className="h-8" /> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='flex w-full pl-10 justify-between'>
          <div className="hidden md:flex gap-10 justify-between">
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="hover:underline flex items-center"
              >
                Products
              </button>
              {/* Dropdown */}
              {dropdownOpen === 'solutions' && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-200">Automotive</Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-200">IoT</Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-200">Mobile Computing</Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown('partners')}
                className="hover:underline flex items-center"
              >
                Markets
              </button>
              {/* Dropdown */}
              {dropdownOpen === 'partners' && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-200">Strategic Partners</Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-200">Ecosystem</Link>
                </div>
              )}
            </div>

            <Link href="#" className="hover:underline">Partners</Link>
            <Link href="#" className="hover:underline">Developers</Link>
            <Link href="#" className="hover:underline">Support & Training</Link>
            <Link href="#" className="hover:underline">Company</Link>
          </div>

          <div className='flex gap-5' >
            <FontAwesomeIcon icon={faSearch} className="hidden md:block" />
            <FontAwesomeIcon icon={faEnvelope} className="hidden md:block" />
            <FontAwesomeIcon icon={faUserCircle} className="hidden md:block" />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="w-8 h-8" />
            ) : (
              <FiMenu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <nav className="bg-gray-800 p-4 space-y-4">
          <div className="relative">
            <button
              onClick={() => toggleDropdown('solutions')}
              className="w-full text-left"
            >
              Solutions
            </button>
            {dropdownOpen === 'solutions' && (
              <div className="bg-gray-700 p-2 rounded-lg">
                <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Automotive</Link>
                <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-600">IoT</Link>
                <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Mobile Computing</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('partners')}
              className="w-full text-left"
            >
              Partners
            </button>
            {dropdownOpen === 'partners' && (
              <div className="bg-gray-700 p-2 rounded-lg">
                <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Strategic Partners</Link>
                <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Ecosystem</Link>
              </div>
            )}
          </div>
          <Link href="/support" className="block px-4 py-2 text-white hover:bg-gray-600">Support</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar