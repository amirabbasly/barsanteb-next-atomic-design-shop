'use client';
import React from 'react';
import Typography from '../atoms/Typography';
import Badge from '../atoms/Badge';

interface PricingBlockProps {
  originalPrice: number;
  discountedPrice: number;
  discountPercentage?: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
  showSavings?: boolean;
  className?: string;
}

export default function PricingBlock({
  originalPrice,
  discountedPrice,
  discountPercentage,
  currency = 'تومان',
  size = 'md',
  showSavings = true,
  className = ''
}: PricingBlockProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' ' + currency;
  };

  const savings = originalPrice - discountedPrice;
  const hasDiscount = discountPercentage && discountPercentage > 0;

  const containerClasses = {
    sm: 'p-3',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8'
  };

  const priceClasses = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl lg:text-3xl',
    lg: 'text-2xl sm:text-3xl lg:text-4xl'
  };

  return (
    <div className={`bg-gradient-to-r from-[#00FF7F] to-[#00E070] ${containerClasses[size]} rounded-xl shadow-lg ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3 space-x-reverse">
          <Typography 
            variant="h3" 
            weight="bold" 
            className={`text-gray-900 ${priceClasses[size]}`}
          >
            {formatPrice(discountedPrice)}
          </Typography>
          {hasDiscount && (
            <Badge variant="discount" size={size === 'lg' ? 'lg' : 'md'}>
              {discountPercentage}% تخفیف
            </Badge>
          )}
        </div>
      </div>
      
      {hasDiscount && (
        <div className="space-y-1">
          <Typography variant="body" className="text-gray-800/80 line-through">
            {formatPrice(originalPrice)}
          </Typography>
          {showSavings && (
            <Typography variant="caption" className="text-gray-800/70">
              شما {formatPrice(savings)} صرفه‌جویی می‌کنید
            </Typography>
          )}
        </div>
      )}
    </div>
  );
}