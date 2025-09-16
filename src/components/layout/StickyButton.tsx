import { Button } from '@/components/ui/button';

export const StickyButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <Button 
        variant="hero" 
        size="lg"
        onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
        className="shadow-strong touch-target h-12 px-6 md:h-14 md:px-8"
      >
        Book Now
      </Button>
    </div>
  );
};