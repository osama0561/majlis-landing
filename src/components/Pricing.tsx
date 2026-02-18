import React from 'react';
import { PrimaryButton } from './PrimaryButton';

const TOTAL_SEATS = 500;
const CURRENT_MEMBERS = 88;
const SEATS_LEFT = TOTAL_SEATS - CURRENT_MEMBERS;
const FILL_PERCENT = Math.round((CURRENT_MEMBERS / TOTAL_SEATS) * 100);

const includedFeatures = [
  'دليل عملي لمرحلة الصفر',
  'نظام أتمتة هدية فور الانضمام',
  'أنظمة n8n جاهزة للاستخدام',
  'أنظمة Make كاملة ومجربة',
  'دليل الحصول على شهادات معتمدة',
  'مكالمات أسبوعية شخصية',
  'مساعدة خطوة بخطوة',
  'مجتمع العرب الناجحين',
];

export const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="section-padding bg-gradient-to-b from-forest-800 to-forest-700"
      aria-labelledby="pricing-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">
            عرض خاص لفترة محدودة
          </span>
          <h2 id="pricing-heading" className="heading-lg text-cream-50 mb-4">
            انضم الآن <span className="text-amber-400">ووفّر $30</span>
          </h2>
          <p className="body-lg text-cream-100/70 max-w-2xl mx-auto">
            سعر الاشتراك سيرتفع بعد اكتمال أول {TOTAL_SEATS} عضو. احجز مقعدك الآن!
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative bg-cream-50 rounded-3xl shadow-2xl overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-amber-400 text-forest-800 text-center py-2 font-bold text-sm">
              🔥 الباقي {SEATS_LEFT} مقعد من {TOTAL_SEATS}
            </div>

            <div className="p-8 pt-16">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-2xl text-forest-600/50 line-through decoration-2">
                    $98
                  </span>
                  <span className="text-6xl font-bold text-forest-800 font-serif">
                    $68
                  </span>
                </div>
                <p className="text-forest-600/70">
                  / شهريًا
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-terracotta-500/10 text-terracotta-600 px-4 py-2 rounded-full text-sm font-medium">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>اشتراكك يبقى $68 للأبد ما دمت معنا</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-terracotta-500 text-cream-50 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4"
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
                    </span>
                    <span className="text-forest-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Seats Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="text-forest-600/70">{CURRENT_MEMBERS} عضو انضم</span>
                  <span className="font-semibold text-terracotta-600">{SEATS_LEFT} مقعد متبقي</span>
                </div>
                <div className="w-full bg-cream-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-gradient-to-l from-terracotta-500 to-amber-400 transition-all duration-700"
                    style={{ width: `${FILL_PERCENT}%` }}
                  />
                </div>
                <p className="text-xs text-forest-500/60 mt-1.5 text-center">{FILL_PERCENT}% من المقاعد ممتلئة</p>
              </div>

              {/* CTA Button */}
              <PrimaryButton
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => {
                  window.open('https://www.skool.com/majles/about?ref=da9590f615394c4693647ac4b40198a5', '_blank');
                }}
                ariaLabel="اشترك الآن في مجلس الأتمتة"
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
                انضم الآن وابدأ رحلتك
              </PrimaryButton>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-forest-600/60">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>دفع آمن</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>وصول فوري</span>
                </div>
              </div>
            </div>
          </div>

          {/* Golden Guarantee */}
          <div className="mt-8 bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-amber-500/10 border-2 border-amber-400/30 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full mb-4 shadow-lg shadow-amber-500/30">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-amber-600 mb-2">مو راضي؟ أرجعلك فلوسك كاملة</h3>
            <p className="text-forest-900 leading-relaxed">
              جرّب المجلس أسبوع كامل. إذا دخلت وشفت المحتوى وما حسيت إنه يستاهل — راسلني مباشرة وأرجعلك كل شي. ما راح تحتاج تشرح أو تبرر.
            </p>
          </div>

          {/* Additional info */}
          <p className="text-center text-cream-100/50 text-sm mt-6">
            بإمكانك إلغاء اشتراكك في أي وقت. بدون التزامات.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
