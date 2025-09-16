import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Clock, Users, Heart, Brain, Target, CheckCircle, BookOpen, Award, Compass } from 'lucide-react';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/IMG_5736.jpeg';
import walkImage1 from '@/assets/IMG_0484.jpeg';
import walkImage2 from '@/assets/IMG_5703.jpeg';

const Index = () => {
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
            <Link 
              to="/guided-walks"
              className="hidden md:inline-block text-forest-medium hover:text-forest-deep transition-colors"
            >
              Guided Walks
            </Link>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${heroImage})` 
          }}
        />
        <div className="relative z-10 w-full max-w-4xl p-4 text-center text-white">
          <div className="mb-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium">
              Science-Based Approach to Dog Training
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            The Decompression Method™
          </h1>
          
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-light mb-8 text-white/90 max-w-3xl mx-auto">
            Where dogs and handlers learn to regulate together
          </h2>
          
          <p className="text-lg lg:text-xl mb-10 leading-relaxed text-white/90 max-w-2xl mx-auto">
            A revolutionary approach that prioritizes nervous system regulation, choice-making, and natural behaviors to build stronger relationships between dogs and their handlers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link to="/guided-walks">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Start with Guided Walks
              </Button>
            </Link>
            <Button 
              variant="hero-outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => scrollToSection('method')}
            >
              Learn the Method
            </Button>
          </div>
        </div>
      </section>

      {/* Method Overview */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              A Science-Based Approach to Connection
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Decompression Method™ is grounded in affective neuroscience and nervous system regulation principles. 
              Unlike traditional training that focuses on control and compliance, our approach prioritizes co-regulation, 
              choice-making, and the natural emotional systems that drive behavior.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Nervous System First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Address the root cause of reactive behaviors by supporting nervous system regulation rather than suppressing symptoms.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Connection Over Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build sustainable relationships through trust, communication, and mutual respect rather than dominance and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Choice & Agency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Empower dogs to make healthy choices within safe boundaries, building confidence and natural regulation skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience The Decompression Method through our carefully designed programs that meet dogs and handlers where they are.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <Card className="shadow-strong border-forest-medium/20 bg-forest-light/10">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-forest-medium rounded-full flex items-center justify-center">
                      <Compass className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-forest-medium text-white">Available Now</Badge>
                  </div>
                  <CardTitle className="text-2xl text-forest-deep">Guided Decompression Walks™</CardTitle>
                  <CardDescription className="text-base">
                    Your introduction to The Decompression Method through hands-on experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                      <span>60-minute sessions on 100 acres of private property</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                      <span>Learn the LISTEN Method in real-time</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                      <span>Long-line freedom with expert guidance</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                      <span>Perfect for reactive, anxious, or high-energy dogs</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link to="/guided-walks">
                      <Button variant="nature" size="lg" className="w-full">
                        Learn More About Guided Walks
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <ResponsiveImage 
                src={walkImage1}
                alt="Dog exploring freely during a guided decompression walk"
                className="rounded-xl shadow-medium w-full"
              />
            </div>
          </div>

          {/* Coming Soon Programs */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-forest-deep">Coming Soon</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="shadow-soft opacity-75">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <Badge variant="outline">Coming 2025</Badge>
                  </div>
                  <CardTitle className="text-xl">Professional Certification</CardTitle>
                  <CardDescription>
                    Comprehensive training for dog professionals in The Decompression Method
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-soft opacity-75">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <Badge variant="outline">Coming 2025</Badge>
                  </div>
                  <CardTitle className="text-xl">Online Foundation Course</CardTitle>
                  <CardDescription>
                    Self-paced learning modules for handlers to master the basics at home
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Pathways */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              Find Your Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a dog owner seeking better walks or a professional looking to expand your toolkit, 
              The Decompression Method meets you where you are.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-2xl text-forest-deep">For Dog Owners</CardTitle>
                <CardDescription className="text-base">
                  Transform your relationship with your dog through understanding and connection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Learn to read your dog's communication signals</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Develop co-regulation skills for calmer walks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Address reactive behaviors at their root</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link to="/guided-walks">
                    <Button variant="soft" className="w-full">
                      Start with Guided Walks
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-2xl text-forest-deep">For Professionals</CardTitle>
                <CardDescription className="text-base">
                  Expand your practice with science-based, relationship-centered methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Evidence-based approach rooted in neuroscience</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Tools for complex behavioral cases</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Certification programs (coming 2025)</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    variant="soft" 
                    className="w-full"
                    onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Professional Inquiry', '_blank')}
                  >
                    Contact for Professional Programs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LISTEN Method */}
      <section id="method" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              The LISTEN Method Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At the heart of The Decompression Method is our LISTEN framework—a systematic approach 
              to building connection and supporting regulation in both dogs and handlers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                letter: "L",
                word: "Listen",
                description: "To your dog's body language and communication signals"
              },
              {
                letter: "I", 
                word: "Invite",
                description: "Natural exploration and choice-making opportunities"
              },
              {
                letter: "S",
                word: "Support", 
                description: "Regulation through appropriate responses and guidance"
              },
              {
                letter: "T",
                word: "Trust",
                description: "The natural cycling process of arousal and regulation"
              },
              {
                letter: "E",
                word: "Engage",
                description: "Mindfully as a supportive, calm presence"
              },
              {
                letter: "N",
                word: "Nurture", 
                description: "The connection through shared positive experiences"
              }
            ].map((item, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-forest-medium text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {item.letter}
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest-deep text-lg mb-2">{item.word}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Science Behind the Method */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
                Grounded in Science
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Decompression Method is founded on the groundbreaking work of affective neuroscientist 
                Jaak Panksepp, who identified the core emotional systems that drive behavior in all mammals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-deep mb-1">SEEKING System Activation</h3>
                    <p className="text-muted-foreground">Healthy exploration and curiosity reduce anxiety and build confidence</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-deep mb-1">Co-Regulation Principles</h3>
                    <p className="text-muted-foreground">One nervous system helping another achieve balance and calm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-deep mb-1">Natural Behavioral Cycles</h3>
                    <p className="text-muted-foreground">Allowing natural progression through arousal, exploration, and rest</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ResponsiveImage 
                src={walkImage2}
                alt="Peaceful dog exploring in natural environment"
                className="rounded-xl shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
            Ready to Begin?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every journey with The Decompression Method starts with understanding. 
            Take the first step toward a deeper connection with your dog.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-forest-deep">New to the Method?</CardTitle>
                <CardDescription>
                  Start with our Guided Decompression Walks to experience the approach firsthand
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/guided-walks">
                  <Button variant="nature" className="w-full">
                    Book Your First Walk
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-forest-deep">Have Questions?</CardTitle>
                <CardDescription>
                  Connect with us to learn more about how The Decompression Method can help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="soft" 
                  className="w-full"
                  onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Decompression Method Inquiry', '_blank')}
                >
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-deep text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Transform Your Relationship with Your Dog</h3>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join the growing community of handlers and dogs discovering the power of connection, 
              choice, and co-regulation through The Decompression Method.
            </p>
            
            <Link to="/guided-walks">
              <Button variant="hero-outline" size="lg" className="mb-12">
                Start Your Journey Today
              </Button>
            </Link>
            
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
    </div>
  );
};

export default Index;