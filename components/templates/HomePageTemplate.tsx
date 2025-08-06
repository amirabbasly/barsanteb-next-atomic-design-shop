'use client';
import React from 'react';
import SiteHeader from '../organisms/SiteHeader';
import HeroBanner from '../organisms/HeroBanner';
import FeaturesSection from '../organisms/FeaturesSection';
import CategoryShowcase from '../organisms/CategoryShowcase';
import ProductCarousel from '../organisms/ProductCarousel';
import TestimonialsSection from '../organisms/TestimonialsSection';
import SiteFooter from '../organisms/SiteFooter';

interface HomePageTemplateProps {
  heroData: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
  };
  features: Array<{
    id: number;
    title: string;
    description: string;
    icon: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    description: string;
    image: string;
    productCount: number;
    href: string;
    icon: string;
  }>;
  featuredProducts: Array<{
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    discountPercentage?: number;
    rating?: number;
    reviewCount?: number;
    inStock?: boolean;
    isNew?: boolean;
    isBestSeller?: boolean;
  }>;
  bestSellerProducts: Array<{
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    discountPercentage?: number;
    rating?: number;
    reviewCount?: number;
    inStock?: boolean;
    isNew?: boolean;
    isBestSeller?: boolean;
  }>;
  testimonials: Array<{
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
  }>;
  cartItemCount?: number;
  isLoggedIn?: boolean;
  userName?: string;
  onSearch?: (query: string) => void;
}

export default function HomePageTemplate({
  heroData,
  features,
  categories,
  featuredProducts,
  bestSellerProducts,
  testimonials,
  cartItemCount,
  isLoggedIn,
  userName,
  onSearch
}: HomePageTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader
        cartItemCount={cartItemCount}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onSearch={onSearch}
      />

      {/* Hero Banner */}
      <HeroBanner
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description}
        ctaText={heroData.ctaText}
        ctaLink={heroData.ctaLink}
        backgroundImage={heroData.backgroundImage}
        secondaryCtaText={heroData.secondaryCtaText}
        secondaryCtaLink={heroData.secondaryCtaLink}
      />

      {/* Features Section */}
      <FeaturesSection
        title="چرا برسان طب؟"
        subtitle="ما متعهد به ارائه بهترین محصولات طبیعی و گیاهی با کیفیت بالا هستیم"
        features={features}
        className="bg-white"
      />

      {/* Categories Showcase */}
      <CategoryShowcase
        title="دسته‌بندی محصولات"
        categories={categories}
      />

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ProductCarousel
          title="محصولات ویژه"
          subtitle="برگزیده‌های این هفته با تخفیف‌های استثنایی"
          products={featuredProducts}
          className="bg-white"
        />
      </div>

      {/* Best Sellers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ProductCarousel
          title="پرفروش‌ترین محصولات"
          subtitle="محبوب‌ترین محصولات میان مشتریان برسان طب"
          products={bestSellerProducts}
          className="bg-gray-50"
        />
      </div>

      {/* Testimonials */}
      <TestimonialsSection
        title="نظرات مشتریان"
        testimonials={testimonials}
      />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}