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
              A Complete System for Living With Dogs
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            The Decompression Method
          </h1>
          
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-light mb-8 text-white/90 max-w-3xl mx-auto">
            Where dogs and handlers learn to regulate together
          </h2>
          
          <p className="text-lg mb-10 leading-relaxed text-white/90 max-w-2xl mx-auto">
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
              onClick={() => scrollToSection('complete-problem')}
            >
              Learn the Complete System
            </Button>
          </div>
        </div>
      </section>

      {/* The Complete Problem */}
      <section id="complete-problem" className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              The Complete Problem We Solve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Most training focuses only on changing the dog's behavior. We focus on developing both partners because stressed dogs can't learn and stressed handlers can't help their dogs regulate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-forest-deep flex items-center gap-3">
                  <Heart className="w-8 h-8" />
                  For Dogs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-forest-medium rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Chronic stress prevents learning, choice-making, and natural regulation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-forest-medium rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Dogs stuck in fight-or-flight can't access their thinking brain</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-forest-medium rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Without choice and exploration, confidence never develops</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-forest-deep flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  For Handlers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-forest-medium rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Without regulation skills, you become a stress trigger for your dog</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-forest-medium rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Poor communication leads to frustration and daily conflicts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-forest-medium rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Not understanding canine needs creates constant battles</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-forest-deep bg-forest-light/20 rounded-lg p-6">
              The Result: Reactive dogs, stressed families, and relationships built on conflict instead of partnership.
            </p>
          </div>
        </div>
      </section>

      {/* How You Both Learn */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              How You Both Learn The Complete System
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This isn't just dog training where you teach and they learn. This is complete relationship development where both of you grow essential skills for living together successfully.
            </p>
          </div>

          <div className="space-y-16">
            {/* Experience the Foundation */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="shadow-strong border-forest-medium/20 bg-forest-light/10">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-forest-medium rounded-full flex items-center justify-center">
                        <Compass className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-forest-medium text-white">Start Here</Badge>
                    </div>
                    <CardTitle className="text-2xl text-forest-deep">Experience the Foundation</CardTitle>
                    <CardDescription className="text-base">
                      Guided Decompression Walks let you practice these life skills in real-time
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-forest-deep mb-2">Dogs Experience:</p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          <li>• Safe exploration that builds regulation skills</li>
                          <li>• Choice-making within supportive boundaries</li>
                          <li>• Natural behavioral cycles without interruption</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-forest-deep mb-2">Handlers Learn:</p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          <li>• Reading behavioral states and energy management</li>
                          <li>• Communication without control or force</li>
                          <li>• Skills that transfer to home, vet visits, everywhere</li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4">
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
                  alt="Dog and handler learning together during guided decompression walk"
                  className="rounded-xl shadow-medium w-full"
                />
              </div>
            </div>

            {/* Master the Complete System */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <ResponsiveImage 
                  src={walkImage2}
                  alt="Handler and dog practicing complete decompression method skills"
                  className="rounded-xl shadow-medium w-full"
                />
              </div>

              <div>
                <Card className="shadow-strong border-forest-medium/20 bg-forest-light/10">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-forest-medium rounded-full flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-forest-medium text-white">Coming Soon</Badge>
                    </div>
                    <CardTitle className="text-2xl text-forest-deep">Master the Complete System</CardTitle>
                    <CardDescription className="text-base">
                      Decompression Method Workshops teach both species everything needed for daily life success
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-forest-deep mb-2">Complete Handler Development:</p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          <li>• Personal nervous system regulation techniques</li>
                          <li>• Advanced communication and timing skills</li>
                          <li>• Equipment knowledge and environmental management</li>
                          <li>• Problem prevention for home, vet, travel, visitors</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-forest-deep mb-2">Complete Dog Development:</p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          <li>• Six behavioral state mastery and self-regulation</li>
                          <li>• Confidence building through guided choice-making</li>
                          <li>• Natural communication and trust building</li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button 
                        variant="soft" 
                        size="lg" 
                        className="w-full"
                        onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Workshop Information', '_blank')}
                      >
                        Join Workshop Interest List
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Share This Knowledge */}
            <div className="text-center">
              <Card className="shadow-strong border-forest-medium/20 bg-forest-light/10 max-w-2xl mx-auto">
                <CardHeader>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-forest-medium rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-forest-medium text-white">Coming 2025</Badge>
                  </div>
                  <CardTitle className="text-2xl text-forest-deep">Share This Knowledge</CardTitle>
                  <CardDescription className="text-base">
                    Professional Certification prepares you to guide other families through complete transformation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Complete methodology training and business support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Quality assurance and ongoing mentorship</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Help families discover relationship-based approaches</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="soft" 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Certification Interest', '_blank')}
                    >
                      Join Professional Interest List
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* LISTEN Method - Complete Framework */}
      <section id="method" className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              The LISTEN System - Your Complete Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Six principles that work everywhere—at home, on walks, at the vet, during storms, with visitors, and in every situation where both of you need to stay calm and connected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                letter: "L",
                word: "Listen",
                dogLearns: "Their communication is valued and understood",
                handlerLearns: "To read body language, energy, and environmental cues",
                together: "You develop a shared language"
              },
              {
                letter: "I", 
                word: "Invite",
                dogLearns: "To make choices and explore within safe boundaries",
                handlerLearns: "To offer opportunities without demanding compliance",
                together: "You build trust through respectful interaction"
              },
              {
                letter: "S",
                word: "Support", 
                dogLearns: "To regulate their nervous system during stress",
                handlerLearns: "Tools for staying calm and helping during overwhelm",
                together: "You become each other's safe harbor"
              },
              {
                letter: "T",
                word: "Trust",
                dogLearns: "To work through emotions without being rushed",
                handlerLearns: "To be patient with natural processes and timing",
                together: "You develop confidence in each other"
              },
              {
                letter: "E",
                word: "Engage",
                dogLearns: "That humans can be present partners, not just directors",
                handlerLearns: "Mindfulness, presence, and quality attention",
                together: "You create meaningful connection"
              },
              {
                letter: "N",
                word: "Nurture", 
                dogLearns: "That positive experiences with humans are safe and predictable",
                handlerLearns: "To celebrate small moments and build on success",
                together: "You strengthen your bond through shared joy"
              }
            ].map((item, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-forest-medium text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {item.letter}
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest-deep text-lg mb-2">{item.word}</h3>
                    </div>
                  </div>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-semibold text-forest-deep">Dogs learn:</p>
                      <p className="text-muted-foreground">{item.dogLearns}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-forest-deep">Handlers learn:</p>
                      <p className="text-muted-foreground">{item.handlerLearns}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-forest-deep">Together:</p>
                      <p className="text-muted-foreground">{item.together}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Changes for Both */}
      <section className="py-16 lg:py-20">
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
            {/* For Dogs */}
            <Card className="shadow-medium">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-light rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-forest-deep" />
                </div>
                <CardTitle className="text-2xl text-forest-deep">Dog Professionals</CardTitle>
                <CardDescription className="text-base">
                  Add gentle, effective methods that work with the toughest cases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Methods backed by modern nervous system science</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Tools that reduce stress and build confidence</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Help dogs others have given up on</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                    <span>Professional certification starting 2025</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    variant="soft" 
                    className="w-full"
                    onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Professional Inquiry', '_blank')}
                  >
                    Ask About Professional Training
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Actually Works */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
                Why This Actually Works
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                This isn't just wishful thinking. Modern research on how mammal brains work shows us that 
                dogs need the same basic things we do: safety, choice, and understanding. When both species learn regulation skills together, everything else becomes possible.
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
                alt="Peaceful dog exploring in natural environment with handler"
                className="rounded-xl shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Your Complete Journey */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
            Your Complete Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            This isn't just dog training where you teach and they learn. This isn't just self-help where you change and hope they follow. This is complete relationship development where both of you grow into better partners.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <Card className="shadow-medium">
              <CardHeader>
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

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-forest-deep">Go Deeper</CardTitle>
                <CardDescription>
                  Master the complete system in Decompression Method Workshops
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="soft" 
                  className="w-full"
                  onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Workshop Information', '_blank')}
                >
                  Learn About Workshops
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-forest-deep">Share It</CardTitle>
                <CardDescription>
                  Help other families through Professional Certification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="soft" 
                  className="w-full"
                  onClick={() => window.open('mailto:cherwood87@gmail.com?subject=Certification Interest', '_blank')}
                >
                  Join Interest List
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
            <h3 className="text-2xl md:text-3xl font-bold mb-6">True Transformation Happens When Both Species Learn Together</h3>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join the families who've discovered that the best relationships happen when dogs and handlers 
              learn to regulate, communicate, and grow together.
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