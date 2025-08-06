'use client';
import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  variant?: 'simple' | 'advanced';
  className?: string;
}

export default function SearchBar({
  placeholder = "جستجو در محصولات گیاهی...",
  onSearch,
  variant = 'simple',
  className = ''
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = () => {
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (variant === 'advanced') {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="flex-1">
            <Input
              type="text"
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              icon="ri-search-line"
              fullWidth
              variant="outlined"
            />
          </div>
          <Button
            variant="primary"
            size="md"
            icon="ri-search-line"
            onClick={handleSearch}
          >
            جستجو
          </Button>
          <Button
            variant="ghost"
            size="md"
            icon="ri-filter-line"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            فیلتر
          </Button>
        </div>
        
        {isExpanded && (
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="دسته‌بندی"
                placeholder="انتخاب دسته"
                icon="ri-arrow-down-s-line"
              />
              <Input
                label="محدوده قیمت"
                placeholder="از - تا"
                icon="ri-money-dollar-circle-line"
              />
              <Input
                label="برند"
                placeholder="انتخاب برند"
                icon="ri-building-line"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative flex-1 max-w-2xl ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        icon="ri-search-line"
        fullWidth
        variant="filled"
        className="bg-gray-50 hover:bg-white focus:bg-white border-2 border-transparent focus:border-[#00FF7F] rounded-full"
      />
    </div>
  );
}