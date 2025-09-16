import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Clock, Users, Heart, Brain, Target, CheckCircle, BookOpen, Award, Compass } from 'lucide-react';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/IMG_5713.jpg';
import walkImage1 from '@/assets/IMG_5736.jpeg';
import walkImage2 from '@/assets/Image 1.jpg';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationItems = [
    {
      label: 'LISTEN Method',
      action: () => scrollToSection('method'),
      type: 'scroll' as const
    },
    {
      label: 'Programs',
      action: () => scrollToSection('programs'),
      type: 'scroll' as const
    },
    {
      label: 'Guided Walks',
      action: () => window.location.href = '/guided-walks',
      type: 'link' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation items={navigationItems} />

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
              A Complete System for Living With Dogs
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            The Decompression Method
          </h1>
          
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-light mb-8 text-white/90 max-w-3xl mx-auto">
            Where dogs and handlers learn to regulate together
          </h2>
          
          <p className="text-lg lg:text-xl mb-8 text-white/80 max-w-4xl mx-auto leading-relaxed">
            What if your dog's pulling, reactivity, and stress weren't problems to fix, but messages to understand? Learn a complete approach to living with your dog—one where both of you develop essential skills for every situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link to="/guided-walks">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Experience It Firsthand
              </Button>
            </Link>
            <Button 
              variant="hero-outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => scrollToSection('method')}
            >
              Learn the Complete System
            </Button>
          </div>
        </div>
      </section>

      {/* The Complete Problem We Solve */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              The Complete Problem We Solve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Most training focuses only on changing the dog's behavior. We focus on developing both partners because stressed dogs can't learn and stressed handlers can't help their dogs regulate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep text-center">For Dogs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Chronic stress prevents learning, choice-making, and natural regulation</p>
                  <p>• Dogs stuck in fight-or-flight can't access their thinking brain</p>
                  <p>• Without choice and exploration, confidence never develops</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep text-center">For Handlers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Without regulation skills, you become a stress trigger for your dog</p>
                  <p>• Poor communication leads to frustration and daily conflicts</p>
                  <p>• Not understanding canine needs creates constant battles</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth border-destructive/20 bg-destructive/5">
              <CardHeader>
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-destructive" />
                </div>
                <CardTitle className="text-xl text-destructive text-center">The Result</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-destructive font-medium text-center">
                  Reactive dogs, stressed families, and relationships built on conflict instead of partnership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How You Both Learn The Complete System */}
      <section id="programs" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              How You Both Learn The Complete System
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This isn't just dog training where you teach and they learn. This is complete relationship development where both of you grow essential skills for living together successfully.
            </p>
          </div>

          {/* Experience the Foundation */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="bg-forest-medium text-white mb-4">Start Here</Badge>
              <h3 className="text-2xl font-bold text-forest-deep">Experience the Foundation</h3>
              <p className="text-muted-foreground mt-2">Guided Decompression Walks let you practice these life skills in real-time</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="shadow-strong border-forest-medium/20 bg-forest-light/10">
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-forest-deep mb-3">Dogs Experience:</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>• Safe exploration that builds regulation skills</p>
                          <p>• Choice-making within supportive boundaries</p>
                          <p>• Natural behavioral cycles without interruption</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-deep mb-3">Handlers Learn:</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>• Reading behavioral states and energy management</p>
                          <p>• Communication without control or force</p>
                          <p>• Skills that transfer to home, vet visits, everywhere</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <Link to="/guided-walks">
                        <Button variant="nature" size="lg" className="w-full">
                          Book Your Foundation Experience
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
                  alt="Dog and handler experiencing guided decompression walk"
                  className="rounded-xl shadow-medium w-full"
                />
              </div>
            </div>
          </div>

          {/* Master the Complete System */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Coming Soon</Badge>
              <h3 className="text-2xl font-bold text-forest-deep">Master the Complete System</h3>
              <p className="text-muted-foreground mt-2">Decompression Method Workshops teach both species everything needed for daily life success</p>
            </div>
            
            <Card className="shadow-soft opacity-75">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-forest-deep mb-3">Complete Handler Development:</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Personal nervous system regulation techniques</p>
                      <p>• Advanced communication and timing skills</p>
                      <p>• Equipment knowledge and environmental management</p>
                      <p>• Problem prevention for home, vet, travel, visitors</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-deep mb-3">Complete Dog Development:</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Six behavioral state mastery and self-regulation</p>
                      <p>• Confidence building through guided choice-making</p>
                      <p>• Natural communication and trust building</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <Button 
                    variant="soft" 
                    className="w-full" 
                    onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Workshop Interest', '_blank')}
                  >
                    Join Workshop Interest List
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Share This Knowledge */}
          <div>
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Coming 2025</Badge>
              <h3 className="text-2xl font-bold text-forest-deep">Share This Knowledge</h3>
              <p className="text-muted-foreground mt-2">Professional Certification prepares you to guide other families through complete transformation</p>
            </div>
            
            <Card className="shadow-soft opacity-75">
              <CardContent className="pt-6">
                <div className="space-y-3 text-sm text-muted-foreground text-center">
                  <p>• Complete methodology training and business support</p>
                  <p>• Quality assurance and ongoing mentorship</p>
                  <p>• Help families discover relationship-based approaches</p>
                </div>
                <div className="pt-6">
                  <Button 
                    variant="soft" 
                    className="w-full" 
                    onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Professional Certification Interest', '_blank')}
                  >
                    Join Professional Interest List
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Changes for Both of You */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              What Changes for Both of You
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              When both species learn regulation skills together, everything else becomes possible. This creates lasting change that transforms your entire relationship.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">For Dogs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Decreased reactivity and anxiety in all situations</p>
                  <p>• Increased confidence and decision-making ability</p>
                  <p>• Better self-regulation during stress</p>
                  <p>• Stronger communication with humans</p>
                  <p>• Deeper trust in human partnership</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-xl text-forest-deep">For Handlers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Stay calm under pressure in any situation</p>
                  <p>• Clear communication that prevents problems</p>
                  <p>• Confidence in reading and responding to your dog</p>
                  <p>• Tools for helping your dog anywhere</p>
                  <p>• Natural leadership that feels good to both of you</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth border-forest-medium/20 bg-forest-light/10">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-forest-deep">For Your Relationship</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Partnership instead of constant management</p>
                  <p>• Clear communication that reduces conflict</p>
                  <p>• Shared experiences that build connection</p>
                  <p>• Daily life that flows more smoothly</p>
                  <p>• Trust that supports all other training</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LISTEN System - Your Complete Framework */}
      <section id="method" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              The LISTEN System – Your Complete Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Six principles that work everywhere—at home, on walks, at the vet, during storms, with visitors, and in every situation where both of you need to stay calm and connected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                letter: "L",
                word: "Listen",
                dogLearn: "Their communication is valued and understood",
                handlerLearn: "To read body language, energy, and environmental cues",
                together: "You develop a shared language"
              },
              {
                letter: "I", 
                word: "Invite",
                dogLearn: "To make choices and explore within safe boundaries",
                handlerLearn: "To offer opportunities without demanding compliance",
                together: "You build trust through respectful interaction"
              },
              {
                letter: "S",
                word: "Support", 
                dogLearn: "To regulate their nervous system during stress",
                handlerLearn: "Tools for staying calm and helping during overwhelm", 
                together: "You become each other's safe harbor"
              },
              {
                letter: "T",
                word: "Trust",
                dogLearn: "To work through emotions without being rushed",
                handlerLearn: "To be patient with natural processes and timing",
                together: "You develop confidence in each other"
              },
              {
                letter: "E",
                word: "Engage",
                dogLearn: "That humans can be present partners, not just directors",
                handlerLearn: "Mindfulness, presence, and quality attention",
                together: "You create meaningful connection"
              },
              {
                letter: "N",
                word: "Nurture", 
                dogLearn: "That positive experiences with humans are safe and predictable",
                handlerLearn: "To celebrate small moments and build on success",
                together: "You strengthen your bond through shared joy"
              }
            ].map((item, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-forest-medium text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                      {item.letter}
                    </div>
                    <h3 className="font-bold text-forest-deep text-xl">{item.word}</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-forest-deep mb-1">Dogs learn:</p>
                      <p className="text-muted-foreground">{item.dogLearn}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-forest-deep mb-1">Handlers learn:</p>
                      <p className="text-muted-foreground">{item.handlerLearn}</p>
                    </div>
                    <div className="pt-2 border-t border-muted">
                      <p className="font-semibold text-forest-medium mb-1">Together:</p>
                      <p className="text-muted-foreground">{item.together}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Actually Works */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
                Why This Actually Works
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                This isn't just wishful thinking. Modern research on how mammal brains work shows us that dogs need the same basic things we do: safety, choice, and understanding. When both species learn regulation skills together, everything else becomes possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-deep mb-1">Curiosity Calms Anxiety</h3>
                    <p className="text-muted-foreground">When dogs can explore what interests them, their stress naturally decreases and confidence builds through their natural SEEKING system</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-deep mb-1">Calm Is Contagious</h3>
                    <p className="text-muted-foreground">When you're truly relaxed and regulated, your dog feels it and starts to relax too. This co-regulation creates lasting change</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-forest-deep mb-1">Natural Rhythms Matter</h3>
                    <p className="text-muted-foreground">Dogs need time to get excited, explore, and then settle down—just like we do. Honoring these cycles builds trust and reduces stress</p>
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

      {/* Your Complete Journey */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
            Your Complete Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            This isn't just dog training where you teach and they learn. This isn't just self-help where you change and hope they follow. This is complete relationship development where both of you grow into better partners.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-forest-deep">Start Here</CardTitle>
                <CardDescription>
                  Experience the foundation through Guided Decompression Walks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/guided-walks">
                  <Button variant="nature" className="w-full">
                    Book Your First Experience
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-medium opacity-75">
              <CardHeader>
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="w-8 h-8 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl text-muted-foreground">Go Deeper</CardTitle>
                <CardDescription>
                  Master the complete system in Decompression Method Workshops
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="soft" 
                  className="w-full" 
                  onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Workshop Interest', '_blank')}
                >
                  Learn About Workshops
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium opacity-75">
              <CardHeader>
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-8 h-8 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl text-muted-foreground">Share It</CardTitle>
                <CardDescription>
                  Help other families through Professional Certification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="soft" 
                  className="w-full"
                  onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Professional Certification Interest', '_blank')}
                >
                  Join Interest List
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;