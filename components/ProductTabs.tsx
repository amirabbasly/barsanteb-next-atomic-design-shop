'use client';
import { useState } from 'react';

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductTabsProps {
  specifications: { [key: string]: string };
  description: string;
  reviews: Review[];
}

export default function ProductTabs({ specifications, description, reviews }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('specs');

  const tabs = [
    { id: 'specs', label: 'مشخصات', icon: 'ri-file-list-3-line' },
    { id: 'description', label: 'توضیحات', icon: 'ri-file-text-line' },
    { id: 'reviews', label: `نظرات (${reviews.length})`, icon: 'ri-star-line' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`${index < rating ? 'ri-star-fill text-yellow-500' : 'ri-star-line text-gray-300'} w-4 h-4 flex items-center justify-center`}
      />
    ));
  };

  const averageRating = reviews.length > 0 ? 
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg" dir="rtl">
      {/* Tab Headers */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 space-x-reverse px-4 sm:px-6 py-4 font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap cursor-pointer min-w-max ${
                activeTab === tab.id
                  ? 'text-[#00CC66] border-b-3 border-[#00CC66] bg-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <i className={`${tab.icon} w-5 h-5 flex items-center justify-center`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        {activeTab === 'specs' && (
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">مشخصات فنی محصول</h3>
            <div className="grid gap-4">
              {Object.entries(specifications).map(([key, value], index) => (
                <div key={key} className={`flex justify-between items-center py-3 sm:py-4 px-4 rounded-lg ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border border-gray-100`}>
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">{key}</span>
                  <span className="text-gray-900 font-medium text-sm sm:text-base text-left">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'description' && (
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">توضیحات کامل محصول</h3>
            <div className="prose prose-sm sm:prose-base max-w-none">
              <div className="text-gray-800 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {description}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">نظرات کاربران</h3>
              {reviews.length > 0 && (
                <div className="flex items-center space-x-3 space-x-reverse bg-gray-50 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1 space-x-reverse">
                    {renderStars(Math.round(averageRating))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {averageRating.toFixed(1)} از {reviews.length} نظر
                  </span>
                </div>
              )}
            </div>

            {reviews.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <i className="ri-message-3-line w-12 h-12 flex items-center justify-center text-gray-400 mx-auto mb-4"></i>
                <p className="text-gray-500 text-base">هنوز نظری برای این محصول ثبت نشده است</p>
              </div>
            ) : (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#00CC66] to-[#00B359] rounded-full flex items-center justify-center shadow-md">
                          <span className="text-white text-base font-bold">
                            {review.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm sm:text-base">{review.author}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex space-x-1 space-x-reverse">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}