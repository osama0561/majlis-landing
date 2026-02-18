import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'هل أحتاج خبرة سابقة في الأتمتة؟',
    answer:
      'لا، المجلس مصمم للمبتدئين تمامًا. نبدأ معك من الصفر بأدوات مجانية وسهلة الاستخدام. حتى لو ما تعرف تستعمل أدوات الذكاء الاصطناعي، ستتعلم خطوة بخطوة.',
  },
  {
    question: 'كيف أحصل على الأنظمة الجاهزة؟',
    answer:
      'فور انضمامك للمجلس، ستحصل على وصول فوري لمكتبة الأنظمة الجاهزة. تشمل أنظمة n8n و Make كاملة ومجربة، بالإضافة إلى نظام أتمتة هدية مباشرة.',
  },
  {
    question: 'متى تكون المكالمات الأسبوعية؟',
    answer:
      'المكالمات تكون في أوقات مناسبة للجميع في منطقة الخليج والشرق الأوسط. يتم تحديد المواعيد مع الأعضاء، وجميع المكالمات مسجلة لمن لا يستطيع الحضور.',
  },
  {
    question: 'هل يمكنني استرداد أموالي؟',
    answer:
      'نحن واثقون من قيمة المجلس. إذا لم تكن راضيًا خلال أول 7 أيام، يمكنك طلب استرداد كامل المبلغ بدون أي أسئلة.',
  },
  {
    question: 'ماذا يحدث بعد اكتمال الـ 500 عضو؟',
    answer:
      'بعد انضمام أول 500 عضو، سيرتفع السعر إلى $98 شهريًا للأعضاء الجدد. لكن إذا انضممت الآن بسعر $68، ستحافظ على هذا السعر للأبد طالما اشتراكك فعّال.',
  },
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-cream-200 last:border-b-0">
      <button
        className="w-full py-6 flex items-center justify-between text-right gap-4 group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.question}`}
      >
        <span className="text-lg font-semibold text-forest-800 group-hover:text-terracotta-500 transition-colors">
          {item.question}
        </span>
        <span
          className={`
            flex-shrink-0 w-10 h-10
            bg-cream-100 rounded-full
            flex items-center justify-center
            transition-all duration-300
            group-hover:bg-terracotta-500 group-hover:text-cream-50
            ${isOpen ? 'bg-terracotta-500 text-cream-50 rotate-180' : 'text-forest-600'}
          `}
        >
          <svg
            className="w-5 h-5 transition-transform duration-300"
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
        </span>
      </button>

      <div
        id={`faq-answer-${item.question}`}
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}
        `}
        aria-hidden={!isOpen}
      >
        <p className="text-forest-600/80 leading-relaxed pr-4">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="section-padding bg-cream-50"
      aria-labelledby="faq-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-terracotta-500/10 text-terracotta-600 rounded-full text-sm font-semibold mb-4">
            الأسئلة الشائعة
          </span>
          <h2 id="faq-heading" className="heading-lg text-forest-800 mb-4">
            هل لديك <span className="text-terracotta-500">أسئلة؟</span>
          </h2>
          <p className="body-lg text-forest-600/70 max-w-2xl mx-auto">
            إليك إجابات الأسئلة الأكثر شيوعًا
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-cream-200 p-2 md:p-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
