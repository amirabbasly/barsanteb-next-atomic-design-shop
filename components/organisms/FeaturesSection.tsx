'use client';
import React from 'react';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
}

export default function FeaturesSection({
  title,
  subtitle,
  features,
  className = ''
}: FeaturesSectionProps) {
  return (
    <section className={`py-16 ${className}`} dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography variant="h2" weight="bold" className="text-gray-900 mb-4">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body" color="secondary" className="max-w-2xl mx-auto">
              {subtitle}
            </Typography>
          )}
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF7F] to-[#00E070] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group text-center space-y-4 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#00FF7F] to-[#00E070] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Icon name={feature.icon} size="xl" className="text-gray-900" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Typography variant="h5" weight="bold" className="text-gray-900 group-hover:text-[#00FF7F] transition-colors duration-200">
                  {feature.title}
                </Typography>
                <Typography variant="body" color="secondary" className="leading-relaxed">
                  {feature.description}
                </Typography>
              </div>

              {/* Decorative Number */}
              <div className="absolute top-2 left-2 w-8 h-8 bg-[#00FF7F]/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Typography variant="caption" weight="bold" className="text-[#00FF7F]">
                  {index + 1}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}