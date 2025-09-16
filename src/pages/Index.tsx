import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { StickyButton } from '@/components/layout/StickyButton';
import { HeroSection } from '@/components/sections/HeroSection';
import { SuccessStatsSection } from '@/components/sections/SuccessStatsSection';
import { HowItsDifferentSection } from '@/components/sections/HowItsDifferentSection';
import { PerfectForSection } from '@/components/sections/PerfectForSection';
import { PropertyTourSection } from '@/components/sections/PropertyTourSection';
import { DualBenefitsSection } from '@/components/sections/DualBenefitsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { WhyItWorksSection } from '@/components/sections/WhyItWorksSection';
import { PricingLocationSection } from '@/components/sections/PricingLocationSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection />
      <SuccessStatsSection />
      <HowItsDifferentSection />
      <PerfectForSection />
      <PropertyTourSection />
      <DualBenefitsSection />
      <ExperienceSection />
      <FAQSection />
      <WhyItWorksSection />
      <PricingLocationSection />
      <TestimonialsSection />
      <FinalCTASection />
      
      <Footer />
      <StickyButton />
    </div>
  );
};

export default Index;