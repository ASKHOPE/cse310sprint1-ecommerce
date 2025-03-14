// components/Header.tsx
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            ShopNow
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-indigo-600 font-medium">
              Products
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-indigo-600 font-medium">
              Categories
            </Link>
            <Link href="/deals" className="text-gray-700 hover:text-indigo-600 font-medium">
              Deals
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
              About
            </Link>
          </nav>

          {/* Search, Cart, and User Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-60"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500 h-5 w-5" />
            </div>
            <Link href="/account" className="text-gray-700 hover:text-indigo-600">
              <User className="h-6 w-6" />
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-indigo-600 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex justify-center mb-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                />
                <Search className="absolute left-3 top-2.5 text-gray-500 h-5 w-5" />
              </div>
            </div>

            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 hover:bg-gray-50 rounded"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 hover:bg-gray-50 rounded"
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link 
                href="/categories" 
                className="text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 hover:bg-gray-50 rounded"
                onClick={toggleMenu}
              >
                Categories
              </Link>
              <Link 
                href="/deals" 
                className="text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 hover:bg-gray-50 rounded"
                onClick={toggleMenu}
              >
                Deals
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 hover:bg-gray-50 rounded"
                onClick={toggleMenu}
              >
                About
              </Link>
            </nav>

            <div className="flex justify-evenly mt-4 pt-4 border-t border-gray-200">
              <Link 
                href="/account" 
                className="text-gray-700 hover:text-indigo-600 flex flex-col items-center"
                onClick={toggleMenu}
              >
                <User className="h-6 w-6 mb-1" />
                <span className="text-sm">Account</span>
              </Link>
              <Link 
                href="/cart" 
                className="text-gray-700 hover:text-indigo-600 flex flex-col items-center relative"
                onClick={toggleMenu}
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 mb-1" />
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </div>
                <span className="text-sm">Cart</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;