import React from 'react';

const logos = [
  { name: 'Company 1', placeholder: 'شركة ١' },
  { name: 'Company 2', placeholder: 'شركة ٢' },
  { name: 'Company 3', placeholder: 'شركة ٣' },
  { name: 'Company 4', placeholder: 'شركة ٤' },
  { name: 'Company 5', placeholder: 'شركة ٥' },
];

export const SocialProof: React.FC = () => {
  return (
    <section
      className="py-12 bg-cream-100/50 border-y border-cream-200"
      aria-labelledby="social-proof-heading"
    >
      <div className="container-custom">
        <p
          id="social-proof-heading"
          className="text-center text-forest-600/60 text-sm font-medium mb-8 tracking-wide uppercase"
        >
          موثوق من قبل رواد الأعمال العرب
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:scale-105"
            >
              {/* Logo Placeholder - Replace with actual company logos */}
              <div
                className="
                  w-28 h-12
                  bg-forest-800/5
                  rounded-lg
                  flex items-center justify-center
                  grayscale opacity-50
                  hover:grayscale-0 hover:opacity-100
                  transition-all duration-300
                "
                aria-label={logo.name}
              >
                <span className="text-forest-600/50 font-medium text-sm">
                  {logo.placeholder}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
