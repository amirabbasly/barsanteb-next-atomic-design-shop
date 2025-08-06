'use client';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="py-3 sm:py-4 bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ol className="flex items-center space-x-2 space-x-reverse text-sm overflow-x-auto" dir="rtl">
          {items.map((item, index) => (
            <li key={index} className="flex items-center whitespace-nowrap">
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-gray-600 hover:text-[#00CC66] transition-colors duration-200 cursor-pointer font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-semibold">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <i className="ri-arrow-left-s-line text-gray-400 mx-2 w-4 h-4 flex items-center justify-center"></i>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}