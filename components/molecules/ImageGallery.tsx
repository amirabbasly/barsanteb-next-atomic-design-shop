'use client';
import React, { useState } from 'react';
import Icon from '../atoms/Icon';

interface ImageGalleryProps {
  images: string[];
  productName: string;
  className?: string;
}

export default function ImageGallery({ images, productName, className = '' }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main Image */}
      <div className="relative group">
        <div 
          className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg cursor-zoom-in"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={images[selectedImage]}
            alt={`${productName} - تصویر ${selectedImage + 1}`}
            className={`w-full h-full object-cover object-center transition-all duration-500 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'hover:scale-110'
            }`}
          />
        </div>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <Icon name="arrow-right-s-line" size="md" />
            </button>
            <button
              onClick={nextImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <Icon name="arrow-left-s-line" size="md" />
            </button>
          </>
        )}
        
        {/* Zoom Indicator */}
        {isZoomed && (
          <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            کلیک برای بستن
          </div>
        )}
        
        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {selectedImage + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex space-x-3 space-x-reverse overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedImage(index);
                setIsZoomed(false);
              }}
              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                selectedImage === index 
                  ? 'border-[#00FF7F] shadow-lg scale-105' 
                  : 'border-gray-300 hover:border-[#00FF7F] hover:shadow-md'
              }`}
            >
              <img
                src={image}
                alt={`${productName} - کوچک ${index + 1}`}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-200"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}