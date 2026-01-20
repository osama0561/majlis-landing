import React, { useState, useEffect } from 'react';
import { PrimaryButton } from './PrimaryButton';

export const Hero: React.FC = () => {
  const [spotsLeft, setSpotsLeft] = useState(100);

  // Simulated countdown - in real app, this would come from backend
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => (prev > 0 ? prev : 0));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-bl from-cream-50 via-cream-100 to-cream-50"
      aria-labelledby="hero-heading"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Right side in RTL */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-terracotta-500/10 text-terracotta-600 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-terracotta-500"></span>
              </span>
              <span className="font-semibold text-sm">الباقي {spotsLeft} مقعد بالسعر المخفض</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="heading-xl text-forest-800 mb-6 text-balance"
            >
              <span className="font-serif text-terracotta-500">امّن مستقبلك</span>
              <br />
              بتعلم مهارات
              <br />
              <span className="italic">الذكاء الاصطناعي</span>
            </h1>

            {/* Subtitle */}
            <p className="body-lg text-forest-600/80 mb-8 max-w-xl mx-auto lg:mx-0">
              تعلم أتمتة المهام بالذكاء الاصطناعي خطوة بخطوة، حتى لو ما عندك أي خلفية تقنية. انضم لـ +55 عضو بدأوا يتقنون مهارة المستقبل.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <PrimaryButton
                variant="primary"
                size="lg"
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  pricingSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                ariaLabel="انضم الآن لمجلس الأتمتة"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                }
                iconPosition="end"
              >
                انضم الآن - $68
              </PrimaryButton>

              <PrimaryButton
                variant="outline"
                size="lg"
                onClick={() => {
                  const benefitsSection = document.getElementById('benefits');
                  benefitsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                ariaLabel="اعرف المزيد عن مجلس الأتمتة"
              >
                اعرف المزيد
              </PrimaryButton>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-forest-600/70">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>دفع آمن</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>وصول فوري</span>
              </div>
            </div>
          </div>

          {/* Image - Left side in RTL */}
          <div className="order-1 lg:order-2 relative">
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl shadow-2xl shadow-terracotta-500/20 overflow-hidden">
                <img
                  src="/images/hero.png"
                  alt="مجلس الأتمتة"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-cream-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <p className="font-bold text-forest-800">+55</p>
                    <p className="text-sm text-forest-600/70">عضو نشط</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 right-1/4 w-32 h-32 bg-terracotta-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
