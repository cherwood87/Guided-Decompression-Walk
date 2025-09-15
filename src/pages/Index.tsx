import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, MapPin, Clock, DollarSign, Users, Heart, Brain, Target, ChevronDown, CheckCircle, Play, TrendingUp, ExternalLink } from 'lucide-react';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import heroImage from '@/assets/IMG_5728.jpeg';
import walkImage1 from '@/assets/IMG_0484.jpeg';
import walkImage2 from '@/assets/IMG_5703.jpeg';
import walkImage3 from '@/assets/IMG_5710.jpeg';
import walkImage4 from '@/assets/IMG_5736.jpeg';
import walkImage5 from '@/assets/IMG_5744.jpeg';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

 return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-forest-deep text-lg md:text-xl">Guided Decompression Walks™</div>
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
<section className="relative min-h-screen overflow-hidden pt-16">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: `url(${heroImage})` 
    }}
  />
  <div className="relative z-10 min-h-screen flex items-center">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-forest-deep">
            It's not in the miles, 
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6 text-forest-medium">
            it's in the moments.
          </h2>
          
          <p className="text-lg mb-8 leading-relaxed text-gray-700">
            Guided Decompression Walks™ give your dog the freedom to explore while you learn the skills to enjoy calmer, more connected walks together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Book Your Walk
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-forest-deep">
              <CheckCircle className="w-4 h-4 text-forest-medium" />
              Long-line freedom
            </div>
            <div className="flex items-center gap-2 text-forest-deep">
              <Users className="w-4 h-4 text-forest-medium" />
              Expert coaching
            </div>
            <div className="flex items-center gap-2 text-forest-deep">
              <Heart className="w-4 h-4 text-forest-medium" />
              Stress relief
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block">
          {/* Space for image or additional content */}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Success Stats */}
      <section className="py-8 md:py-12 bg-forest-deep text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-white/80">Dogs show improvement after 2 sessions</div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">100</div>
              <div className="text-sm text-white/80">Acres of private property</div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">60</div>
              <div className="text-sm text-white/80">Minutes of guided exploration</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Different */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-forest-deep">
            How Guided Decompression Walks™ Are Different
          </h2>
          
          <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most traditional training walks focus on <strong>controlling the dog</strong>: short leashes, constant corrections, and powering past distractions. While this might manage the behavior in the moment, it often keeps dogs stuck rehearsing stress.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-forest-deep text-xl md:text-2xl">Traditional Training Walks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Short leashes with constant tension</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Corrections when dogs react to triggers</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Power through distractions</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Force compliance over building confidence</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-forest-medium/20 bg-forest-light/10">
              <CardHeader>
                <CardTitle className="text-forest-deep text-xl md:text-2xl">Guided Decompression Walks™</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span><strong>Space over pressure</strong> – Dogs explore on long lines (12–30 ft)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span><strong>Regulation over correction</strong> – Use sniffing and choice to lower stress</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span><strong>Partnership over power struggles</strong> – Learn calm communication</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span><strong>Confidence over compliance</strong> – Dogs choose calm instead of being forced</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8 md:mt-12 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-forest-medium font-medium">
              The result? Dogs stop practicing reactivity and start practicing regulation—something that carries into every future walk.
            </p>
          </div>
        </div>
      </section>

      {/* Perfect For Section - Moved Up */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-forest-deep">
            For the Dogs Who Need More Than a Walk
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              "If your dog barks and lunges at other dogs",
              "If your rescue needs a safe way to build confidence",
              "If you avoid busy sidewalks because walks feel overwhelming",
              "If your high-energy dog never seems tired after a walk",
              "If you want calmer, more connected outings with your dog",
              "If you want to feel less frustrated and more in sync on walks",
              "If you’re looking for a better way to connect with your dog while meeting their real needs",
              "If your dog struggles to settle at home because walks leave them more wound up than worn out",
              "If your anxious dog needs gentle confidence building"
            ].map((item, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-forest-medium flex-shrink-0 mt-0.5" />
                    <p className="font-medium text-forest-deep text-left">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Tour - Enhanced with Images */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
            See Our 100-Acre Property
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take a virtual tour of our private trails, meadows, and forest paths where your dog will safely explore and decompress.
          </p>
          
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/fR1quLHYZRw"
                title="Property Tour - Guided Decompression Walks"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 mx-auto"
                onClick={() => window.open('https://youtu.be/fR1quLHYZRw?si=xCnHrGfbHOJiSm1q', '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                Open in YouTube
              </Button>
            </div>
          </div>

          {/* Property Images Gallery */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="relative">
              <ResponsiveImage 
                src={walkImage1}
                alt="Dog exploring the natural trails at our property"
                className="rounded-xl shadow-medium w-full"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-lg text-sm">
                Natural trails for exploration
              </div>
            </div>
            <div className="relative">
              <ResponsiveImage 
                src={walkImage2}
                alt="Peaceful meadow areas for decompression"
                className="rounded-xl shadow-medium w-full"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-lg text-sm">
                Open meadows for calm exploration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Benefits - Enhanced with Images */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-forest-deep">
            Benefits for Both Ends of the Leash
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center mb-12">
            <div className="space-y-6">
              <Card className="shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-forest-deep text-xl md:text-2xl">
                    <Heart className="w-8 h-8 md:w-10 md:h-10 text-forest-medium" />
                    For Your Dog
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Explore safely on a 12–30 ft line</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Reduce stress and build confidence</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Sniff, pause, and make natural choices</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Move from arousal → regulation without being rushed</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-forest-deep text-xl md:text-2xl">
                    <Users className="w-8 h-8 md:w-10 md:h-10 text-forest-medium" />
                    For You (the Handler)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Read your dog's signals in real time</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Master long-line handling without pulling</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Use breath and body to co-regulate</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Leave with repeatable skills for calmer daily walks</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <ResponsiveImage 
                src={walkImage3}
                alt="Dog and handler enjoying a peaceful decompression walk"
                className="rounded-2xl shadow-strong w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section id="session-flow" className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-forest-deep">
            The Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-4xl mx-auto text-lg">
            Each walk is a guided session on our 100-acre private property. Dogs explore safely on a long line while trainers coach you on handling, timing, and reading your dog's signals. You'll leave with a calmer dog and skills you can use on every walk.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-forest-deep">Arrival & Setup (5 min)</h3>
                  <p className="text-muted-foreground">Gear check (back-clip harness + 12+ ft line), route preview</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-forest-deep">Guided Walk (40–45 min)</h3>
                  <p className="text-muted-foreground">Follow your dog's exploration; trainers coach timing, body cues, and micro-exercises; no dog-dog greetings</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-forest-deep">Recap (5–10 min)</h3>
                  <p className="text-muted-foreground">Your dog's regulation profile + practice plan</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ResponsiveImage 
                src={walkImage4}
                alt="Trainer guiding a dog and handler through the decompression walk experience"
                className="rounded-2xl shadow-strong w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-forest-deep">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-forest-deep text-lg md:text-xl">Will this be safe for my reactive dog?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Guided Decompression Walks are designed <em>for</em> dogs who struggle on leash. With 100 acres of private property, plenty of space to spread out, and trainer-managed setups, your dog will never be forced into greetings or situations that push them over threshold. The goal is calm exploration—not confrontation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-forest-deep text-lg md:text-xl">What happens if the weather is bad?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Safety and comfort come first. Walks will go ahead in light rain or cooler weather (sniffing is often even better in damp conditions!), but if conditions are unsafe (storms, extreme heat, icy trails), we'll reschedule. You'll receive notice via email or text.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-forest-deep text-lg md:text-xl">What should I bring?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Your dog's regular flat collar or harness</p>
                  <p>• A secure long line if you have one (12–30 ft recommended)</p>
                  <p>• High-value treats for reinforcement</p>
                  <p>• Water for your dog (and yourself!)</p>
                  <p>• Weather-appropriate clothing and footwear (trails may be uneven or muddy)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-forest-deep text-lg md:text-xl">What equipment is provided?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>We provide:</strong></p>
                  <p>• Extra long lines to borrow if you don't own one</p>
                  <p>• Treat pouches (limited)</p>
                  <p>• Feathers and scent items we may use during the walk for sniffing exercises</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-forest-deep text-lg md:text-xl">Where do I park and check in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  When you arrive at our Richmond, ON property, you'll see signage directing you to the designated parking area near the trail entrance. <strong>Please leave your dog in the car when you first arrive, and come check in with your trainer before unloading your dog.</strong> This helps keep the parking area calm and prevents reactive moments.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-forest-deep text-lg md:text-xl">Do I need prior training experience?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Not at all! We'll guide you through leash handling, sniffing techniques, and everything else during the walk. You just need to show up ready to learn alongside your dog.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 p-6 bg-forest-light/20 rounded-xl">
            <p className="text-lg font-medium text-forest-deep mb-2">In short:</p>
            <p className="text-muted-foreground">
              We provide the space, structure, and coaching—just bring your dog, some treats, and an open mind.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-12 md:py-16 lg:py-20 bg-forest-light/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-forest-deep">
            Why It Works
          </h2>
          
          <div className="text-center mb-8 md:mb-12 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dogs need more than miles—they need moments to regulate. Research shows sniffing lowers stress hormones, activates the calm side of the nervous system, and builds confidence. Guided Decompression Walks™ combine this science with hands-on coaching so both ends of the leash can reset together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <CardTitle className="text-forest-deep text-xl">Stress Relief</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Decompression allows cortisol levels to lower, activates the parasympathetic nervous system, and restores balance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <CardTitle className="text-forest-deep text-xl">Confidence Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Following their nose activates the SEEKING system, building confidence and reducing anxiety naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <CardTitle className="text-forest-deep text-xl">Natural Rhythms</CardTitle>
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

      {/* Pricing & Location */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Pricing */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-forest-deep">Pricing & Packages</h2>
              <p className="text-forest-medium font-medium mb-6 text-center">
                Spots are intentionally limited to keep groups small. Reserve now—your dog deserves this space.
              </p>
              <div className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>Single Session</span>
                      <Badge variant="outline" className="text-lg font-bold">$35</Badge>
                    </CardTitle>
                    <CardDescription>Try it out</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="shadow-medium border-forest-medium/20">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>3-Pack</span>
                      <div className="text-right">
                        <Badge variant="outline" className="text-lg font-bold">$95</Badge>
                        <p className="text-sm text-forest-medium">save $10</p>
                      </div>
                    </CardTitle>
                    <CardDescription>Build consistency</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="shadow-medium border-forest-medium/30 bg-forest-light/20">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>6-Pack</span>
                      <div className="text-right">
                        <Badge className="bg-forest-medium text-white text-lg font-bold">$185</Badge>
                        <p className="text-sm text-forest-medium">save $25</p>
                      </div>
                    </CardTitle>
                    <CardDescription>Best value for habit-building</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button 
                  variant="nature" 
                  className="flex-1"
                  onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
                >
                  Book Now
                </Button>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-forest-deep">Location Details</h2>
              <Card className="shadow-medium">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Private 100-acre property</p>
                      <p className="text-muted-foreground">Richmond, ON (directions after registration)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Saturdays, 3:00–4:00 PM</p>
                      <p className="text-muted-foreground">Arrive 10 minutes early for check-in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Forest trails, meadows, gentle elevation</p>
                      <p className="text-muted-foreground">On-site parking, easy access</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* LISTEN Method */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${walkImage2})`,
            filter: 'blur(3px)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <Badge className="mb-6 bg-forest-medium text-white">Powered by the LISTEN Method</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-forest-deep">
            The LISTEN Method
          </h2>
          <p className="text-lg mb-12 text-muted-foreground">
            The LISTEN Method guides every session, ensuring both you and your dog experience meaningful connection and growth.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { letter: "L", word: "Learn", description: "your dog's signals" },
              { letter: "I", word: "Invite", description: "exploration and choice" },
              { letter: "S", word: "Support", description: "nervous system regulation" },
              { letter: "T", word: "Trust", description: "the natural behavioral cycle" },
              { letter: "E", word: "Engage", description: "mindfully as a calm presence" },
              { letter: "N", word: "Nurture", description: "connection through shared experiences" }
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-soft bg-white/90 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.letter}
                  </div>
                  <h3 className="font-semibold text-forest-deep mb-2">{item.word}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-forest-deep">
            What Handlers Are Saying
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "After just two walks, my dog started checking in with me instead of pulling ahead constantly. I couldn't believe such a small change made such a big difference."
                  </p>
                  <p className="font-medium text-forest-deep">— Jessica, Golden Retriever owner</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-medium">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "After one session I finally understood how just the way I hold the leash makes a huge difference. I had no idea I was creating half the tension myself."
                  </p>
                  <p className="font-medium text-forest-deep">— Mike, German Shepherd mix owner</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-medium">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "I was so worried my dog would drag me everywhere, but with just a bit of time spent on anchoring techniques, our walks became actually enjoyable again."
                  </p>
                  <p className="font-medium text-forest-deep">— Sarah, Border Collie owner</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <ResponsiveImage 
                src={walkImage5}
                alt="Happy dog and handler after a successful decompression walk"
                className="rounded-2xl shadow-strong w-full max-w-lg"
              />
            </div>
          </div>
        </div>                  
      </section>

      {/* Final CTA */}
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

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-forest-deep text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Guided Decompression Walks™</h3>
            <p className="text-forest-light mb-6">
              Hosted by Pet Intel & Emotional Well-Being and Street Wise Canine
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-forest-light mb-6">
              <span>Saturdays, 3:00–4:00 PM</span>
              <span>•</span>
              <span>Richmond, ON</span>
              <span>•</span>
              <span>$35 per session</span>
            </div>
          </div>
          
          <div className="border-t border-forest-medium/30 pt-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-forest-light">
              <a 
                href="https://streetsmartcanine.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                Street Wise Canine <ExternalLink className="w-4 h-4" />
              </a>
              <span className="hidden md:inline">•</span>
              <a 
                href="https://petintel.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                Pet Intel <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
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
    </div>
  );
};

export default Index;
