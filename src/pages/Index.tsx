import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, MapPin, Clock, DollarSign, Users, Heart, Brain, Target, ChevronDown, CheckCircle, Menu } from 'lucide-react';
import heroImage from '@/assets/hero-decompression-walk.jpg';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Minimal Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl drop-shadow-lg">Guided Decompression Walks™</div>
          <Button 
            variant="sunshine" 
            size="lg"
            className="shadow-2xl"
            onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
          >
            Book Your Walk
          </Button>
        </div>
      </nav>

      {/* Vertical Secondary Navigation */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
        <button onClick={() => scrollToSection('session-flow')} className="w-3 h-3 rounded-full bg-white/60 hover:bg-white transition-all hover:scale-125"></button>
        <button onClick={() => scrollToSection('benefits')} className="w-3 h-3 rounded-full bg-white/60 hover:bg-white transition-all hover:scale-125"></button>
        <button onClick={() => scrollToSection('pricing')} className="w-3 h-3 rounded-full bg-white/60 hover:bg-white transition-all hover:scale-125"></button>
      </div>

      {/* Immersive Hero Section with Large Image Dominance */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${heroImage})` 
          }}
        />
        
        {/* Integrated Typography with Transparent Overlay */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-12 max-w-5xl mx-auto border border-white/10">
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight bg-gradient-to-r from-white via-sunshine-light to-tangerine-light bg-clip-text text-transparent drop-shadow-2xl">
              Not your typical walk.<br />
              <span className="text-5xl md:text-7xl">Not miles. Moments.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium text-white/90">
              Guided Decompression Walks™ give your dog the freedom to explore while you learn the skills to enjoy calmer, more connected walks together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
              <div className="flex items-center gap-3 bg-gradient-emerald backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Long-line freedom</span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-warm backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Users className="w-6 h-6" />
                <span className="font-semibold">Trainer-led support</span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-tangerine to-sunshine backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Heart className="w-6 h-6" />
                <span className="font-semibold">Stress relief for both</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="sunshine" 
                size="xl"
                className="text-xl px-12 py-4 shadow-2xl transform hover:scale-105 transition-all"
                onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
              >
                Book Your Walk
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
                className="text-xl px-8 py-4 transform hover:scale-105 transition-all"
                onClick={() => scrollToSection('session-flow')}
              >
                See How It Works <ArrowDown className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What It Feels Like - Bold Card Layout */}
      <section className="py-24 bg-gradient-to-br from-sunshine-light/20 via-white to-tangerine/10 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-dark via-forest-medium to-emerald bg-clip-text text-transparent">
              What It Feels Like
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-red-50 to-orange-50 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-8 text-red-600 text-center">Sound Familiar?</h3>
                <div className="space-y-6 text-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Does your dog bark and lunge at everything on leash?</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Do you come home from walks more stressed than when you left?</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Are you avoiding busy sidewalks because walks feel overwhelming?</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-2xl border-0 bg-gradient-emerald transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-8 text-white text-center">Here's What Changes</h3>
                <div className="space-y-6 text-lg">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-sunshine flex-shrink-0" />
                    <p className="text-white">Your dog learns to explore calmly instead of frantically</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-sunshine flex-shrink-0" />
                    <p className="text-white">You both leave feeling more connected and relaxed</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-sunshine flex-shrink-0" />
                    <p className="text-white">Daily walks become something you actually look forward to</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-10">
                <p className="text-2xl leading-relaxed text-gray-700 font-medium">
                  These walks flip the script. We show you how to slow down, let your dog sniff, choose, and settle—and how to walk together without the constant tension.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dual Benefits - Bold Modular Design */}
      <section id="benefits" className="py-24 bg-gradient-to-br from-emerald-dark/10 via-white to-sunshine/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-warm bg-clip-text text-transparent">
              Benefits for Both Ends of the Leash
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-sunshine to-tangerine transform hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-8">
                <CardTitle className="flex items-center gap-4 text-white text-3xl font-bold">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  For Your Dog
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-lg font-medium">Explore safely on a 12–30 ft line</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-lg font-medium">Reduce stress and build confidence</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-lg font-medium">Sniff, pause, and make natural choices</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-lg font-medium">Move from arousal → regulation without being rushed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-0 bg-gradient-emerald transform hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-8">
                <CardTitle className="flex items-center gap-4 text-white text-3xl font-bold">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  For You (the Handler)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-lg font-medium">Read your dog's signals in real time</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-lg font-medium">Master long-line handling without pulling</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-lg font-medium">Use breath and body to co-regulate</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-lg font-medium">Leave with repeatable skills for calmer daily walks</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section id="session-flow" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-forest-deep">
            The Experience
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
            Each walk is a guided session on our 100-acre private property. Dogs explore safely on a long line while trainers coach you on handling, timing, and reading your dog's signals. You'll leave with a calmer dog and skills you can use on every walk.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-forest-deep">Arrival & Setup (5 min)</h3>
                  <p className="text-muted-foreground">Gear check (back-clip harness + 12+ ft line), route preview</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-forest-deep">Guided Walk (40–45 min)</h3>
                  <p className="text-muted-foreground">Follow your dog's exploration; trainers coach timing, body cues, and micro-exercises; no dog-dog greetings</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-forest-deep">Recap (5–10 min)</h3>
                  <p className="text-muted-foreground">Your dog's regulation profile + practice plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-forest-deep">
            Perfect For
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    <CheckCircle className="w-6 h-6 text-forest-medium flex-shrink-0 mt-0.5" />
                    <p className="font-medium text-forest-deep text-left">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-forest-light/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-forest-deep">
            Why It Works
          </h2>
          
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dogs need more than miles—they need moments to regulate. Research shows sniffing lowers stress hormones, activates the calm side of the nervous system, and builds confidence. Guided Decompression Walks™ combine this science with hands-on coaching so both ends of the leash can reset together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-forest-deep">Stress Relief</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Decompression allows cortisol levels to lower, activates the parasympathetic nervous system, and restores balance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-forest-deep">Confidence Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Following their nose activates the SEEKING system, building confidence and reducing anxiety naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-forest-deep">Natural Rhythms</CardTitle>
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

      {/* Pricing & Location - Bold Modular Cards */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-tangerine/20 via-sunshine/10 to-emerald/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Pricing */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-warm bg-clip-text text-transparent">Pricing & Packages</h2>
              <Card className="shadow-2xl border-0 bg-gradient-to-r from-red-500 to-orange-500 mb-8">
                <CardContent className="p-8 text-center">
                  <p className="text-white font-bold text-xl">
                    Spots are intentionally limited to keep groups small. Reserve now—your dog deserves this space.
                  </p>
                </CardContent>
              </Card>
              <div className="space-y-8">
                <Card className="shadow-2xl border-0 bg-white transform hover:scale-105 transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <CardTitle className="flex justify-between items-center text-2xl">
                      <span className="text-gray-700">Single Session</span>
                      <Badge variant="outline" className="text-2xl font-bold px-4 py-2 bg-sunshine text-white border-0">$35</Badge>
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600">Try it out</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-emerald-light/20 to-emerald/10 transform hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center text-2xl">
                      <span className="text-emerald-dark">3-Pack</span>
                      <div className="text-right">
                        <Badge variant="outline" className="text-2xl font-bold px-4 py-2 bg-emerald text-white border-0">$95</Badge>
                        <p className="text-sm text-emerald-dark font-semibold mt-1">save $10</p>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-lg text-emerald-dark/80">Build consistency</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="shadow-2xl border-0 bg-gradient-warm transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-bold">BEST VALUE</div>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center text-2xl">
                      <span className="text-white">6-Pack</span>
                      <div className="text-right">
                        <Badge className="bg-white text-tangerine text-2xl font-bold px-4 py-2 border-0">$185</Badge>
                        <p className="text-sm text-white font-semibold mt-1">save $25</p>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-lg text-white/90">Best value for habit-building</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              
              <div className="flex gap-6 mt-12">
                <Button 
                  variant="sunshine" 
                  className="flex-1 text-xl py-4"
                  onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
                >
                  Book Now
                </Button>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-emerald bg-clip-text text-transparent">Location Details</h2>
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-emerald-dark to-forest-medium text-white mb-8">
                <CardContent className="p-10">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-8 h-8 text-sunshine flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">Private 100-acre property, Richmond, ON</h3>
                        <p className="text-white/90">(directions after registration)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Target className="w-8 h-8 text-sunshine flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">Forest trails, meadows, gentle elevation</h3>
                        <p className="text-white/90">Varied terrain for natural exploration</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="w-8 h-8 text-sunshine flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">Saturdays, 3:00–4:00 PM</h3>
                        <p className="text-white/90">Light rain or shine; reschedule in severe weather</p>
                      </div>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-forest-deep">
  What Handlers Are Saying
</h2>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
     </div>                  
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Walks?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for a science-based walking experience that benefits both you and your dog.
          </p>
          
          <Button 
            variant="hero-outline" 
            size="xl"
            onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
          >
            Book Your Walk Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-forest-deep text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-4">Guided Decompression Walks™</h3>
          <p className="text-forest-light mb-6">
            Hosted by Pet Intel & Emotional Well-Being and Street Wise Canine
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-forest-light">
            <span>Saturdays, 3:00–4:00 PM</span>
            <span>•</span>
            <span>Richmond, ON</span>
            <span>•</span>
            <span>$35 per session</span>
          </div>
export default Index;
