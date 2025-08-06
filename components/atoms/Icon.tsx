'use client';
import React from 'react';

interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'inherit';
  className?: string;
  onClick?: () => void;
}

export default function Icon({
  name,
  size = 'md',
  color = 'inherit',
  className = '',
  onClick
}: IconProps) {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-10 h-10'
  };
  
  const colorClasses = {
    primary: 'text-[#00FF7F]',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    error: 'text-red-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600',
    inherit: 'text-inherit'
  };
  
  const clickableClasses = onClick ? 'cursor-pointer hover:scale-110 transition-transform duration-200' : '';
  
  return (
    <i 
      className={`ri-${name} ${sizeClasses[size]} ${colorClasses[color]} ${clickableClasses} flex items-center justify-center ${className}`}
      onClick={onClick}
    />
  );
}