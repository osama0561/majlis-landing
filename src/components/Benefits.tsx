import React from 'react';

interface Benefit {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: 'ابدأ بالتطبيق من اليوم الأول',
    description:
      'ما راح تبدأ من الصفر. تحصل على أنظمة أتمتة جاهزة تنسخها وتشتغل عندك مباشرة.',
    features: [
      'أنظمة n8n جاهزة للنسخ',
      'أنظمة Make كاملة ومجربة',
      'نظام أتمتة هدية فور انضمامك',
    ],
    image: '/images/أنظمة جاهزة للاستخدام.png',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'ما تعلق أبدًا - أنا معك',
    description:
      'كل أسبوع نجتمع مباشرة. تسألني أي سؤال، أساعدك في مشروعك، ونحل المشاكل سوا.',
    features: [
      'مكالمات جماعية أسبوعية',
      'مساعدة شخصية في مشاريعك',
      'إجابة على جميع أسئلتك',
    ],
    image: '/images/مكالمة.png',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'أثبت إنك تعرف - بشهادة',
    description:
      'احصل على شهادات معترف بها تثبت خبرتك. ميّز نفسك في سوق العمل وأمّن مستقبلك.',
    features: [
      'دليل للحصول على الشهادات',
      'شهادات معترف بها دوليًا',
      'دعم في رحلة التعلم',
    ],
    image: '/images/شهاده.png',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
];

export const Benefits: React.FC = () => {
  return (
    <section
      id="benefits"
      className="section-padding bg-cream-50"
      aria-labelledby="benefits-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-terracotta-500/10 text-terracotta-600 rounded-full text-sm font-semibold mb-4">
            ماذا ستحصل عليه؟
          </span>
          <h2 id="benefits-heading" className="heading-lg text-forest-800 mb-4">
            كل ما تحتاجه للنجاح في <span className="text-terracotta-500">الأتمتة</span>
          </h2>
          <p className="body-lg text-forest-600/70 max-w-2xl mx-auto">
            مجلس الأتمتة يوفر لك الأدوات والدعم والمجتمع لتبدأ وتنجح
          </p>
        </div>

        {/* Benefits Grid - Zig-Zag Layout */}
        <div className="space-y-20 lg:space-y-32">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`
                grid lg:grid-cols-2 gap-12 lg:gap-20 items-center
                ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}
              `}
            >
              {/* Text Content */}
              <div
                className={`
                  ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}
                `}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-terracotta-400 to-terracotta-600 text-cream-50 rounded-2xl shadow-lg shadow-terracotta-500/20 mb-6">
                  {benefit.icon}
                </div>

                <h3 className="heading-md text-forest-800 mb-4">
                  {benefit.title}
                </h3>

                <p className="text-lg text-forest-600/80 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-forest-700"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
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
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefit Image */}
              <div
                className={`
                  ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}
                `}
              >
                <div className="relative">
                  <div className="rounded-3xl shadow-xl overflow-hidden border border-cream-200 bg-white">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>

                  {/* Decorative blob */}
                  <div
                    className={`
                      absolute -z-10 w-64 h-64 rounded-full blur-3xl opacity-30
                      ${index % 2 === 0
                        ? '-bottom-10 -right-10 bg-terracotta-400'
                        : '-bottom-10 -left-10 bg-amber-400'
                      }
                    `}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
