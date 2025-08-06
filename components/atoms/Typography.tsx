'use client';
import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'inherit';
  align?: 'left' | 'center' | 'right' | 'justify';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Typography({
  children,
  variant = 'body',
  color = 'inherit',
  align = 'right',
  weight = 'normal',
  className = '',
  as
}: TypographyProps) {
  const variantClasses = {
    h1: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
    h2: 'text-2xl md:text-3xl lg:text-4xl font-bold leading-tight',
    h3: 'text-xl md:text-2xl lg:text-3xl font-semibold leading-tight',
    h4: 'text-lg md:text-xl lg:text-2xl font-semibold leading-snug',
    h5: 'text-base md:text-lg lg:text-xl font-medium leading-snug',
    h6: 'text-sm md:text-base lg:text-lg font-medium leading-snug',
    body: 'text-sm md:text-base leading-relaxed',
    caption: 'text-xs md:text-sm leading-normal',
    overline: 'text-xs uppercase tracking-wider leading-normal'
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
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };
  
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  };
  
  const Component = as || (variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p');
  
  return (
    <Component className={`${variantClasses[variant]} ${colorClasses[color]} ${alignClasses[align]} ${weightClasses[weight]} ${className}`}>
      {children}
    </Component>
  );
}