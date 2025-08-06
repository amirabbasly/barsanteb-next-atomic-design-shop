'use client';
import React from 'react';
import HomePageTemplate from '../components/templates/HomePageTemplate';

export default function Home() {
  // Hero section data
  const heroData = {
    title: 'سلامت طبیعی با برسان طب',
    subtitle: 'مرجع تخصصی محصولات گیاهی',
    description: 'بیش از 10 سال تجربه در ارائه بهترین محصولات طبیعی و گیاهی. با کیفیت‌ترین عصاره‌ها، چای‌های گیاهی و مکمل‌های طبیعی را از ما بخواهید. محصولات ما دارای تاییدیه وزارت بهداشت و استانداردهای بین‌المللی هستند.',
    ctaText: 'مشاهده محصولات',
    ctaLink: '/products',
    backgroundImage: 'https://readdy.ai/api/search-image?query=Beautiful%20Persian%20herbal%20garden%20with%20saffron%20flowers%2C%20medicinal%20plants%2C%20natural%20healing%20herbs%2C%20golden%20sunlight%20filtering%20through%20green%20leaves%2C%20peaceful%20organic%20atmosphere%2C%20traditional%20Persian%20medicine%20setting%2C%20high%20quality%20photography&width=1920&height=1080&seq=hero1&orientation=landscape',
    secondaryCtaText: 'درباره ما',
    secondaryCtaLink: '/about'
  };

  // Features data
  const features = [
    {
      id: 1,
      title: 'محصولات طبیعی',
      description: 'تمامی محصولات از مواد خام طبیعی و ارگانیک تهیه شده',
      icon: 'leaf-line'
    },
    {
      id: 2,
      title: 'تضمین کیفیت',
      description: 'دارای مجوزهای لازم و استانداردهای بین‌المللی کیفیت',
      icon: 'shield-check-line'
    },
    {
      id: 3,
      title: 'ارسال سریع',
      description: 'ارسال رایگان برای خریدهای بالای 500 هزار تومان',
      icon: 'truck-line'
    },
    {
      id: 4,
      title: 'پشتیبانی 24/7',
      description: 'مشاوره رایگان از کارشناسان مجرب در تمام ساعات',
      icon: 'customer-service-2-line'
    }
  ];

  // Categories data
  const categories = [
    {
      id: 1,
      name: 'عصاره‌ها و کپسول‌ها',
      description: 'عصاره‌های خالص گیاهان دارویی در قالب کپسول‌های آسان مصرف',
      image: 'https://readdy.ai/api/search-image?query=Premium%20herbal%20extract%20capsules%20in%20elegant%20glass%20bottles%2C%20natural%20medicine%20packaging%2C%20saffron%20and%20turmeric%20extracts%2C%20clean%20white%20background%2C%20professional%20pharmaceutical%20photography&width=400&height=300&seq=cat1&orientation=landscape',
      productCount: 45,
      href: '/products/extracts',
      icon: 'capsule-line'
    },
    {
      id: 2,
      name: 'چای‌های گیاهی',
      description: 'مجموعه‌ای از بهترین چای‌های گیاهی برای سلامت و آرامش',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Persian%20herbal%20teas%2C%20dried%20medicinal%20herbs%2C%20chamomile%20and%20mint%20leaves%2C%20wooden%20spoons%2C%20natural%20tea%20blends%2C%20warm%20cozy%20atmosphere&width=400&height=300&seq=cat2&orientation=landscape',
      productCount: 32,
      href: '/products/teas',
      icon: 'restaurant-line'
    },
    {
      id: 3,
      name: 'عسل و محصولات زنبور',
      description: 'عسل طبیعی، پروپولیس، رویال ژله و سایر محصولات زنبور عسل',
      image: 'https://readdy.ai/api/search-image?query=Pure%20natural%20honey%20jars%2C%20golden%20honey%20dripping%2C%20honeycomb%2C%20royal%20jelly%20products%2C%20bee%20products%2C%20organic%20honey%20packaging%2C%20warm%20golden%20lighting&width=400&height=300&seq=cat3&orientation=landscape',
      productCount: 28,
      href: '/products/honey',
      icon: 'drop-line'
    },
    {
      id: 4,
      name: 'روغن‌های طبیعی',
      description: 'روغن‌های گیاهی خالص برای مراقبت از پوست و مو',
      image: 'https://readdy.ai/api/search-image?query=Natural%20essential%20oils%20in%20dark%20glass%20bottles%2C%20organic%20plant%20oils%2C%20aromatherapy%20oils%2C%20lavender%20and%20rosemary%2C%20spa%20setting%2C%20natural%20skincare%20products&width=400&height=300&seq=cat4&orientation=landscape',
      productCount: 38,
      href: '/products/oils',
      icon: 'flask-line'
    }
  ];

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: 'عصاره زعفران طبیعی برسان طب - 30 کپسول',
      image: 'https://readdy.ai/api/search-image?query=Premium%20saffron%20extract%20capsules%20in%20elegant%20glass%20bottle%20with%20golden%20saffron%20threads%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20natural%20herbal%20medicine%20packaging%2C%20bright%20lighting&width=400&height=400&seq=prod1&orientation=squarish',
      price: 320000,
      originalPrice: 450000,
      discountPercentage: 29,
      rating: 5,
      reviewCount: 45,
      inStock: true,
      isNew: true,
      isBestSeller: true
    },
    {
      id: 2,
      name: 'عصاره گل گاوزبان برسان طب - 60 کپسول',
      image: 'https://readdy.ai/api/search-image?query=Borage%20flower%20extract%20capsules%20in%20professional%20glass%20bottle%2C%20natural%20herbal%20medicine%20packaging%2C%20white%20clean%20background%2C%20premium%20quality%20pharmaceutical%20design&width=400&height=400&seq=prod2&orientation=squarish',
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
      image: 'https://readdy.ai/api/search-image?query=Turmeric%20curcumin%20capsules%20in%20amber%20glass%20bottle%2C%20natural%20herbal%20supplement%20packaging%2C%20white%20background%2C%20professional%20product%20photography&width=400&height=400&seq=prod3&orientation=squarish',
      price: 195000,
      rating: 5,
      reviewCount: 41,
      inStock: true,
      isNew: true
    },
    {
      id: 4,
      name: 'عصاره رویال ژله برسان طب - 30 کپسول',
      image: 'https://readdy.ai/api/search-image?query=Royal%20jelly%20extract%20capsules%20premium%20packaging%2C%20natural%20bee%20product%20supplement%2C%20clean%20white%20background%2C%20professional%20pharmaceutical%20photography&width=400&height=400&seq=prod4&orientation=squarish',
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
      image: 'https://readdy.ai/api/search-image?query=Spirulina%20capsules%20in%20clear%20glass%20bottle%2C%20green%20superfood%20supplement%2C%20natural%20algae%20product%2C%20white%20clean%20background%2C%20professional%20herbal%20medicine%20photography&width=400&height=400&seq=prod5&orientation=squarish',
      price: 385000,
      rating: 4,
      reviewCount: 67,
      inStock: true,
      isBestSeller: true
    }
  ];

  // Best seller products (different set)
  const bestSellerProducts = [
    {
      id: 6,
      name: 'عصاره جینسینگ سیبری - 45 کپسول',
      image: 'https://readdy.ai/api/search-image?query=Ginseng%20extract%20capsules%20premium%20bottle%2C%20natural%20herbal%20energy%20supplement%2C%20professional%20pharmaceutical%20packaging%2C%20white%20background&width=400&height=400&seq=best1&orientation=squarish',
      price: 420000,
      rating: 5,
      reviewCount: 29,
      inStock: true,
      isBestSeller: true
    },
    {
      id: 7,
      name: 'چای آرامش‌بخش کاموبایل - 25 پاکت',
      image: 'https://readdy.ai/api/search-image?query=Chamomile%20herbal%20tea%20bags%20in%20premium%20packaging%2C%20calming%20tea%20blend%2C%20natural%20dried%20flowers%2C%20elegant%20tea%20box%20design&width=400&height=400&seq=best2&orientation=squarish',
      price: 185000,
      originalPrice: 220000,
      discountPercentage: 16,
      rating: 4,
      reviewCount: 156,
      inStock: true,
      isBestSeller: true
    },
    {
      id: 8,
      name: 'عسل کوهستان خالص - 500 گرم',
      image: 'https://readdy.ai/api/search-image?query=Pure%20mountain%20honey%20jar%2C%20natural%20raw%20honey%2C%20golden%20liquid%20honey%2C%20traditional%20packaging%2C%20organic%20honey%20product&width=400&height=400&seq=best3&orientation=squarish',
      price: 290000,
      rating: 5,
      reviewCount: 89,
      inStock: true,
      isBestSeller: true
    },
    {
      id: 9,
      name: 'روغن آرگان خالص - 50 میل',
      image: 'https://readdy.ai/api/search-image?query=Pure%20argan%20oil%20in%20dark%20glass%20bottle%2C%20natural%20skincare%20oil%2C%20premium%20cosmetic%20packaging%2C%20organic%20beauty%20product&width=400&height=400&seq=best4&orientation=squarish',
      price: 340000,
      originalPrice: 410000,
      discountPercentage: 17,
      rating: 4,
      reviewCount: 34,
      inStock: true,
      isBestSeller: true
    },
    {
      id: 10,
      name: 'مکمل اشوآگاندا طبیعی - 60 کپسول',
      image: 'https://readdy.ai/api/search-image?query=Ashwagandha%20supplement%20capsules%2C%20adaptogenic%20herb%20extract%2C%20natural%20stress%20relief%20supplement%2C%20professional%20pharmaceutical%20bottle&width=400&height=400&seq=best5&orientation=squarish',
      price: 375000,
      rating: 4,
      reviewCount: 52,
      inStock: true,
      isBestSeller: true
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'فاطمه احمدی',
      role: 'مشتری وفادار',
      content: 'بیش از 2 سال از محصولات برسان طب استفاده می‌کنم. کیفیت محصولات فوق‌العاده است و واقعاً تأثیر مثبت روی سلامتم داشته. خصوصاً عصاره زعفران که برای کاهش استرس استفاده می‌کنم عالی است.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20middle%20aged%20Iranian%20woman%2C%20friendly%20smile%2C%20traditional%20clothing%2C%20warm%20lighting%2C%20natural%20background%2C%20high%20quality%20photography&width=200&height=200&seq=testi1&orientation=squarish'
    },
    {
      id: 2,
      name: 'محمد رضایی',
      role: 'پزشک طب سنتی',
      content: 'به عنوان یک متخصص طب سنتی، کیفیت محصولات برسان طب را تأیید می‌کنم. استانداردهای تولید آن‌ها بسیار بالا است و من این محصولات را به بیمارانم پیشنهاد می‌دهم.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Iranian%20male%20doctor%20in%20traditional%20medicine%2C%20white%20coat%2C%20stethoscope%2C%20confident%20expression%2C%20medical%20office%20background&width=200&height=200&seq=testi2&orientation=squarish'
    },
    {
      id: 3,
      name: 'زهرا موسوی',
      role: 'مادر و خانه‌دار',
      content: 'برای تقویت سیستم ایمنی خانواده‌ام از محصولات برسان طب استفاده می‌کنم. عسل و چای‌های گیاهی‌شان عالی هستند. همچنین ارسال سریع و بسته‌بندی مرتب دارند.',
      rating: 4,
      avatar: 'https://readdy.ai/api/search-image?query=Portrait%20of%20Iranian%20housewife%2C%20maternal%20and%20caring%20expression%2C%20home%20kitchen%20setting%2C%20warm%20natural%20lighting%2C%20traditional%20Persian%20home&width=200&height=200&seq=testi3&orientation=squarish'
    }
  ];

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Handle search functionality
  };

  return (
    <HomePageTemplate
      heroData={heroData}
      features={features}
      categories={categories}
      featuredProducts={featuredProducts}
      bestSellerProducts={bestSellerProducts}
      testimonials={testimonials}
      cartItemCount={3}
      isLoggedIn={false}
      onSearch={handleSearch}
    />
  );
}