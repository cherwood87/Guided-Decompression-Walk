import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, MapPin, Clock, DollarSign, Users, Heart, Brain, Target, ChevronDown, CheckCircle, Play, TrendingUp, ExternalLink, Facebook, Instagram, Check, X, Star, Award, Shield } from 'lucide-react';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import heroImage from '@/assets/IMG_5728.jpeg';
import walkImage1 from '@/assets/IMG_0484.jpeg';
import walkImage2 from '@/assets/IMG_5703.jpeg';
import walkImage3 from '@/assets/IMG_0443.jpeg';
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
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('stats')}
              className="text-forest-medium hover:text-forest-deep transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-forest-medium hover:text-forest-deep transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-forest-medium hover:text-forest-deep transition-colors"
            >
              Pricing
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="hero" 
              size="sm"
              className="touch-target h-10 px-4"
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
                onClick={() => scrollToSection('stats')}
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

      {/* Success Stats */}
      <section id="stats" className="py-12 lg:py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-forest-deep">95%</div>
              <p className="text-sm lg:text-base text-muted-foreground">Dogs show improvement after 2 sessions</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-forest-deep">100</div>
              <p className="text-sm lg:text-base text-muted-foreground">Acres of private property</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-forest-deep">60</div>
              <p className="text-sm lg:text-base text-muted-foreground">Minutes of guided exploration</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Different */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              How Guided Decompression Walks Are Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Most traditional training walks focus on controlling the dog: short leashes, constant corrections, and powering past distractions. While this might manage the behavior in the moment, it often keeps dogs stuck rehearsing stress.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Traditional Training Walks */}
            <Card className="shadow-medium border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-700 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Traditional Training Walks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Short leashes with constant tension</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Corrections when dogs react to triggers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Power through distractions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Force compliance over building confidence</p>
                </div>
              </CardContent>
            </Card>

            {/* Guided Decompression Walks */}
            <Card className="shadow-medium border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-forest-deep flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Guided Decompression Walks™
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-forest-deep">Space over pressure</p>
                    <p className="text-sm text-muted-foreground">Dogs explore on long lines (12–30 ft)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-forest-deep">Regulation over correction</p>
                    <p className="text-sm text-muted-foreground">Use sniffing and choice to lower stress</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-forest-deep">Partnership over power struggles</p>
                    <p className="text-sm text-muted-foreground">Learn calm communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-forest-deep">Confidence over compliance</p>
                    <p className="text-sm text-muted-foreground">Dogs choose calm instead of being forced</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-medium text-forest-deep">
              The result? Dogs stop practicing reactivity and start practicing regulation—something that carries into every future walk.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              For the Dogs Who Need More Than a Walk
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-forest-deep" />
                </div>
                <p className="text-muted-foreground">If your dog barks and lunges at other dogs</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-forest-deep" />
                </div>
                <p className="text-muted-foreground">If your rescue needs a safe way to build confidence</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-forest-deep" />
                </div>
                <p className="text-muted-foreground">If you avoid busy sidewalks because walks feel overwhelming</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-forest-deep" />
                </div>
                <p className="text-muted-foreground">If your high-energy dog never seems tired after a walk</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-forest-deep" />
                </div>
                <p className="text-muted-foreground">If you want calmer, more connected outings with your dog</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-forest-deep" />
                </div>
                <p className="text-muted-foreground">If your anxious dog needs gentle confidence building</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Tour Video */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              See Our 100-Acre Property
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Take a virtual tour of our private trails, meadows, and forest paths where your dog will safely explore and decompress.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-strong">
              <iframe
                src="https://www.youtube.com/embed/fR1quLHYZRw"
                title="100-Acre Property Tour - Guided Decompression Walks"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://youtu.be/fR1quLHYZRw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-forest-medium hover:text-forest-deep transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open in YouTube
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <ResponsiveImage src={walkImage1} alt="Dog exploring the natural trails at our property" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">Natural trails for exploration</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <ResponsiveImage src={walkImage2} alt="Peaceful meadow areas for decompression" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">Open meadows for calm exploration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Both Ends */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              Benefits for Both Ends of the Leash
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Your Dog */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-forest-deep flex items-center gap-3">
                  <Heart className="w-8 h-8" />
                  For Your Dog
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Explore safely on a 12–30 ft line</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Reduce stress and build confidence</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Sniff, pause, and make natural choices</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Move from arousal → regulation without being rushed</p>
                </div>
              </CardContent>
            </Card>

            {/* For You (the Handler) */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-forest-deep flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  For You (the Handler)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Read your dog's signals in real time</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Master long-line handling without pulling</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Use breath and body to co-regulate</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Leave with repeatable skills for calmer daily walks</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <ResponsiveImage 
              src={walkImage3} 
              alt="Dog and handler enjoying a peaceful decompression walk" 
              className="rounded-xl shadow-medium max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              The Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each walk is a guided session on our 100-acre private property. Dogs explore safely on a long line while trainers coach you on handling, timing, and reading your dog's signals. You'll leave with a calmer dog and skills you can use on every walk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-forest-deep">1</div>
                </div>
                <CardTitle className="text-xl text-forest-deep">Arrival & Setup</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">(5 min)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gear check, route preview
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-forest-deep">2</div>
                </div>
                <CardTitle className="text-xl text-forest-deep">Guided Walk</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">(40–45 min)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Follow your dog's exploration; trainers coach timing, body cues, and micro-exercises; no dog-dog greetings
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-forest-deep">3</div>
                </div>
                <CardTitle className="text-xl text-forest-deep">Recap</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">(5–10 min)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your dog's regulation profile + practice plan
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <ResponsiveImage 
              src={walkImage4} 
              alt="Trainer guiding a dog and handler through the decompression walk experience" 
              className="rounded-xl shadow-medium max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Enhanced FAQ */}
      <section id="faq" className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Will this be safe for my reactive dog?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Guided Decompression Walks are designed for dogs who struggle on leash. With 100 acres of private property, plenty of space to spread out, and trainer-managed setups, your dog will never be forced into greetings or situations that push them over threshold. The goal is calm exploration—not confrontation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">What happens if the weather is bad?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Safety and comfort come first. Walks will go ahead in light rain or cooler weather (sniffing is often even better in damp conditions!), but if conditions are unsafe (storms, extreme heat, icy trails), we'll reschedule. You'll receive notice via email or text.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">What should I bring?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    • Your dog's regular flat collar or harness<br/>
                    • A secure long line if you have one (12–30 ft recommended)<br/>
                    • High-value treats for reinforcement<br/>
                    • Water for your dog (and yourself!)<br/>
                    • Weather-appropriate clothing and footwear (trails may be uneven or muddy)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">What equipment is provided?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    We provide:<br/>
                    • Extra long lines to borrow if you don't own one<br/>
                    • Treat pouches (limited)<br/>
                    • Feathers and scent items we may use during the walk for sniffing exercises
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Where do I park and check in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  When you arrive at our Richmond, ON property, you'll see signage directing you to the designated parking area near the trail entrance. Please leave your dog in the car when you first arrive, and come check in with your trainer before unloading your dog. This helps keep the parking area calm and prevents reactive moments.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Do I need prior training experience?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Not at all! We'll guide you through leash handling, sniffing techniques, and everything else during the walk. You just need to show up ready to learn alongside your dog.
                </p>
                <div className="mt-4 p-4 bg-forest-light/20 rounded-lg">
                  <p className="text-sm text-forest-deep font-medium">
                    In short: We provide the space, structure, and coaching—just bring your dog, some treats, and an open mind.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              Why It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Dogs need more than miles—they need moments to regulate. Research shows sniffing lowers stress hormones, activates the calm side of the nervous system, and builds confidence. Guided Decompression Walks™ combine this science with hands-on coaching so both ends of the leash can reset together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Stress Relief</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Decompression allows cortisol levels to lower, activates the parasympathetic nervous system, and restores balance.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Confidence Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Following their nose activates the SEEKING system, building confidence and reducing anxiety naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Natural Rhythms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dogs move through predictable states. On decompression walks, we honor these rhythms instead of interrupting them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section id="pricing" className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              Pricing & Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Spots are intentionally limited to keep groups small. Reserve now—your dog deserves this space.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-forest-deep">Single Session</CardTitle>
                <div className="text-4xl font-bold text-forest-deep mt-4">$35</div>
                <CardDescription>Try it out</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center border-forest-medium">
              <CardHeader>
                <Badge className="mb-2 bg-forest-medium text-white">save $10</Badge>
                <CardTitle className="text-2xl text-forest-deep">3-Pack</CardTitle>
                <div className="text-4xl font-bold text-forest-deep mt-4">$95</div>
                <CardDescription>Build consistency</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <Badge className="mb-2 bg-forest-deep text-white">save $25</Badge>
                <CardTitle className="text-2xl text-forest-deep">6-Pack</CardTitle>
                <div className="text-4xl font-bold text-forest-deep mt-4">$185</div>
                <CardDescription>Best value for habit-building</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              Location Details
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-forest-deep">Private 100-acre property</p>
                        <p className="text-sm text-muted-foreground">Richmond, ON (directions after registration)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-forest-deep">Saturdays, 3:00–4:00 PM</p>
                        <p className="text-sm text-muted-foreground">Arrive 10 minutes early for check-in</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-forest-medium flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-forest-deep">Forest trails, meadows, gentle elevation</p>
                        <p className="text-sm text-muted-foreground">On-site parking, easy access</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              What Handlers Are Saying
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "After just two walks, my dog started checking in with me instead of pulling ahead constantly. I couldn't believe such a small change made such a big difference."
                </p>
                <p className="font-medium text-forest-deep">— Jessica, Golden Retriever owner</p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "After one session I finally understood how just the way I hold the leash makes a huge difference. I had no idea I was creating half the tension myself."
                </p>
                <p className="font-medium text-forest-deep">— Mike, German Shepherd mix owner</p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "I was so worried my dog would drag me everywhere, but with just a bit of time spent on anchoring techniques, our walks became actually enjoyable again."
                </p>
                <p className="font-medium text-forest-deep">— Sarah, Border Collie owner</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <ResponsiveImage 
              src={walkImage5} 
              alt="Happy dog and handler after a successful decompression walk" 
              className="rounded-xl shadow-medium max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
            Ready to Transform Your Walks?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for a science-based walking experience that benefits both you and your dog.
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            className="mb-12"
            onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
          >
            Book Your Walk Now
          </Button>

          <div className="bg-forest-light/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-forest-deep mb-4">Guided Decompression Walks™</h3>
            <p className="text-muted-foreground mb-6">
              Hosted by Pet Intel & Emotional Well-Being and Street Wise Canine
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>Saturdays, 3:00–4:00 PM</span>
              <span>•</span>
              <span>Richmond, ON</span>
              <span>•</span>
              <span>$35 per session</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-forest-deep text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">            
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
                      Website
                    </a>
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
                      Website
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-white/60 text-sm mt-8 pt-8 border-t border-white/20">
                © 2024 The Decompression Method. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <Button 
          variant="hero" 
          size="lg" 
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