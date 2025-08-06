'use client';
import React, { useRef } from 'react';
import ProductCard from '../molecules/ProductCard';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  className?: string;
}

export default function ProductCarousel({
  title,
  subtitle,
  products,
  className = ''
}: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'right' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`py-12 ${className}`} dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <Typography variant="h2" weight="bold" className="text-gray-900 mb-2">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body" color="secondary">
              {subtitle}
            </Typography>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-2 space-x-reverse">
          <Button
            variant="ghost"
            size="md"
            icon="ri-arrow-right-s-line"
            onClick={() => scroll('right')}
            className="border border-gray-300 hover:border-[#00FF7F]"
          />
          <Button
            variant="ghost"
            size="md"
            icon="ri-arrow-left-s-line"
            onClick={() => scroll('left')}
            className="border border-gray-300 hover:border-[#00FF7F]"
          />
        </div>
      </div>

      {/* Products Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 space-x-reverse overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-72">
            <ProductCard
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
              reviewCount={product.reviewCount}
              inStock={product.inStock}
              isNew={product.isNew}
              isBestSeller={product.isBestSeller}
            />
          </div>
        ))}
      </div>
    </section>
  );
}