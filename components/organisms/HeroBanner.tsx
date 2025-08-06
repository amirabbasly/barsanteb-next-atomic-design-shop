
'use client';
import React from 'react';
import Link from 'next/link';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  className?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
  secondaryCtaText,
  secondaryCtaLink,
  className = ''
}: HeroBannerProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-white" dir="rtl">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <Typography variant="h6" className="text-[#00FF7F] mb-4 font-medium">
            {subtitle}
          </Typography>

          {/* Main Title */}
          <Typography variant="h1" weight="bold" className="text-white mb-6 leading-tight">
            {title}
          </Typography>

          {/* Description */}
          <Typography variant="body" className="text-gray-200 mb-8 text-lg leading-relaxed max-w-2xl">
            {description}
          </Typography>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
            <Link href={ctaLink}>
              <Button
                variant="primary"
                size="lg"
                icon="ri-arrow-left-line"
                iconPosition="left"
                className="text-gray-900 font-bold"
              >
                {ctaText}
              </Button>
            </Link>

            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink}>
                <Button
                  variant="outline"
                  size="lg"
                  icon="ri-play-circle-line"
                  iconPosition="right"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <Icon name="arrow-down-line" size="lg" className="text-white" />
        </div>
      </div>
    </section>
  );
}
