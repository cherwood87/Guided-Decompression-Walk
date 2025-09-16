import { Button } from '@/components/ui/button';
import { ArrowDown, CheckCircle, Users, Heart } from 'lucide-react';
import heroImage from '@/assets/IMG_5736.jpeg';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export const HeroSection = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section className="relative min-h-screen flex items-end lg:items-start justify-center lg:justify-end overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${heroImage})` 
        }}
      />
      <div className="relative z-10 w-full max-w-sm lg:max-w-2xl p-4 lg:p-8 mb-8 lg:mb-0 lg:pt-16">
        <div className="bg-white/75 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none rounded-2xl lg:rounded-none p-4 lg:p-0 shadow-xl lg:shadow-none lg:text-white">
          <div className="lg:mb-4">
            <span className="inline-block bg-forest-medium/20 lg:bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-forest-deep lg:text-white">
              Guided Decompression Walks
            </span>
          </div>
          
          <h1 className="text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3 lg:mb-4 leading-tight text-forest-deep lg:text-white">
            It's not about the miles, 
          </h1>
          
          <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light mb-4 lg:mb-6 text-forest-medium lg:text-white/90">
           it's about the moments.
          </h2>
          
          <p className="text-sm lg:text-lg xl:text-xl mb-6 lg:mb-8 leading-relaxed text-gray-700 lg:text-white/90">
            Give your dog the freedom to explore while you learn the skills to enjoy calmer, more connected walks together.
          </p>
          
          <div className="hidden lg:flex flex-wrap gap-3 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4" />
              Long-line freedom
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-4 h-4" />
              Expert guidance
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Heart className="w-4 h-4" />
              Stress relief
            </div>
          </div>

          <div className="space-y-3 lg:space-y-0 lg:flex lg:flex-col lg:sm:flex-row lg:gap-4">
            <Button 
              variant="hero" 
              size="sm"
              className="w-full lg:w-full lg:sm:w-auto"
              onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
            >
              Book Your Walk
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full lg:w-full lg:sm:w-auto lg:variant-hero-outline"
              onClick={() => scrollToSection('session-flow')}
            >
              Learn More <ArrowDown className="w-4 h-4 ml-2 lg:inline" />
            </Button>
          </div>

          {/* Mobile-only feature list */}
          <div className="flex justify-between mt-4 text-xs text-forest-medium lg:hidden">
            <span>✓ Long-line freedom</span>
            <span>✓ Expert coaching</span>
          </div>
        </div>
      </div>
    </section>
  );
};