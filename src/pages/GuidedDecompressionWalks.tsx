import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, MapPin, Clock, DollarSign, Users, Heart, Brain, Target, ChevronDown, CheckCircle, Play, TrendingUp, ExternalLink, Facebook, Instagram } from 'lucide-react';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import heroImage from '@/assets/IMG_5728.jpeg';
import walkImage1 from '@/assets/IMG_0484.jpeg';
import walkImage2 from '@/assets/IMG_5703.jpeg';
import walkImage3 from '@/assets/IMG_5710.jpeg';
import walkImage4 from '@/assets/IMG_5736.jpeg';
import walkImage5 from '@/assets/IMG_5744.jpeg';

const GuidedDecompressionWalks = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

 return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
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

      {/* Hero Section */}
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

      {/* Session Flow */}
      <section id="session-flow" className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              What to Expect During Your Session
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each Guided Decompression Walk is designed to provide a safe, supportive, and enriching experience for both you and your dog.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Private Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enjoy 100 acres of private, secure land designed to promote exploration and decompression.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">60-Minute Session</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each session is carefully timed to allow for optimal decompression without overwhelming your dog.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive personalized coaching and support from certified Decompression Method trainers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              The Benefits of Decompression Walks
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how Guided Decompression Walks can transform your dog's well-being and strengthen your bond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Stress Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Allow your dog to decompress and release pent-up stress in a safe, controlled environment.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Improved Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enhance your dog's ability to focus and learn by addressing underlying anxiety and reactivity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Behavioral Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Address the root causes of reactivity and anxiety, leading to calmer, more balanced behavior.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              A Glimpse into Our Walks
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See the freedom and joy our Guided Decompression Walks bring to dogs and their handlers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResponsiveImage src={walkImage1} alt="Dog exploring freely" className="rounded-xl shadow-medium" />
            <ResponsiveImage src={walkImage2} alt="Dog sniffing in the forest" className="rounded-xl shadow-medium" />
            <ResponsiveImage src={walkImage3} alt="Dog walking on a long line" className="rounded-xl shadow-medium" />
            <ResponsiveImage src={walkImage4} alt="Dog relaxing in nature" className="rounded-xl shadow-medium" />
            <ResponsiveImage src={walkImage5} alt="Dog enjoying a decompression walk" className="rounded-xl shadow-medium" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know before booking your Guided Decompression Walk.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-lg">What is a Decompression Walk?</CardTitle>
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A Decompression Walk is a structured outdoor experience designed to reduce stress and anxiety in dogs by allowing them to explore and engage in natural behaviors in a safe, controlled environment.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-lg">Is this suitable for reactive dogs?</CardTitle>
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, in fact, it's highly recommended! Our private location and expert guidance make it an ideal setting for reactive, anxious, or high-energy dogs to decompress and learn new coping skills.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-lg">What should I bring to the session?</CardTitle>
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Just bring your dog, a long line leash (if you have one), and any high-value treats or toys that motivate your dog. We'll provide the rest!
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-lg">How do I book a session?</CardTitle>
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simply click the "Book Now" button to be directed to our booking page, where you can select a date and time that works for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer - Keep existing footer exactly as is */}
      <footer className="bg-forest-deep text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Walks?</h3>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Give your dog the space they need to explore and decompress while you learn to communicate without pressure or stress.
            </p>
            
            <Button
              variant="hero-outline"
              size="lg"
              className="mb-12"
              onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
            >
              Book Your Session Now
            </Button>
            
            <div className="border-t border-white/20 pt-8">
              <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
                {/* Street Wise Canine */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Street Wise Canine</h4>
                  <div className="space-y-2">
                    <a 
                      href="https://streetwisecanine.ca" 
                      className="block text-white/80 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      streetwisecanine.ca
                    </a>
                    <div className="flex gap-4 justify-center md:justify-start">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Street Wise Canine Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/cherwood87/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Street Wise Canine Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Pet Intel */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Pet Intel</h4>
                  <div className="space-y-2">
                    <a 
                      href="https://petintel.ca" 
                      className="block text-white/80 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      petintel.ca
                    </a>
                    <div className="flex gap-4 justify-center md:justify-start">
                      <a
                        href="https://www.facebook.com/PetIntel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Pet Intel Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/petinteldogs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Pet Intel Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8 pt-8 border-t border-white/20 text-white/60 text-sm">
                © {new Date().getFullYear()} The Decompression Method. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Button 
          variant="hero"
          size="sm"
          className="w-full shadow-strong"
          onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default GuidedDecompressionWalks;
