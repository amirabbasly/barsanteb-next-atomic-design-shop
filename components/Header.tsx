'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold text-[#00CC66] font-['Pacifico'] hover:text-[#00B359] transition-colors duration-200">
              برسان طب
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 sm:mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو در محصولات گیاهی..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pr-10 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00CC66] focus:border-[#00CC66] text-right text-sm bg-gray-50 hover:bg-white transition-all duration-200"
                dir="rtl"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <i className="ri-search-line text-gray-500 w-5 h-5 flex items-center justify-center"></i>
              </div>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
            <button className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-full transition-all duration-200 cursor-pointer">
              <i className="ri-user-line text-gray-700 w-5 h-5 flex items-center justify-center"></i>
            </button>
            <button className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-full transition-all duration-200 cursor-pointer relative">
              <i className="ri-shopping-cart-line text-gray-700 w-5 h-5 flex items-center justify-center"></i>
              <span className="absolute -top-1 -right-1 bg-[#00CC66] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium shadow-md">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}