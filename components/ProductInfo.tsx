'use client';
import { useState } from 'react';

interface ProductInfoProps {
  title: string;
  shortDescription: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  features: string[];
  inStock: boolean;
  stockCount?: number;
}

export default function ProductInfo({
  title,
  shortDescription,
  originalPrice,
  discountedPrice,
  discountPercentage,
  features,
  inStock,
  stockCount
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  return (
    <div className="space-y-6 lg:space-y-8" dir="rtl">
      {/* Title and Description */}
      <div className="space-y-3">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{title}</h1>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{shortDescription}</p>
      </div>

      {/* Pricing */}
      <div className="bg-gradient-to-r from-[#00CC66] to-[#00B359] p-4 sm:p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3 space-x-reverse">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              {formatPrice(discountedPrice)}
            </span>
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white px-2 py-1 text-xs sm:text-sm rounded-full font-bold shadow-md">
                {discountPercentage}% تخفیف
              </span>
            )}
          </div>
        </div>
        {discountPercentage > 0 && (
          <div className="text-white/80 line-through text-sm sm:text-base">
            {formatPrice(originalPrice)}
          </div>
        )}
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-3 space-x-reverse bg-gray-50 p-3 rounded-lg">
        <div className={`w-3 h-3 rounded-full ${inStock ? 'bg-green-500' : 'bg-red-500'} shadow-sm`}></div>
        <span className={`text-sm sm:text-base font-semibold ${inStock ? 'text-green-700' : 'text-red-700'}`}>
          {inStock ? 
            (stockCount ? `موجود در انبار (${stockCount} عدد)` : 'موجود در انبار') : 
            'ناموجود'
          }
        </span>
      </div>

      {/* Product Features */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">ویژگی‌های محصول</h3>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3 space-x-reverse text-sm sm:text-base text-gray-800">
              <i className="ri-check-line text-[#00CC66] w-5 h-5 flex items-center justify-center mt-0.5 bg-[#00CC66]/10 rounded-full"></i>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quantity and Add to Cart */}
      {inStock && (
        <div className="space-y-4 sm:space-y-6">
          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <span className="text-sm sm:text-base font-semibold text-gray-800">تعداد:</span>
            <div className="flex items-center border-2 border-gray-200 rounded-xl bg-white shadow-sm">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 sm:p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer rounded-r-xl"
              >
                <i className="ri-subtract-line w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-gray-600"></i>
              </button>
              <span className="px-4 sm:px-6 py-2 sm:py-3 text-center min-w-[60px] font-semibold text-gray-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 sm:p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer rounded-l-xl"
              >
                <i className="ri-add-line w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-gray-600"></i>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <button className="bg-gradient-to-r from-[#00CC66] to-[#00B359] hover:from-[#00B359] hover:to-[#00A050] text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <i className="ri-shopping-cart-line ml-2 w-5 h-5 flex items-center justify-center inline-block"></i>
              افزودن به سبد خرید
            </button>
            <button className="bg-white hover:bg-gray-50 text-[#00CC66] font-bold py-3 sm:py-4 px-6 rounded-xl border-2 border-[#00CC66] transition-all duration-300 whitespace-nowrap cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <i className="ri-flashlight-line ml-2 w-5 h-5 flex items-center justify-center inline-block"></i>
              خرید فوری
            </button>
          </div>
        </div>
      )}
    </div>
  );
}