import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, MapPin, Clock, DollarSign, Users, Heart, Brain, Target, ChevronDown, CheckCircle } from 'lucide-react';
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
          <div className="font-bold text-forest-deep text-fluid-lg tablet-p:text-fluid-xl">Guided Decompression Walks™</div>
          <Button 
            variant="hero" 
            size="sm"
            className="touch-target tablet-p:h-12 tablet-p:px-6"
            onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
          >
            Book Your Walk
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start justify-start overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.1)), url(${heroImage})` 
          }}
        />
        <div className="relative z-10 container mx-auto px-4 pt-8 md:pt-16 max-w-2xl text-white">
          <h1 className="text-fluid-4xl md:text-fluid-6xl font-bold mb-6 leading-tight text-left">
            Not your typical walk.<br />Not miles. Moments.
          </h1>
          <p className="text-fluid-lg md:text-fluid-xl mb-8 leading-relaxed text-left">
            Guided Decompression Walks™ give your dog the freedom to explore while you learn the skills to enjoy calmer, more connected walks together.
          </p>
          
          <div className="flex flex-wrap justify-start gap-3 tablet-p:gap-4 mb-8 text-fluid-sm md:text-fluid-base">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 tablet-p:px-6 tablet-p:py-3">
              <CheckCircle className="w-5 h-5 tablet-p:w-6 tablet-p:h-6" />
              Long-line freedom
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 tablet-p:px-6 tablet-p:py-3">
              <Users className="w-5 h-5 tablet-p:w-6 tablet-p:h-6" />
              Trainer-led support
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 tablet-p:px-6 tablet-p:py-3">
              <Heart className="w-5 h-5 tablet-p:w-6 tablet-p:h-6" />
              Stress relief for both ends of the leash
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start tablet-p:gap-6">
            <Button 
              variant="hero" 
              size="xl"
              className="touch-target w-full sm:w-auto tablet-p:h-16 tablet-p:px-12 tablet-p:text-fluid-lg"
              onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
            >
              Book Your Walk
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              className="touch-target w-full sm:w-auto tablet-p:h-16 tablet-p:px-12 tablet-p:text-fluid-lg"
              onClick={() => scrollToSection('session-flow')}
            >
              See How It Works <ArrowDown className="w-5 h-5 ml-2 tablet-p:w-6 tablet-p:h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* What It Feels Like */}
      <section className="py-12 tablet-p:py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-8 tablet-p:mb-12 text-center text-forest-deep">
            What It Feels Like
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 tablet-p:gap-8 lg:gap-12 mb-8 tablet-p:mb-12 items-center">
            <div className="text-center tablet-p:text-left">
              <h3 className="text-fluid-xl font-semibold mb-4 text-forest-deep">Sound Familiar?</h3>
              <div className="space-y-3 text-muted-foreground text-fluid-base">
                <p>• Does your dog bark and lunge at everything on leash?</p>
                <p>• Do you come home from walks more stressed than when you left?</p>
                <p>• Are you avoiding busy sidewalks because walks feel overwhelming?</p>
              </div>
              <div className="mt-6">
                <ResponsiveImage 
                  src={walkImage1}
                  alt="Dog walking scenario showing common challenges"
                  className="rounded-xl shadow-medium w-full max-w-md mx-auto tablet-p:mx-0"
                />
              </div>
            </div>
            
            <div className="text-center tablet-p:text-left">
              <h3 className="text-fluid-xl font-semibold mb-4 text-forest-deep">Here's What Changes</h3>
              <div className="space-y-3 text-muted-foreground text-fluid-base">
                <p>• Your dog learns to explore calmly instead of frantically</p>
                <p>• You both leave feeling more connected and relaxed</p>
                <p>• Daily walks become something you actually look forward to</p>
              </div>
              <div className="mt-6">
                <ResponsiveImage 
                  src={walkImage2}
                  alt="Peaceful dog walk showing positive changes"
                  className="rounded-xl shadow-medium w-full max-w-md mx-auto tablet-p:mx-0"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-fluid-lg leading-relaxed text-muted-foreground">
              These walks flip the script. We show you how to slow down, let your dog sniff, choose, and settle—and how to walk together without the constant tension.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Benefits */}
      <section className="py-12 tablet-p:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-center mb-12 tablet-p:mb-16 text-forest-deep">
            Benefits for Both Ends of the Leash
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 tablet-p:gap-8 lg:gap-12 max-w-6xl mx-auto">
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-forest-deep text-fluid-xl tablet-p:text-fluid-2xl">
                  <Heart className="w-8 h-8 tablet-p:w-10 tablet-p:h-10 text-forest-medium" />
                  For Your Dog
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 tablet-p:w-6 tablet-p:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span className="text-fluid-base">Explore safely on a 12–30 ft line</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 tablet-p:w-6 tablet-p:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span className="text-fluid-base">Reduce stress and build confidence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 tablet-p:w-6 tablet-p:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span className="text-fluid-base">Sniff, pause, and make natural choices</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 tablet-p:w-6 tablet-p:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span className="text-fluid-base">Move from arousal → regulation without being rushed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-forest-deep text-fluid-xl tablet-p:text-fluid-2xl">
                  <Users className="w-8 h-8 tablet-p:w-10 tablet-p:h-10 text-forest-medium" />
                  For You (the Handler)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 tablet-p:w-6 tablet-p:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span className="text-fluid-base">Read your dog's signals in real time</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 tablet-p:w-6 tablet-p:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span className="text-fluid-base">Master long-line handling without pulling</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 tablet-p:w-6 tablet-p:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span className="text-fluid-base">Use breath and body to co-regulate</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 tablet-p:w-6 tablet-p:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span className="text-fluid-base">Leave with repeatable skills for calmer daily walks</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section id="session-flow" className="py-12 tablet-p:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-center mb-4 text-forest-deep">
            The Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12 tablet-p:mb-16 max-w-4xl mx-auto text-fluid-lg">
            Each walk is a guided session on our 100-acre private property. Dogs explore safely on a long line while trainers coach you on handling, timing, and reading your dog's signals. You'll leave with a calmer dog and skills you can use on every walk.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6 tablet-p:gap-8 lg:gap-10">
              <div className="flex items-start gap-4 tablet-p:gap-6">
                <div className="w-12 h-12 tablet-p:w-16 tablet-p:h-16 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-fluid-xl tablet-p:text-fluid-2xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-fluid-xl tablet-p:text-fluid-2xl font-semibold mb-2 text-forest-deep">Arrival & Setup (5 min)</h3>
                  <p className="text-muted-foreground text-fluid-base">Gear check (back-clip harness + 12+ ft line), route preview</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 tablet-p:gap-6">
                <div className="w-12 h-12 tablet-p:w-16 tablet-p:h-16 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-fluid-xl tablet-p:text-fluid-2xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-fluid-xl tablet-p:text-fluid-2xl font-semibold mb-2 text-forest-deep">Guided Walk (40–45 min)</h3>
                  <p className="text-muted-foreground text-fluid-base">Follow your dog's exploration; trainers coach timing, body cues, and micro-exercises; no dog-dog greetings</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 tablet-p:gap-6">
                <div className="w-12 h-12 tablet-p:w-16 tablet-p:h-16 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-fluid-xl tablet-p:text-fluid-2xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-fluid-xl tablet-p:text-fluid-2xl font-semibold mb-2 text-forest-deep">Recap (5–10 min)</h3>
                  <p className="text-muted-foreground text-fluid-base">Your dog's regulation profile + practice plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Grid */}
      <section className="py-12 tablet-p:py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-center mb-12 tablet-p:mb-16 text-forest-deep">
            Perfect For
          </h2>
          
          <div className="grid md:grid-cols-2 tablet-l:grid-cols-3 gap-6 tablet-p:gap-8 max-w-6xl mx-auto">
            {[
              "If your dog barks and lunges at other dogs",
              "If your rescue needs a safe way to build confidence",
              "If you avoid busy sidewalks because walks feel overwhelming",
              "If your high-energy dog never seems tired after a walk",
              "If you want calmer, more connected outings with your dog",
              "If your anxious dog needs gentle confidence building"
            ].map((item, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 tablet-p:w-7 tablet-p:h-7 text-forest-medium flex-shrink-0 mt-0.5" />
                    <p className="font-medium text-forest-deep text-left text-fluid-base">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-12 tablet-p:py-16 lg:py-20 bg-forest-light/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-center mb-6 tablet-p:mb-8 text-forest-deep">
            Why It Works
          </h2>
          
          <div className="text-center mb-8 tablet-p:mb-12 max-w-4xl mx-auto">
            <p className="text-fluid-lg text-muted-foreground leading-relaxed">
              Dogs need more than miles—they need moments to regulate. Research shows sniffing lowers stress hormones, activates the calm side of the nervous system, and builds confidence. Guided Decompression Walks™ combine this science with hands-on coaching so both ends of the leash can reset together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 tablet-p:gap-8">
            <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 tablet-p:w-20 tablet-p:h-20 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 tablet-p:w-10 tablet-p:h-10 text-white" />
                </div>
                <CardTitle className="text-forest-deep text-fluid-xl">Stress Relief</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-fluid-base">
                  Decompression allows cortisol levels to lower, activates the parasympathetic nervous system, and restores balance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 tablet-p:w-20 tablet-p:h-20 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 tablet-p:w-10 tablet-p:h-10 text-white" />
                </div>
                <CardTitle className="text-forest-deep text-fluid-xl">Confidence Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-fluid-base">
                  Following their nose activates the SEEKING system, building confidence and reducing anxiety naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 tablet-p:w-20 tablet-p:h-20 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 tablet-p:w-10 tablet-p:h-10 text-white" />
                </div>
                <CardTitle className="text-forest-deep text-fluid-xl">Natural Rhythms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-fluid-base">
                  Dogs move through predictable states. On decompression walks, we honor these rhythms instead of interrupting them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Pricing */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-forest-deep">Pricing & Packages</h2>
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
              <h2 className="text-3xl font-bold mb-8 text-forest-deep">Location Details</h2>
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
                      <p className="text-muted-foreground">Light rain or shine; reschedule in severe weather</p>
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
      <section className="py-20 bg-forest-light/20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge className="mb-6 bg-forest-medium text-white">Powered by the LISTEN Method</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-forest-deep">
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
              <Card key={index} className="text-center shadow-soft">
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
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-forest-deep">
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
      <section className="py-12 tablet-p:py-16 lg:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Ready to Transform Your Walks?
          </h2>
          <p className="text-fluid-xl mb-8 max-w-3xl mx-auto">
            Join us for a science-based walking experience that benefits both you and your dog.
          </p>
          
          <Button 
            variant="hero-outline" 
            size="xl"
            className="touch-target tablet-p:h-16 tablet-p:px-12 tablet-p:text-fluid-lg"
            onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
          >
            Book Your Walk Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 tablet-p:py-12 bg-forest-deep text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-fluid-xl font-semibold mb-4">Guided Decompression Walks™</h3>
          <p className="text-forest-light mb-6 text-fluid-base">
            Hosted by Pet Intel & Emotional Well-Being and Street Wise Canine
          </p>
          <div className="flex flex-wrap justify-center gap-4 tablet-p:gap-6 text-fluid-sm text-forest-light">
            <span>Saturdays, 3:00–4:00 PM</span>
            <span>•</span>
            <span>Richmond, ON</span>
            <span>•</span>
            <span>$35 per session</span>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 right-4 z-50 tablet-p:bottom-6 tablet-p:right-6">
        <Button 
          variant="hero" 
          size="lg"
          onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
          className="shadow-strong touch-target tablet-p:h-14 tablet-p:px-8 tablet-p:text-fluid-base"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Index;
