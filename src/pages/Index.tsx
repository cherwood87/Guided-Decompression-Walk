import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, MapPin, Clock, DollarSign, Users, Heart, Brain, Target, ChevronDown, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-decompression-walk.jpg';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-forest-deep text-lg">Guided Decompression Walks™</div>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
          >
            Book Your Walk
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${heroImage})` 
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Guided Decompression Walks™
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            A relationship-based, trainer-led walking experience. Give your dog freedom with guidance while you learn the skills to create connection, regulation, and repeatable calm.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5" />
              Long-line freedom
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Brain className="w-5 h-5" />
              Co-regulation skills
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Heart className="w-5 h-5" />
              Science-backed stress relief
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
            >
              Book Your Walk
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              onClick={() => scrollToSection('session-flow')}
            >
              See How It Works <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-forest-deep">
            Rethinking Relationships
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Guided Decompression Walks prioritize emotional well-being and natural behaviors over obedience drills. Based in affective neuroscience, this practice draws from Jaak Panksepp's research on mammalian emotional systems and modern co-regulation principles. Dogs decompress by downshifting their nervous system, exploring with choice, and engaging in restorative behaviors. Handlers learn to become calm anchors, guiding with awareness instead of control.
          </p>
        </div>
      </section>

      {/* Dual Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-forest-deep">
            Benefits for Both Ends of the Leash
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-forest-deep">
                  <Heart className="w-8 h-8 text-forest-medium" />
                  For Your Dog
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Explore safely on a 12–15 ft line</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Reduce stress and build confidence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Express natural behaviors (sniff, choose, pause)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Cycle naturally through arousal → regulation</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-forest-deep">
                  <Users className="w-8 h-8 text-forest-medium" />
                  For You (the Handler)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Learn to read emotional signals in real time</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Master long-line handling without pulling</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Use breath, pace, and posture to co-regulate</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Build confidence in mindful, repeatable skills</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Science of Decompression */}
      <section className="py-20 bg-forest-light/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-forest-deep">
            The Science of Decompression
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-forest-deep">Why It Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Chronic stress in dogs can come from restricted movement, overstimulation, or lack of choice. Decompression allows cortisol levels to lower, activates the parasympathetic nervous system, and restores balance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-forest-deep">The SEEKING System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Following their nose activates the dopamine-driven SEEKING system (Panksepp), building confidence and reducing anxiety.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-forest-deep">Natural Cycles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dogs move through predictable states — Arousal → Seeking → Observing → Sniffing → Grounding → Resting. On decompression walks, we honor these rhythms instead of interrupting them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Session Flow */}
      <section id="session-flow" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-forest-deep">
            What to Expect
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            This is not obedience. It's about connection, regulation, and well-being.
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Reactive / overstimulated dogs",
              "Rescue or newly adopted dogs", 
              "Foster dogs building resilience for adoption",
              "Young dogs learning safe exploration",
              "High-drive dogs needing mental structure",
              "Anxious or sensitive dogs",
              "Senior dogs benefiting from slower sniff-based walks",
              "Multi-handler households wanting shared skills",
              "Guardians seeking confidence and clarity",
              "Professionals refining long-line mechanics"
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6">
                  <CheckCircle className="w-8 h-8 text-forest-medium mx-auto mb-3" />
                  <p className="font-medium text-forest-deep">{item}</p>
                </CardContent>
              </Card>
            ))}
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
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button 
          variant="hero" 
          size="lg"
          onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
          className="shadow-strong"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Index;
