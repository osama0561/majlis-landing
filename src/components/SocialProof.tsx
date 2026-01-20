import React from 'react';

const testimonials = [
  { id: 1, image: '/images/testimonials/testimonial-1.png', alt: 'شهادة عضو 1' },
  { id: 2, image: '/images/testimonials/testimonial-2.png', alt: 'شهادة عضو 2' },
  { id: 3, image: '/images/testimonials/testimonial-3.png', alt: 'شهادة عضو 3' },
  { id: 4, image: '/images/testimonials/testimonial-4.png', alt: 'شهادة عضو 4' },
  { id: 5, image: '/images/testimonials/testimonial-5.png', alt: 'شهادة عضو 5' },
];

export const SocialProof: React.FC = () => {
  return (
    <section
      className="py-16 bg-cream-100/50 border-y border-cream-200"
      aria-labelledby="social-proof-heading"
    >
      <div className="container-custom">
        <p
          id="social-proof-heading"
          className="text-center text-forest-800 text-xl font-serif font-semibold mb-10"
        >
          ماذا يقول أعضاء المجلس؟
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cream-200 hover:shadow-xl transition-shadow">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
