import React, { useState, useEffect } from 'react';
import { PrimaryButton } from './PrimaryButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 right-0 left-0 z-50
        transition-all duration-300 ease-out
        ${isScrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
        }
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group"
            aria-label="مجلس الأتمتة - الصفحة الرئيسية"
          >
            {/* Logo Placeholder - Replace with actual logo */}
            <div className="w-12 h-12 bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-cream-50 font-serif font-bold text-xl">م</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-bold text-forest-800">
                مجلس الأتمتة
              </span>
            </div>
          </a>

          {/* CTA Button */}
          <PrimaryButton
            variant="primary"
            size="md"
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            ariaLabel="اشترك الآن في مجلس الأتمتة"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            }
            iconPosition="start"
          >
            اشترك الآن
          </PrimaryButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
