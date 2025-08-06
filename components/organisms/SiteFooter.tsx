'use client';
import React from 'react';
import Link from 'next/link';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Icon from '../atoms/Icon';

interface SiteFooterProps {
  className?: string;
}

export default function SiteFooter({ className = '' }: SiteFooterProps) {
  return (
    <footer className={`bg-gray-900 text-white ${className}`} dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Typography variant="h4" className="text-[#00FF7F] font-['Pacifico']">
              برسان طب
            </Typography>
            <Typography variant="body" className="text-gray-300 leading-relaxed">
              مرجع تخصصی محصولات طبیعی و گیاهی با کیفیت بالا. بیش از 10 سال تجربه در ارائه بهترین محصولات سلامت طبیعی.
            </Typography>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Icon name="instagram-line" size="lg" className="text-gray-400 hover:text-[#00FF7F] cursor-pointer transition-colors duration-200" />
              <Icon name="telegram-line" size="lg" className="text-gray-400 hover:text-[#00FF7F] cursor-pointer transition-colors duration-200" />
              <Icon name="whatsapp-line" size="lg" className="text-gray-400 hover:text-[#00FF7F] cursor-pointer transition-colors duration-200" />
              <Icon name="phone-line" size="lg" className="text-gray-400 hover:text-[#00FF7F] cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <Typography variant="h6" weight="bold" className="text-white">
              لینک‌های مفید
            </Typography>
            <div className="space-y-3">
              {[
                { label: 'درباره ما', href: '/about' },
                { label: 'محصولات', href: '/products' },
                { label: 'مقالات', href: '/blog' },
                { label: 'تماس با ما', href: '/contact' },
                { label: 'سوالات متداول', href: '/faq' }
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <Typography variant="body" className="text-gray-300 hover:text-[#00FF7F] transition-colors duration-200 cursor-pointer">
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <Typography variant="h6" weight="bold" className="text-white">
              دسته‌بندی محصولات
            </Typography>
            <div className="space-y-3">
              {[
                { label: 'عصاره‌ها و کپسول‌ها', href: '/products/extracts' },
                { label: 'چای‌های گیاهی', href: '/products/teas' },
                { label: 'عسل و محصولات زنبور', href: '/products/honey' },
                { label: 'روغن‌های طبیعی', href: '/products/oils' },
                { label: 'مکمل‌های غذایی', href: '/products/supplements' }
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <Typography variant="body" className="text-gray-300 hover:text-[#00FF7F] transition-colors duration-200 cursor-pointer">
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <Typography variant="h6" weight="bold" className="text-white">
              عضویت در خبرنامه
            </Typography>
            <Typography variant="body" className="text-gray-300">
              از جدیدترین محصولات و تخفیف‌های ویژه باخبر شوید
            </Typography>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="ایمیل شما"
                variant="filled"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                fullWidth
              />
              <Button
                variant="primary"
                size="md"
                fullWidth
                icon="ri-send-plane-line"
                iconPosition="left"
              >
                عضویت
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 space-x-reverse">
              <Typography variant="body" className="text-gray-400">
                © 1403 برسان طب. تمامی حقوق محفوظ است.
              </Typography>
            </div>
            
            <div className="flex items-center space-x-4 space-x-reverse">
              <Link href="/privacy">
                <Typography variant="body" className="text-gray-400 hover:text-[#00FF7F] transition-colors duration-200 cursor-pointer">
                  حریم خصوصی
                </Typography>
              </Link>
              <Link href="/terms">
                <Typography variant="body" className="text-gray-400 hover:text-[#00FF7F] transition-colors duration-200 cursor-pointer">
                  قوانین و مقررات
                </Typography>
              </Link>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Icon name="shield-check-line" size="sm" color="success" />
                <Typography variant="body" className="text-gray-400">
                  خرید امن
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}