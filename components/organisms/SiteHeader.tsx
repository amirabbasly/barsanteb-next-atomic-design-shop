'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from '../molecules/SearchBar';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';

interface SiteHeaderProps {
  cartItemCount?: number;
  isLoggedIn?: boolean;
  userName?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export default function SiteHeader({
  cartItemCount = 0,
  isLoggedIn = false,
  userName,
  onSearch,
  className = ''
}: SiteHeaderProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className={`bg-white shadow-md border-b sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Typography variant="h4" className="text-[#00FF7F] font-['Pacifico'] hover:text-[#00E070] transition-colors duration-200">
              برسان طب
            </Typography>
          </Link>

          {/* Search Bar */}
          <SearchBar
            placeholder="جستجو در محصولات گیاهی..."
            onSearch={onSearch}
            className="mx-4 sm:mx-8"
          />

          {/* Navigation Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
            {/* User Account */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-full transition-all duration-200 cursor-pointer"
              >
                <Icon name="user-line" size="md" color="secondary" />
              </button>
              
              {showUserMenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10">
                  {isLoggedIn ? (
                    <>
                      <div className="px-4 py-2 border-b border-gray-100">
                        <Typography variant="body" weight="medium">
                          {userName || 'کاربر گرامی'}
                        </Typography>
                      </div>
                      <Link href="/profile" className="block px-4 py-2 hover:bg-gray-50 transition-colors duration-200">
                        <Typography variant="body">پروفایل</Typography>
                      </Link>
                      <Link href="/orders" className="block px-4 py-2 hover:bg-gray-50 transition-colors duration-200">
                        <Typography variant="body">سفارشات</Typography>
                      </Link>
                      <button className="block w-full text-right px-4 py-2 hover:bg-gray-50 transition-colors duration-200">
                        <Typography variant="body" color="error">خروج</Typography>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="block px-4 py-2 hover:bg-gray-50 transition-colors duration-200">
                        <Typography variant="body">ورود</Typography>
                      </Link>
                      <Link href="/register" className="block px-4 py-2 hover:bg-gray-50 transition-colors duration-200">
                        <Typography variant="body">ثبت نام</Typography>
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Shopping Cart */}
            <Link href="/cart">
              <button className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-full transition-all duration-200 cursor-pointer relative">
                <Icon name="shopping-cart-line" size="md" color="secondary" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#00FF7F] text-gray-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}