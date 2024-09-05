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
    <header className="bg-gradient-to-b from-black via-black to-transparent hover:bg-black text-white fixed w-full z-50 px-28 py-5 transition-all ease-in-out duration-500">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image alt="logo" src={Logo} />
            {/* <img src="/path-to-logo.svg" alt="ARM Logo" className="h-8" /> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='flex w-full pl-10 justify-end'>
          <div className="hidden md:flex gap-10 justify-between">
            <Link href="#writings" className="flex flex-col after:bg-white after:relative after:h-1 after:w-[25px] after:bottom-0 after:left-0 after:hover:w-full after:transition-all after:ease-in-out after:duration-300 text-[1.125rem]">Writings</Link>
            <Link href="#needs" className="flex flex-col after:bg-white after:relative after:h-1 after:w-[25px] after:bottom-0 after:left-0 after:hover:w-full after:transition-all after:ease-in-out after:duration-300 text-[1.125rem]">Needs</Link>
            <Link href="#contact" className="flex flex-col after:bg-white after:relative after:h-1 after:w-[25px] after:bottom-0 after:left-0 after:hover:w-full after:transition-all after:ease-in-out after:duration-300 text-[1.125rem]">Contact Us</Link>
            <Link href="#about" className="flex flex-col after:bg-white after:relative after:h-1 after:w-[25px] after:bottom-0 after:left-0 after:hover:w-full after:transition-all after:ease-in-out after:duration-300 text-[1.125rem]">About Us</Link>
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
          <Link href="/support" className="block px-4 py-2 text-white hover:bg-gray-600">Writings</Link>
          <Link href="/support" className="block px-4 py-2 text-white hover:bg-gray-600">About Us</Link>
          <Link href="/support" className="block px-4 py-2 text-white hover:bg-gray-600">Contact Us</Link>
          <Link href="/support" className="block px-4 py-2 text-white hover:bg-gray-600">Needs</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar