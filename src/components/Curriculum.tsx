import React, { useState } from 'react';

interface Lesson {
  title: string;
}

interface Module {
  title: string;
  icon: string;
  lessons: Lesson[];
}

interface Camp {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  modules: Module[];
}

const camps: Camp[] = [
  {
    id: 'camp1',
    title: 'أساسيات الأتمتة',
    subtitle: 'تعلم Make و n8n وهندسة الأوامر من الصفر حتى الشهادة المعتمدة',
    badge: 'المعسكر الأول',
    modules: [
      {
        title: 'Make.com - من الصفر',
        icon: '⚡',
        lessons: [
          { title: 'مقدمة عن Make' },
          { title: 'تسجيل الدخول وشرح الواجهة' },
          { title: 'مكتبة القوالب وكيفية الوصول إليها مجاناً' },
          { title: 'ابنِ أول نظام لك (10 خطوات عملية)' },
        ],
      },
      {
        title: 'الشهادة المعتمدة في Make',
        icon: '🏆',
        lessons: [
          { title: 'الموجّه (Router) - توجيه البيانات' },
          { title: 'الفلاتر والمجمّعات' },
          { title: 'حل المشاكل والأخطاء الشائعة' },
          { title: 'استعمال ChatGPT لحل المشاكل' },
          { title: 'الشهادة المتقدمة في Make' },
        ],
      },
      {
        title: 'مهارات متقدمة - بيانات وـ API',
        icon: '🔗',
        lessons: [
          { title: 'استيراد ملفات JSON' },
          { title: 'المكرّرات وتفكيك القوائم' },
          { title: 'المجمّعات ودمج البيانات' },
          { title: 'جلب وإرسال البيانات عبر HTTP' },
          { title: 'Webhooks - تبادل البيانات المعقدة' },
          { title: 'طوابير الانتظار والضغط' },
          { title: 'معالجة الأخطاء وموجّهاتها' },
          { title: 'دوال الوقت والتاريخ والنصوص' },
        ],
      },
      {
        title: 'n8n - الأتمتة المفتوحة',
        icon: '🤖',
        lessons: [
          { title: 'ما هي منصة n8n؟' },
          { title: 'كيف تحصل على كريدت لانهائي مع Hostinger' },
          { title: 'تحميل n8n مجاناً' },
          { title: 'كيف تستعمل قوالب المنصة' },
          { title: 'أول نظام بسيط لك' },
          { title: 'أول نظام متقدم لك' },
          { title: 'الشهادة الاحترافية في n8n' },
        ],
      },
      {
        title: 'هندسة الأوامر - Prompt Engineering',
        icon: '🧠',
        lessons: [
          { title: 'القاعدة الذهبية في هندسة الأوامر' },
          { title: 'Few-Shot Prompting - من الصفر إلى المتقدم' },
          { title: 'Chain of Thought - سلسلة الأفكار' },
          { title: 'اكتب أوامر أسرع 20 مرة' },
          { title: 'Make vs n8n - أيهما أفضل لك؟' },
        ],
      },
    ],
  },
  {
    id: 'camp2',
    title: 'كيف تبني تطبيقات بالذكاء الاصطناعي',
    subtitle: 'من الفكرة إلى التطبيق الحقيقي الذي يجلب عملاء ومال',
    badge: 'المعسكر الثاني',
    modules: [
      {
        title: 'البداية والإعداد',
        icon: '🛠️',
        lessons: [
          { title: 'مقدمة الكورس' },
          { title: 'ما هو Claude AI؟' },
          { title: 'تثبيت Visual Studio Code' },
          { title: 'تحميل Node.js' },
          { title: 'تجهيز بيئة العمل' },
          { title: 'كيف تتكلم مع Claude AI بشكل صحيح' },
        ],
      },
      {
        title: 'من الفكرة إلى التطبيق',
        icon: '💡',
        lessons: [
          { title: 'تحديد الفكرة المناسبة' },
          { title: 'كيف تبني خطة لفكرتك' },
          { title: 'الأوضاع المختلفة في Claude' },
          { title: 'أين تخزن بياناتك؟ قاعدة البيانات الأفضل' },
          { title: 'أي ذكاء اصطناعي تستعمل للبرمجة؟' },
        ],
      },
      {
        title: 'البناء والتطوير',
        icon: '⚙️',
        lessons: [
          { title: 'أساسيات البرمجة اللي تحتاجها' },
          { title: 'أوامر مفيدة للبدء في البرمجة' },
          { title: 'كيف تربط قاعدة البيانات مع تطبيقك' },
          { title: 'ابنِ تطبيقك الأول!' },
          { title: 'كيف تبني صفحة تسجيل دخول' },
        ],
      },
      {
        title: 'النشر والتحسين',
        icon: '🚀',
        lessons: [
          { title: 'الاستضافة على GitHub + Vercel مجاناً' },
          { title: 'ربط تحليلات Google على موقعك' },
          { title: 'كيف تحسّن تطبيقك "الصيانة" بسهولة' },
        ],
      },
      {
        title: 'الحصول على عملاء',
        icon: '💰',
        lessons: [
          { title: 'كيف تجيب عملاء لتطبيقك؟' },
          { title: 'استراتيجية قائمة الانتظار' },
          { title: 'أول 10 عملاء لتطبيقك' },
          { title: 'أول عميل مدفوع لتطبيقك' },
        ],
      },
    ],
  },
];

