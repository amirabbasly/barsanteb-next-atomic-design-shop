'use client';
import React, { useState } from 'react';
import SiteHeader from '../organisms/SiteHeader';
import Breadcrumb from '../molecules/Breadcrumb';
import ImageGallery from '../molecules/ImageGallery';
import PricingBlock from '../molecules/PricingBlock';
import QuantitySelector from '../molecules/QuantitySelector';
import ProductCarousel from '../organisms/ProductCarousel';
import SiteFooter from '../organisms/SiteFooter';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ProductData {
  id: number;
  title: string;
  shortDescription: string;
  images: string[];
  originalPrice: number;
  discountedPrice: number;
  discountPercentage?: number;
  features: string[];
  inStock: boolean;
  stockCount?: number;
  specifications: Record<string, string>;
  description: string;
  reviews: Array<{
    id: number;
    author: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}

interface ProductDetailTemplateProps {
  product: ProductData;
  breadcrumbItems: BreadcrumbItem[];
  relatedProducts: Array<{
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
  cartItemCount?: number;
  isLoggedIn?: boolean;
  userName?: string;
  onSearch?: (query: string) => void;
  onAddToCart?: (productId: number, quantity: number) => void;
  onBuyNow?: (productId: number, quantity: number) => void;
}

export default function ProductDetailTemplate({
  product,
  breadcrumbItems,
  relatedProducts,
  cartItemCount,
  isLoggedIn,
  userName,
  onSearch,
  onAddToCart,
  onBuyNow
}: ProductDetailTemplateProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specifications' | 'description' | 'reviews'>('specifications');

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

  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader
        cartItemCount={cartItemCount}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onSearch={onSearch}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <main className="max-w-7xl mx-auto px-4 pb-12" dir="rtl">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <ImageGallery images={product.images} productName={product.title} />
          </div>

          {/* Product Info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Title and Description */}
            <div className="space-y-3">
              <Typography variant="h1" weight="bold" className="text-gray-900 leading-tight">
                {product.title}
              </Typography>
              <Typography variant="body" className="text-gray-700 leading-relaxed">
                {product.shortDescription}
              </Typography>
            </div>

            {/* Pricing */}
            <PricingBlock
              originalPrice={product.originalPrice}
              discountedPrice={product.discountedPrice}
              discountPercentage={product.discountPercentage}
              size="lg"
            />

            {/* Stock Status */}
            <div className="flex items-center space-x-3 space-x-reverse bg-gray-50 p-3 rounded-lg">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'} shadow-sm`}></div>
              <Typography variant="body" weight="semibold" className={product.inStock ? 'text-green-700' : 'text-red-700'}>
                {product.inStock ? 
                  (product.stockCount ? `موجود در انبار (${product.stockCount} عدد)` : 'موجود در انبار') : 
                  'ناموجود'
                }
              </Typography>
            </div>

            {/* Product Features */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
              <Typography variant="h4" weight="bold" className="text-gray-900 mb-4">
                ویژگی‌های محصول
              </Typography>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3 space-x-reverse text-sm sm:text-base text-gray-800">
                    <Icon name="check-line" size="md" color="primary" className="mt-0.5 bg-[#00FF7F]/10 rounded-full p-1" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            {product.inStock && (
              <div className="space-y-4 sm:space-y-6">
                {/* Quantity Selector */}
                <QuantitySelector
                  quantity={quantity}
                  onChange={setQuantity}
                  min={1}
                  max={product.stockCount || 10}
                  size="lg"
                />

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    icon="ri-shopping-cart-line"
                    iconPosition="right"
                    fullWidth
                    onClick={() => onAddToCart?.(product.id, quantity)}
                  >
                    افزودن به سبد خرید
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    icon="ri-flashlight-line"
                    iconPosition="right"
                    fullWidth
                    onClick={() => onBuyNow?.(product.id, quantity)}
                  >
                    خرید فوری
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200 bg-gray-50">
              {[
                { key: 'specifications', label: 'مشخصات', icon: 'list-check' },
                { key: 'description', label: 'توضیحات', icon: 'file-text-line' },
                { key: 'reviews', label: `نظرات (${product.reviews.length})`, icon: 'star-line' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 space-x-reverse px-6 py-4 text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-white text-[#00FF7F] border-b-2 border-[#00FF7F]'
                      : 'text-gray-600 hover:text-[#00FF7F] hover:bg-white/50'
                  }`}
                >
                  <Icon name={tab.icon} size="sm" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 min-h-[300px]">
              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <Typography variant="body" weight="medium" className="text-gray-900">
                        {key}
                      </Typography>
                      <Typography variant="body" className="text-gray-600">
                        {value}
                      </Typography>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'description' && (
                <div className="prose prose-gray max-w-none">
                  <Typography variant="body" className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {product.description}
                  </Typography>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  {/* Reviews Summary */}
                  <div className="flex items-center space-x-6 space-x-reverse p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <Typography variant="h2" weight="bold" className="text-[#00FF7F]">
                        {averageRating.toFixed(1)}
                      </Typography>
                      <div className="flex items-center justify-center mt-1">
                        {renderStars(Math.round(averageRating))}
                      </div>
                      <Typography variant="caption" color="secondary">
                        از {product.reviews.length} نظر
                      </Typography>
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <Typography variant="h6" weight="medium" className="text-gray-900">
                              {review.author}
                            </Typography>
                            <Typography variant="caption" color="secondary">
                              {review.date}
                            </Typography>
                          </div>
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <Typography variant="body" className="text-gray-700 leading-relaxed">
                          {review.comment}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <ProductCarousel
          title="محصولات مشابه"
          subtitle="محصولات مرتبط که ممکن است به شما بپسندید"
          products={relatedProducts}
        />
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}