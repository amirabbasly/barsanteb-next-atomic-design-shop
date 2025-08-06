'use client';
import React from 'react';
import Link from 'next/link';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`py-3 sm:py-4 bg-gray-50 border-b ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ol className="flex items-center space-x-2 space-x-reverse text-sm overflow-x-auto" dir="rtl">
          {items.map((item, index) => (
            <li key={index} className="flex items-center whitespace-nowrap">
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-gray-600 hover:text-[#00FF7F] transition-colors duration-200 cursor-pointer font-medium"
                >
                  <Typography variant="body" className="hover:text-[#00FF7F] transition-colors duration-200">
                    {item.label}
                  </Typography>
                </Link>
              ) : (
                <Typography variant="body" weight="semibold" className="text-gray-900">
                  {item.label}
                </Typography>
              )}
              {index < items.length - 1 && (
                <Icon 
                  name="arrow-left-s-line" 
                  size="sm" 
                  className="text-gray-400 mx-2" 
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}