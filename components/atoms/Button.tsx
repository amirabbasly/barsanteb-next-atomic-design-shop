'use client';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#00FF7F] to-[#00E070] hover:from-[#00E070] hover:to-[#00CC66] text-gray-900 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-[#00FF7F]/50',
    secondary: 'bg-white hover:bg-gray-50 text-[#00FF7F] border-2 border-[#00FF7F] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-[#00FF7F]/50',
    outline: 'bg-transparent hover:bg-[#00FF7F]/10 text-[#00FF7F] border-2 border-[#00FF7F] focus:ring-[#00FF7F]/50',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-300'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {loading ? (
        <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
      ) : (
        <>
          {icon && iconPosition === 'right' && (
            <i className={`${icon} w-5 h-5 flex items-center justify-center ml-2`}></i>
          )}
          {children}
          {icon && iconPosition === 'left' && (
            <i className={`${icon} w-5 h-5 flex items-center justify-center mr-2`}></i>
          )}
        </>
      )}
    </button>
  );
}