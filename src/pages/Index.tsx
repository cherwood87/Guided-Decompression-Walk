import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Clock, Users, Heart, Brain, Target, CheckCircle, BookOpen, Award, Compass } from 'lucide-react';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/IMG_5713.jpg';
import walkImage1 from '@/assets/IMG_5736.jpeg';
import walkImage2 from '@/assets/IMG_8247.jpeg';
const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-forest-deep text-lg md:text-xl">The Decompression Method</div>
          <div className="flex items-center gap-4">
            <Link to="/guided-walks" className="hidden md:inline-block text-forest-medium hover:text-forest-deep transition-colors">
              Guided Walks
            </Link>
            <Button variant="hero" size="sm" className="touch-target h-10 px-4 md:h-12 md:px-6" onClick={() => window.open('mailto:cherwood87@gmail.com', '_blank')}>
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${heroImage})`
      }} />
        <div className="relative z-10 w-full max-w-4xl p-4 text-center text-white">
          <div className="mb-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium">
              What if your dog was trying to tell you something?
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            The Decompression Method
          </h1>
          
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-light mb-8 text-white/90 max-w-3xl mx-auto">
            Where walks become conversations
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link to="/guided-walks">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Try a Guided Walk
              </Button>
            </Link>
            <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" onClick={() => scrollToSection('method')}>Learn More</Button>
          </div>
        </div>
      </section>

      {/* Method Overview */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              What Makes This Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Most training tells dogs what not to do. We help them learn what they actually need. When dogs feel safe to be themselves, everything changes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Calm First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  When dogs are stressed, they can't learn or listen. We help them find calm so they can actually hear what you're asking.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Partnership Over Power</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Strong relationships aren't built on who's in charge. They're built on trust, clear communication, and respect for each other.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Choice Builds Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dogs who get to make safe choices become more confident, less reactive, and easier to work with in all situations.
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
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience this approach through our guided walks, where you'll see firsthand how different things can be.
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
                  <CardTitle className="text-2xl text-forest-deep">Guided Decompression Walks</CardTitle>
                  <CardDescription className="text-base">
                    See what happens when your dog gets to be a dog
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                      <span>60 minutes on 100 private acres—space to breathe</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                      <span>Learn to read what your dog is really telling you</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                      <span>30-foot line means freedom to explore safely</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                      <span>Perfect for dogs who pull, react, or seem stressed</span>
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
              <ResponsiveImage src={walkImage1} alt="Dog exploring freely during a guided decompression walk" className="rounded-xl shadow-medium w-full" />
            </div>
          </div>

          {/* Coming Soon Programs */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-forest-deep">What's Next</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="shadow-soft opacity-75">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <Badge variant="outline">Coming 2025</Badge>
                  </div>
                  <CardTitle className="text-xl">Train the Trainers</CardTitle>
                  <CardDescription>
                    Teaching other dog professionals this gentler way of working with dogs and their families
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
                  <CardTitle className="text-xl">Learn from Home</CardTitle>
                  <CardDescription>
                    Online courses so you can practice these skills in your own neighborhood and routine
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
              Who This Helps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're struggling with daily walks or you're a trainer looking for better tools, 
              this approach meets you where you are.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-2xl text-forest-deep">Dog Families</CardTitle>
                <CardDescription className="text-base">
                  Turn stressful walks into the best part of your day, for both of you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Finally understand what your dog is trying to tell you</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Learn simple techniques that actually work</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Stop the pulling and reactivity without fighting</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link to="/guided-walks">
                    <Button variant="soft" className="w-full">
                      Book Your First Walk
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
                <CardTitle className="text-2xl text-forest-deep">Dog Professionals</CardTitle>
                <CardDescription className="text-base">
                  Add gentle, effective tools to help the toughest cases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Modern methods for real behavior change</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Methods that reduce stress and build confidence</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Professional certification coming soon</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button variant="soft" className="w-full" onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Professional Inquiry', '_blank')}>
                    Ask About Professional Training
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
              The LISTEN Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Six simple steps that change everything about how you and your dog experience walks together. 
              No complicated theories—just practical ways to connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            letter: "L",
            word: "Listen",
            description: "Pay attention to what your dog's body is telling you"
          }, {
            letter: "I",
            word: "Invite",
            description: "Give them choices about where to go and what to explore"
          }, {
            letter: "S",
            word: "Support",
            description: "Help them stay calm when they get overwhelmed"
          }, {
            letter: "T",
            word: "Trust",
            description: "Let them work through their feelings without rushing"
          }, {
            letter: "E",
            word: "Engage",
            description: "Be present and calm, not distracted or anxious"
          }, {
            letter: "N",
            word: "Nurture",
            description: "Build good memories and positive experiences together"
          }].map((item, index) => <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
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
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
                Why This Actually Works
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                This isn't just wishful thinking. Modern research on how mammal brains work shows us that 
                dogs need the same basic things we do: safety, choice, and understanding.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-deep mb-1">Curiosity Calms Anxiety</h3>
                    <p className="text-muted-foreground">When dogs can explore what interests them, their stress naturally decreases</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-deep mb-1">Calm Is Contagious</h3>
                    <p className="text-muted-foreground">When you're truly relaxed, your dog feels it and starts to relax too</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-deep mb-1">Natural Rhythms Matter</h3>
                    <p className="text-muted-foreground">Dogs need time to get excited, explore, and then settle down—just like we do</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ResponsiveImage src={walkImage2} alt="Peaceful dog exploring in natural environment" className="rounded-xl shadow-medium w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
            Ready to Try Something Different?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every great relationship starts with understanding. Let's help you and your dog 
            discover what's possible when you both feel heard.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-forest-deep">Never Done This Before?</CardTitle>
                <CardDescription>
                  Try a guided walk to experience this approach with your dog firsthand
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
                <CardTitle className="text-xl text-forest-deep">Want to Know More?</CardTitle>
                <CardDescription>
                  Get in touch to learn how this might help you and your dog
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="soft" className="w-full" onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Tell Me More', '_blank')}>
                  Ask Questions
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
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Walks Don't Have to Be Hard</h3>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join the families who've discovered that the best walks happen when both species 
              feel safe, understood, and free to be themselves.
            </p>
            
            <Link to="/guided-walks">
              <Button variant="hero-outline" size="lg" className="mb-12">
                Let's Get Started
              </Button>
            </Link>
            
            <div className="border-t border-white/20 pt-8">
              <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
                {/* Street Wise Canine */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Street Wise Canine</h4>
                  <div className="space-y-2">
                    <a href="https://streetwisecanine.ca" className="block text-white/80 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      streetsmartcanine.ca
                    </a>
                  </div>
                </div>
                
                {/* Pet Intel */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Pet Intel</h4>
                  <div className="space-y-2">
                    <a href="https://petintel.ca" className="block text-white/80 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
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
    </div>;
};
export default Index;