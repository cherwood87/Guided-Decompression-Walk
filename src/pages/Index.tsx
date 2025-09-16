import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { StickyButton } from '@/components/layout/StickyButton';
import { HeroSection } from '@/components/sections/HeroSection';
import { SuccessStatsSection } from '@/components/sections/SuccessStatsSection';
import { MethodOverviewSection } from '@/components/sections/MethodOverviewSection';
import { HowItsDifferentSection } from '@/components/sections/HowItsDifferentSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { ListenMethodSection } from '@/components/sections/ListenMethodSection';
import { WhyItWorksSection } from '@/components/sections/WhyItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection />
      <SuccessStatsSection />
      <MethodOverviewSection />
      <HowItsDifferentSection />
      <ProgramsSection />
      <ListenMethodSection />
      <WhyItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      
      <Footer />
      <StickyButton />
    </div>
  );
};

export default Index;