'use client';
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'discount';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  className?: string;
}

export default function Badge({
  children,
  variant = 'info',
  size = 'md',
  icon,
  className = ''
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-full whitespace-nowrap';
  
  const variantClasses = {
    success: 'bg-green-500 text-white shadow-md',
    warning: 'bg-yellow-500 text-gray-900 shadow-md',
    error: 'bg-red-500 text-white shadow-md',
    info: 'bg-blue-500 text-white shadow-md',
    discount: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {icon && (
        <i className={`${icon} w-3 h-3 flex items-center justify-center ml-1`}></i>
      )}
      {children}
    </span>
  );
}