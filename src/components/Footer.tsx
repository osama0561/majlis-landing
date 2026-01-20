import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-800 py-12 border-t border-forest-700">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/majles logo.png"
              alt="مجلس الأتمتة"
              className="h-12 w-auto"
            />
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-cream-100/70">
            <a
              href="#benefits"
              className="hover:text-cream-50 transition-colors"
            >
              المميزات
            </a>
            <a
              href="#pricing"
              className="hover:text-cream-50 transition-colors"
            >
              الأسعار
            </a>
            <a
              href="#faq"
              className="hover:text-cream-50 transition-colors"
            >
              الأسئلة
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-cream-100/50 text-sm">
            © {currentYear} مجلس الأتمتة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
