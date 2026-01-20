import React, { useState } from 'react';

const testimonials = [
  { id: 1, image: '/images/testimonials/testimonial-1.png', alt: 'شهادة عضو 1' },
  { id: 2, image: '/images/testimonials/testimonial-2.png', alt: 'شهادة عضو 2' },
  { id: 3, image: '/images/testimonials/testimonial-3.png', alt: 'شهادة عضو 3' },
  { id: 4, image: '/images/testimonials/testimonial-4.png', alt: 'شهادة عضو 4' },
  { id: 5, image: '/images/testimonials/testimonial-5.png', alt: 'شهادة عضو 5' },
];

export const SocialProof: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      className="py-16 md:py-24 bg-cream-100/50 border-y border-cream-200"
      aria-labelledby="social-proof-heading"
    >
      <div className="container-custom">
        <p
          id="social-proof-heading"
          className="text-center text-forest-800 text-2xl md:text-3xl font-serif font-semibold mb-12"
        >
          ماذا يقول أعضاء المجلس؟
        </p>

        {/* Testimonials Grid - Larger Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(testimonial.image)}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cream-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(testimonial.image)}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cream-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Click to zoom hint */}
        <p className="text-center text-forest-600/50 text-sm mt-8">
          اضغط على الصورة للتكبير
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              className="absolute -top-12 left-1/2 -translate-x-1/2 text-white text-lg flex items-center gap-2 hover:text-amber-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <span>اضغط للإغلاق</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="شهادة مكبرة"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialProof;
