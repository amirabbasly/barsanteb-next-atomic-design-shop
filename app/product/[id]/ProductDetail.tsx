'use client';
import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  // Mock product data - in real application, this would be fetched based on productId
  const product = {
    id: parseInt(productId),
    title: 'عصاره زعفران طبیعی برسان طب - 30 کپسول',
    shortDescription: 'عصاره خالص زعفران با کیفیت بالا، غنی از کروسین و سافرانال، مناسب برای تقویت سیستم عصبی و بهبود خلق و خو',
    images: [
      'https://readdy.ai/api/search-image?query=Premium%20saffron%20extract%20capsules%20in%20elegant%20glass%20bottle%20with%20golden%20saffron%20threads%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20natural%20herbal%20medicine%20packaging%2C%20bright%20lighting%2C%20minimalist%20design&width=600&height=600&seq=main1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Saffron%20extract%20capsules%20close-up%20view%20showing%20golden%20capsules%20in%20clear%20glass%20bottle%2C%20white%20clean%20background%2C%20pharmaceutical%20grade%20packaging%2C%20herbal%20supplement%20product%20photography&width=600&height=600&seq=thumb1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Saffron%20extract%20bottle%20label%20and%20ingredients%20list%2C%20clean%20white%20background%2C%20professional%20herbal%20medicine%20packaging%2C%20Persian%20text%20elements%2C%20premium%20quality%20design&width=600&height=600&seq=thumb2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Natural%20saffron%20threads%20and%20extract%20capsules%20arrangement%2C%20white%20background%2C%20herbal%20medicine%20ingredients%20display%2C%20premium%20quality%20saffron%20products%20photography&width=600&height=600&seq=thumb3&orientation=squarish'
    ],
    originalPrice: 450000,
    discountedPrice: 320000,
    discountPercentage: 29,
    features: [
      'حاوی عصاره خالص زعفران کاشان',
      'غنی از کروسین و سافرانال طبیعی',
      'مناسب برای تقویت حافظه و تمرکز',
      'کمک به بهبود خلق و خو',
      'فاقد مواد نگهدارنده مضر',
      'استاندارد GMP و ISO',
      'مناسب برای استفاده روزانه',
      'بسته بندی دارویی استاندارد'
    ],
    inStock: true,
    stockCount: 15,
    specifications: {
      'برند': 'برسان طب',
      'تعداد کپسول': '30 عدد',
      'وزن هر کپسول': '500 میلی گرم',
      'میزان عصاره زعفران': '50 میلی گرم در هر کپسول',
      'کشور تولید': 'ایران',
      'تاریخ انقضا': '2 سال از تاریخ تولید',
      'نحوه نگهداری': 'در مکان خشک و خنک',
      'مجوز': 'وزارت بهداشت ایران'
    },
    description: `عصاره زعفران برسان طب محصولی طبیعی و خالص است که از بهترین زعفران‌های کاشان تهیه شده است. این محصول با استفاده از فناوری‌های نوین استخراج، حداکثر خواص مفید زعفران را حفظ کرده و در قالب کپسول‌های آسان مصرف ارائه می‌دهد.

زعفران به عنوان "طلای سرخ" شناخته می‌شود و دارای خواص فراوانی است:
• تقویت سیستم عصبی و بهبود حافظه
• کمک به کاهش استرس و اضطراب
• بهبود کیفیت خواب
• تقویت سیستم ایمنی بدن
• خواص آنتی اکسیدانی قوی

این محصول تحت نظارت کارشناسان مجرب و با رعایت استانداردهای بهداشتی تولید شده و دارای مجوزهای لازم از وزارت بهداشت می‌باشد.`,
    reviews: [
      {
        id: 1,
        author: 'محمد احمدی',
        rating: 5,
        comment: 'محصول بسیار عالی و کیفیت بالا. بعد از مصرف یک ماهه احساس بهتری دارم و خواب بهتری دارم.',
        date: '۲ هفته پیش'
      },
      {
        id: 2,
        author: 'فاطمه رضایی',
        rating: 4,
        comment: 'کیفیت خوب و بسته بندی مرتب. قیمت کمی بالا ولی ارزشش رو داره.',
        date: '۱ ماه پیش'
      },
      {
        id: 3,
        author: 'علی موسوی',
        rating: 5,
        comment: 'پیشنهاد می‌کنم. واقعا در تقویت حافظه و کاهش استرس مؤثر بوده.',
        date: '۳ هفته پیش'
      }
    ]
  };

  const breadcrumbItems = [
    { label: 'خانه', href: '/' },
    { label: 'محصولات گیاهی', href: '/products' },
    { label: 'عصاره‌ها و کپسول‌ها', href: '/products/extracts' },
    { label: product.title }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'عصاره گل گاوزبان برسان طب - 60 کپسول',
      image: 'https://readdy.ai/api/search-image?query=Borage%20flower%20extract%20capsules%20in%20professional%20glass%20bottle%2C%20natural%20herbal%20medicine%20packaging%2C%20white%20clean%20background%2C%20premium%20quality%20pharmaceutical%20design%2C%20bright%20lighting&width=400&height=400&seq=related1&orientation=squarish',
      price: 280000,
      originalPrice: 350000,
      discountPercentage: 20,
      rating: 4,
      reviewCount: 23,
      inStock: true,
      isBestSeller: true
    },
    {
      id: 3,
      name: 'کپسول زردچوبه طبیعی - 90 عدد',
      image: 'https://readdy.ai/api/search-image?query=Turmeric%20curcumin%20capsules%20in%20amber%20glass%20bottle%2C%20natural%20herbal%20supplement%20packaging%2C%20white%20background%2C%20professional%20product%20photography%2C%20golden%20yellow%20capsules%20visible&width=400&height=400&seq=related2&orientation=squarish',
      price: 195000,
      rating: 5,
      reviewCount: 41,
      inStock: true,
      isNew: true
    },
    {
      id: 4,
      name: 'عصاره رویال ژله برسان طب - 30 کپسول',
      image: 'https://readdy.ai/api/search-image?query=Royal%20jelly%20extract%20capsules%20premium%20packaging%2C%20natural%20bee%20product%20supplement%2C%20clean%20white%20background%2C%20professional%20pharmaceutical%20photography%2C%20elegant%20bottle%20design&width=400&height=400&seq=related3&orientation=squarish',
      price: 520000,
      originalPrice: 650000,
      discountPercentage: 20,
      rating: 4,
      reviewCount: 18,
      inStock: true
    },
    {
      id: 5,
      name: 'کپسول اسپیرولینا طبیعی - 120 عدد',
      image: 'https://readdy.ai/api/search-image?query=Spirulina%20capsules%20in%20clear%20glass%20bottle%2C%20green%20superfood%20supplement%2C%20natural%20algae%20product%2C%20white%20clean%20background%2C%20professional%20herbal%20medicine%20photography&width=400&height=400&seq=related4&orientation=squarish',
      price: 385000,
      rating: 4,
      reviewCount: 67,
      inStock: true,
      isBestSeller: true
    },
    {
      id: 6,
      name: 'عصاره جینسینگ سیبری - 45 کپسول',
      image: 'https://readdy.ai/api/search-image?query=Ginseng%20extract%20capsules%20premium%20bottle%2C%20natural%20herbal%20energy%20supplement%2C%20professional%20pharmaceutical%20packaging%2C%20white%20background%2C%20clean%20product%20photography&width=400&height=400&seq=related5&orientation=squarish',
      price: 420000,
      rating: 5,
      reviewCount: 29,
      inStock: true
    }
  ];

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Handle search functionality
  };

  const handleAddToCart = (productId: number, quantity: number) => {
    console.log('Adding to cart:', productId, quantity);
    // Handle add to cart functionality
  };

  const handleBuyNow = (productId: number, quantity: number) => {
    console.log('Buy now:', productId, quantity);
    // Handle buy now functionality
  };

  return (
    <ProductDetailTemplate
      product={product}
      breadcrumbItems={breadcrumbItems}
      relatedProducts={relatedProducts}
      cartItemCount={3}
      isLoggedIn={false}
      onSearch={handleSearch}
      onAddToCart={handleAddToCart}
      onBuyNow={handleBuyNow}
    />
  );
}