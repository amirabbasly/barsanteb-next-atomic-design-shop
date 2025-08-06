'use client';
import React from 'react';
import Link from 'next/link';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  productCount: number;
  href: string;
  icon: string;
}

interface CategoryShowcaseProps {
  title: string;
  categories: Category[];
  className?: string;
}

export default function CategoryShowcase({
  title,
  categories,
  className = ''
}: CategoryShowcaseProps) {
  return (
    <section className={`py-16 bg-gray-50 ${className}`} dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography variant="h2" weight="bold" className="text-gray-900 mb-4">
            {title}
          </Typography>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF7F] to-[#00E070] mx-auto rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Category Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:bg-[#00FF7F] group-hover:text-white transition-all duration-300">
                    <Icon name={category.icon} size="lg" />
                  </div>
                  
                  {/* Product Count Badge */}
                  <div className="absolute bottom-4 left-4 bg-[#00FF7F] text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {category.productCount} محصول
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <Typography variant="h5" weight="bold" className="text-gray-900 group-hover:text-[#00FF7F] transition-colors duration-200">
                    {category.name}
                  </Typography>
                  
                  <Typography variant="body" color="secondary" className="line-clamp-2">
                    {category.description}
                  </Typography>
                  
                  <div className="flex items-center justify-between pt-2">
                    <Typography variant="body" className="text-[#00FF7F] font-semibold group-hover:text-[#00E070]">
                      مشاهده محصولات
                    </Typography>
                    <Icon 
                      name="arrow-left-line" 
                      size="md" 
                      className="text-[#00FF7F] group-hover:translate-x-1 transition-transform duration-200" 
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}