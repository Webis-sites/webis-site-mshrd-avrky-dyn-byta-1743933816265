'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  name: string;
  href: string;
  isScroll?: boolean;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const navItems: NavItem[] = [
    { name: 'דף הבית', href: '/' },
    { name: 'אודות', href: 'about', isScroll: true },
    { name: 'שירותים', href: 'services', isScroll: true },
    { name: 'מוצרים', href: 'products', isScroll: true },
    { name: 'הצוות שלנו', href: 'team', isScroll: true },
    { name: 'המלצות', href: 'testimonials', isScroll: true },
    { name: 'צור קשר', href: 'contact', isScroll: true },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [router.pathname]);

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.includes(href) || router.asPath.includes(`#${href}`);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 mr-2">
              <Image
                src="/logo.svg"
                alt="משרד עורכי דין ביתא"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-right">
              <h1 className="font-bold text-lg md:text-xl text-primary">משרד עורכי דין ביתא</h1>
              <p className="text-xs md:text-sm text-gray-600">משרד עורכי דין מוביל</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
          {navItems.map((item) => (
            <div key={item.name} className="relative px-1">
              {item.isScroll ? (
                <ScrollLink
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-primary cursor-pointer ${
                    isActive(item.href) ? 'text-primary' : 'text-gray-700'
                  }`}
                  activeClass="text-primary"
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              )}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-3 rounded-full" />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary transition-colors duration-200"
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <nav className="h-full flex flex-col p-4">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-200 py-2">
              {item.isScroll ? (
                <ScrollLink
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`block px-3 py-2 text-right text-base font-medium transition-colors duration-200 hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-gray-700'
                  }`}
                  activeClass="text-primary"
                  onClick={toggleMenu}
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-right text-base font-medium transition-colors duration-200 hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-gray-700'
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;