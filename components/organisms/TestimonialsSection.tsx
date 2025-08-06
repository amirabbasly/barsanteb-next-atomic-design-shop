'use client';
import React from 'react';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface TestimonialsSectionProps {
  title: string;
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialsSection({
  title,
  testimonials,
  className = ''
}: TestimonialsSectionProps) {
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
    <section className={`py-16 bg-gradient-to-br from-gray-50 to-white ${className}`} dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography variant="h2" weight="bold" className="text-gray-900 mb-4">
            {title}
          </Typography>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF7F] to-[#00E070] mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-end mb-4">
                <div className="bg-[#00FF7F]/10 rounded-full p-2">
                  <Icon name="double-quotes-r" size="lg" color="primary" />
                </div>
              </div>

              {/* Content */}
              <Typography variant="body" className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                {testimonial.content}
              </Typography>

              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 space-x-reverse">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#00FF7F]/20"
                />
                <div className="flex-1">
                  <Typography variant="h6" weight="bold" className="text-gray-900">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body" color="secondary">
                    {testimonial.role}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}