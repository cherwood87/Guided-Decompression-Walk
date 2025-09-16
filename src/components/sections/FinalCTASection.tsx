import { Button } from '@/components/ui/button';

export const FinalCTASection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Ready to Transform Your Walks?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join us for a science-based walking experience that benefits both you and your dog.
        </p>
        
        <Button 
          variant="hero-outline" 
          size="xl"
          className="touch-target h-14 px-8 md:h-16 md:px-12 text-lg"
          onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
        >
          Book Your Walk Now
        </Button>
      </div>
    </section>
  );
};