export const Curriculum: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('camp1');
  const [openModule, setOpenModule] = useState<number | null>(0);

  const activeCamp = camps.find((c) => c.id === activeTab)!;

  const handleTabSwitch = (campId: string) => {
    setActiveTab(campId);
    setOpenModule(0);
  };

  return (
    <section
      id="curriculum"
      className="section-padding bg-white"
      aria-labelledby="curriculum-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-terracotta-500/10 text-terracotta-600 rounded-full text-sm font-semibold mb-4">
            المحتوى الكامل
          </span>
          <h2
            id="curriculum-heading"
            className="heading-lg text-forest-800 mb-4"
          >
            ماذا ستتعلم{' '}
            <span className="text-terracotta-500">داخل المجلس؟</span>
          </h2>
          <p className="body-lg text-forest-600/70 max-w-2xl mx-auto">
            معسكران كاملان - من أساسيات الأتمتة حتى بناء تطبيقاتك الخاصة
            بالذكاء الاصطناعي
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-cream-100 rounded-2xl p-1.5 gap-1">
            {camps.map((camp) => (
              <button
                key={camp.id}
                onClick={() => handleTabSwitch(camp.id)}
                className={`
                  px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300
                  ${
                    activeTab === camp.id
                      ? 'bg-terracotta-500 text-white shadow-md shadow-terracotta-500/20'
                      : 'text-forest-600 hover:text-forest-800'
                  }
                `}
              >
                {camp.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Camp Info */}
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h3 className="text-2xl font-bold text-forest-800 mb-2">
            {activeCamp.title}
          </h3>
          <p className="text-forest-600/70">{activeCamp.subtitle}</p>
        </div>

        {/* Modules Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {activeCamp.modules.map((module, mIndex) => (
            <div
              key={mIndex}
              className="bg-cream-50 border border-cream-200 rounded-2xl overflow-hidden"
            >
              {/* Module Header */}
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-right group"
                onClick={() =>
                  setOpenModule(openModule === mIndex ? null : mIndex)
                }
                aria-expanded={openModule === mIndex}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{module.icon}</span>
                  <div className="text-right">
                    <p className="font-bold text-forest-800 group-hover:text-terracotta-500 transition-colors">
                      {module.title}
                    </p>
                    <p className="text-xs text-forest-500 mt-0.5">
                      {module.lessons.length} درس
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-forest-400 flex-shrink-0 transition-transform duration-300 ${
                    openModule === mIndex ? 'rotate-180 text-terracotta-500' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Lessons List */}
              <div
                className={`transition-all duration-300 ease-out overflow-hidden ${
                  openModule === mIndex ? 'max-h-[600px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 border-t border-cream-200">
                  <ul className="mt-3 space-y-2">
                    {module.lessons.map((lesson, lIndex) => (
                      <li
                        key={lIndex}
                        className="flex items-center gap-3 py-2"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terracotta-500/10 flex items-center justify-center">
                          <svg
                            className="w-3.5 h-3.5 text-terracotta-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                        <span className="text-forest-700 text-sm">
                          {lesson.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total count badge */}
        <div className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-forest-600/60">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-terracotta-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span>شهادات معتمدة في كل معسكر</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-forest-300" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-terracotta-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>محتوى يُضاف باستمرار</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-forest-300" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-terracotta-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
            <span>فيديوهات مسجلة + مكالمات مباشرة</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
