'use client';
import React from 'react';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export default function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 999,
  size = 'md',
  disabled = false,
  className = ''
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    const newQuantity = Math.max(min, quantity - 1);
    onChange(newQuantity);
  };

  const handleIncrease = () => {
    const newQuantity = Math.min(max, quantity + 1);
    onChange(newQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || min;
    const newQuantity = Math.max(min, Math.min(max, value));
    onChange(newQuantity);
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const buttonSizes = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const
  };

  const inputClasses = {
    sm: 'w-12 h-8 text-sm',
    md: 'w-16 h-10 text-base',
    lg: 'w-20 h-12 text-lg'
  };

  return (
    <div className={`flex items-center space-x-2 space-x-reverse ${className}`}>
      <Typography variant="body" weight="semibold" className="text-gray-800">
        تعداد:
      </Typography>
      
      <div className="flex items-center border-2 border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
        <button
          onClick={handleDecrease}
          disabled={disabled || quantity <= min}
          className="p-2 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i className="ri-subtract-line w-4 h-4 flex items-center justify-center text-gray-600"></i>
        </button>
        
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min={min}
          max={max}
          disabled={disabled}
          className={`${inputClasses[size]} text-center border-0 focus:outline-none focus:ring-0 font-semibold text-gray-900 bg-transparent`}
        />
        
        <button
          onClick={handleIncrease}
          disabled={disabled || quantity >= max}
          className="p-2 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i className="ri-add-line w-4 h-4 flex items-center justify-center text-gray-600"></i>
        </button>
      </div>
    </div>
  );
}