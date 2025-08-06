'use client';
import React from 'react';
import ProductCard from '../molecules/ProductCard';
import Typography from '../atoms/Typography';

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

interface ProductGridProps {
  title?: string;
  products: Product[];
  columns?: 2 | 3 | 4 | 5;
  showMore?: boolean;
  onShowMore?: () => void;
  className?: string;
}

export default function ProductGrid({
  title,
  products,
  columns = 4,
  showMore = false,
  onShowMore,
  className = ''
}: ProductGridProps) {
  const gridClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
  };

  return (
    <section className={`py-12 ${className}`} dir="rtl">
      {title && (
        <div className="text-center mb-12">
          <Typography variant="h2" weight="bold" className="text-gray-900 mb-4">
            {title}
          </Typography>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF7F] to-[#00E070] mx-auto rounded-full"></div>
        </div>
      )}

      {products.length > 0 ? (
        <>
          <div className={`grid ${gridClasses[columns]} gap-6 mb-8`}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
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
            ))}
          </div>

          {showMore && onShowMore && (
            <div className="text-center">
              <button
                onClick={onShowMore}
                className="bg-white hover:bg-gray-50 text-[#00FF7F] font-bold py-3 px-8 rounded-xl border-2 border-[#00FF7F] transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                مشاهده بیشتر
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <Typography variant="h4" color="secondary" className="mb-4">
            محصولی یافت نشد
          </Typography>
          <Typography variant="body" color="secondary">
            متاسفانه هیچ محصولی در این دسته‌بندی موجود نیست.
          </Typography>
        </div>
      )}
    </section>
  );
}