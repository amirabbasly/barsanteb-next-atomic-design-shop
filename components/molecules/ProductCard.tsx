'use client';
import React from 'react';
import Link from 'next/link';
import Typography from '../atoms/Typography';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';

interface ProductCardProps {
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
  className?: string;
}

export default function ProductCard({
  id,
  name,
  image,
  price,
  originalPrice,
  discountPercentage,
  rating = 0,
  reviewCount = 0,
  inStock = true,
  isNew = false,
  isBestSeller = false,
  className = ''
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name={index < rating ? "star-fill" : "star-line"}
        size="sm"
        color={index < rating ? "warning" : "secondary"}
      />
    ));
  };

  return (
    <Link href={`/product/${id}`}>
      <div className={`group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#00FF7F]/30 cursor-pointer transform hover:-translate-y-1 ${className}`}>
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-50">
          {/* Badges */}
          <div className="absolute top-3 right-3 z-10 flex flex-col space-y-2">
            {isNew && <Badge variant="info" size="sm">جدید</Badge>}
            {isBestSeller && <Badge variant="success" size="sm">پرفروش</Badge>}
            {discountPercentage && discountPercentage > 0 && (
              <Badge variant="discount" size="sm">{discountPercentage}%</Badge>
            )}
          </div>
          
          {/* Stock Status */}
          {!inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
              <Typography variant="h6" className="text-white bg-red-600 px-4 py-2 rounded-lg">
                ناموجود
              </Typography>
            </div>
          )}
          
          <img
            src={image}
            alt={name}
            className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3" dir="rtl">
          {/* Product Name */}
          <Typography variant="h6" className="text-gray-900 line-clamp-2 group-hover:text-[#00FF7F] transition-colors duration-200">
            {name}
          </Typography>

          {/* Rating */}
          {rating > 0 && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 space-x-reverse">
                {renderStars(rating)}
              </div>
              {reviewCount > 0 && (
                <Typography variant="caption" color="secondary">
                  ({reviewCount} نظر)
                </Typography>
              )}
            </div>
          )}

          {/* Pricing */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Typography variant="h6" weight="bold" className="text-[#00FF7F]">
                {formatPrice(price)}
              </Typography>
              {originalPrice && originalPrice > price && (
                <Typography variant="body" color="secondary" className="line-through">
                  {formatPrice(originalPrice)}
                </Typography>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}