'use client';
import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  variant = 'outlined',
  className = '',
  ...props
}, ref) => {
  const baseClasses = 'transition-all duration-200 focus:outline-none';
  
  const variantClasses = {
    outlined: `border-2 ${error ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 bg-white hover:border-[#00FF7F] focus:border-[#00FF7F] focus:ring-4 focus:ring-[#00FF7F]/20`,
    filled: `${error ? 'bg-red-50' : 'bg-gray-50'} border-0 rounded-xl px-4 py-3 hover:bg-gray-100 focus:bg-white focus:ring-4 focus:ring-[#00FF7F]/20`,
    standard: `border-0 border-b-2 ${error ? 'border-red-500' : 'border-gray-300'} rounded-none px-0 py-2 bg-transparent hover:border-[#00FF7F] focus:border-[#00FF7F]`
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const paddingClass = icon ? (iconPosition === 'right' ? 'pr-12' : 'pl-12') : '';
  
  return (
    <div className={`${fullWidth ? 'w-full' : ''} space-y-2`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 text-right">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${paddingClass} ${className} text-right`}
          dir="rtl"
          {...props}
        />
        {icon && (
          <div className={`absolute top-1/2 transform -translate-y-1/2 ${iconPosition === 'right' ? 'right-3' : 'left-3'}`}>
            <i className={`${icon} text-gray-500 w-5 h-5 flex items-center justify-center`}></i>
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm text-right">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;