import { Button } from '@/components/ui/button';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export const Navigation = () => {
  const scrollToSection = useScrollToSection();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-forest-deep text-lg md:text-xl">The Decompression Method</div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('faq')}
            className="hidden md:inline-block text-forest-medium hover:text-forest-deep transition-colors"
          >
            FAQ
          </button>
          <Button 
            variant="hero" 
            size="sm"
            className="touch-target h-10 px-4 md:h-12 md:px-6"
            onClick={() => window.open('mailto:cherwood87@gmail.com', '_blank')}
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};