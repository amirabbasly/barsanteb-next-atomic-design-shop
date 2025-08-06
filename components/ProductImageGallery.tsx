'use client';
import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative">
        <div 
          className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg cursor-zoom-in"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={images[selectedImage]}
            alt={productName}
            className={`w-full h-full object-cover object-center transition-all duration-500 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'hover:scale-110'
            }`}
          />
        </div>
        {isZoomed && (
          <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            کلیک برای بستن
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
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
                ? 'border-[#00CC66] shadow-lg scale-105' 
                : 'border-gray-300 hover:border-[#00CC66] hover:shadow-md'
            }`}
          >
            <img
              src={image}
              alt={`${productName} ${index + 1}`}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-200"
            />
          </button>
        ))}
      </div>
    </div>
  );
}