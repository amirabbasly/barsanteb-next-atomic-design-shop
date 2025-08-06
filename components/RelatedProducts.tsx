'use client';
import { useState } from 'react';
import Link from 'next/link';

interface RelatedProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`${index < rating ? 'ri-star-fill text-yellow-500' : 'ri-star-line text-gray-300'} w-3 h-3 flex items-center justify-center`}
      />
    ));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg" dir="rtl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">محصولات مرتبط</h3>
        <div className="flex space-x-2 space-x-reverse">
          <button className="p-2 sm:p-3 border-2 border-gray-200 rounded-full hover:bg-gray-50 hover:border-[#00CC66] transition-all duration-200 cursor-pointer">
            <i className="ri-arrow-right-s-line w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-gray-600"></i>
          </button>
          <button className="p-2 sm:p-3 border-2 border-gray-200 rounded-full hover:bg-gray-50 hover:border-[#00CC66] transition-all duration-200 cursor-pointer">
            <i className="ri-arrow-left-s-line w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-gray-600"></i>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 space-x-reverse pb-2">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 sm:w-72 bg-white border-2 border-gray-200 rounded-xl hover:shadow-xl hover:border-[#00CC66] transition-all duration-300 group cursor-pointer">
              <Link href={`/product/${product.id}`}>
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h4 className="font-semibold text-gray-900 mb-3 line-clamp-2 text-sm sm:text-base leading-relaxed">
                    {product.name}
                  </h4>
                  
                  <div className="flex items-center space-x-1 space-x-reverse mb-3">
                    <div className="flex space-x-1 space-x-reverse">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      ({product.reviewCount})
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="font-bold text-gray-900 text-base sm:text-lg">
                      {formatPrice(product.price)}
                    </div>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="text-gray-500 line-through text-sm">
                          {formatPrice(product.originalPrice)}
                        </div>
                        <span className="bg-red-500 text-white px-2 py-0.5 text-xs rounded-full font-bold">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </span>
                      </div>
                    )}
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#00CC66] to-[#00B359] hover:from-[#00B359] hover:to-[#00A050] text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300 text-sm whitespace-nowrap cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    مشاهده محصول
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}