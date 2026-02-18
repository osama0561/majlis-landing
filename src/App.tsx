import React from 'react';
import {
  Navbar,
  Hero,
  SocialProof,
  Benefits,
  Curriculum,
  Pricing,
  FAQ,
  Footer,
} from './components';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50 font-arabic" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Social Proof */}
        <SocialProof />

        {/* Benefits - Zig-Zag Layout */}
        <Benefits />

        {/* Curriculum - What's Inside */}
        <Curriculum />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
