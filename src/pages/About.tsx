import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Heart } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  const navigationItems = [
    {
      label: 'Home',
      action: () => window.location.href = '/',
      type: 'link' as const
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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-forest-deep">
            About The Decompression Method
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Where collaboration transcends controversy and connection comes first
          </p>
        </div>
      </section>

      {/* Why Decompression Unites Us */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              🌿 Why the Decompression Method Unites Us 🌿
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              When we focus on slowing down and really seeing our dogs, it brings together people from all different training backgrounds around something we all care about. This approach is simple: slow down, pay attention to your dog, and focus on building connection through understanding. It's something any individual can learn, no matter where they're starting from or coming from.
            </p>

            <div className="my-8">
              <p className="text-lg font-medium text-forest-deep mb-4">
                Whether you identify as "balanced," "force-free," "positive-first," or anywhere in between, decompression isn't about tools or training style. It's about:
              </p>
              <Card className="shadow-medium">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-1" />
                      <p>Respecting the dog's natural behavioral cycles</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-1" />
                      <p>Allowing choice and autonomy</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-1" />
                      <p>Prioritizing nervous system regulation over obedience</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-medium flex-shrink-0 mt-1" />
                      <p>Building trust and connection through shared presence</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg leading-relaxed">
              Cher (Street Wise Canine) and Jessica (Pet Intel) may approach training differently — one grounded in LIMA, one working within the CAPDT STOP list — yet both agree that decompression provides common ground. It's a controversy-free zone, where we can set aside debates and focus on giving dogs (and their people) what they truly need: space to breathe, reset, and reconnect.
            </p>

            <p className="text-lg leading-relaxed font-medium text-forest-deep">
              Decompression isn't about taking sides. It's about creating unity in our profession, and peace for the dogs we serve. 🐾
            </p>
          </div>
        </div>
      </section>

      {/* Finding Common Ground */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              Finding Common Ground
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              When Jessica and Cher first met, they were on totally different sides of the dog training fence. Different methods, different perspectives—you name it.
            </p>

            <p className="text-lg leading-relaxed">
              But what they did share was bigger than any difference: a lifelong passion for dogs and a drive to help them live their best lives. That shared commitment made them fast friends—and now, besties. Out of that friendship grew a partnership that blossomed into The Decompression Method.
            </p>

            <Card className="shadow-medium bg-forest-light/10 border-forest-medium/20">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  Sure, they still dive into the tough conversations (and they don't shy away from them), but they don't get stuck in endless debates. Instead, they always circle back to what matters most: helping dogs feel safe, seen, and supported.
                </p>
              </CardContent>
            </Card>

            <p className="text-lg leading-relaxed">
              Decompression gave them a common language—slow down, observe, let dogs regulate, and meet them where they are.
            </p>

            <p className="text-lg leading-relaxed font-medium text-forest-deep">
              Now, as colleagues and best friends, Jessica and Cher are proving that collaboration doesn't mean agreeing on everything—it means showing up with respect, curiosity, and a shared promise to put dogs first, always. 🐾💚
            </p>
          </div>
        </div>
      </section>

      {/* Bios Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              Meet the Founders
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Jessica Bio */}
            <Card className="shadow-strong hover:shadow-elegant transition-smooth">
              <CardHeader>
                <CardTitle className="text-2xl text-forest-deep">
                  Jessica Eden O'Neill
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Dip. Canine Behaviour Science & Technology, IAABC-ADT
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Jessica Eden O'Neill is a nationally recognized canine behaviour specialist, educator, and entrepreneur based in Ottawa, Ontario. She is the owner of Pet Intel. Behaviour Centre and JWalker Dog Products, where she has developed innovative programs and humane training tools that serve both dog guardians and professionals across North America.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Jessica's professional journey spans more than 20 years. She apprenticed under internationally respected behaviour specialists, completed intensive academic study, and earned her Diploma in Canine Behaviour Science & Technology from the Companion Animal Science Institute. She is an Accredited Dog Trainer (IAABC-ADT) with the International Association of Animal Behavior Consultants, and she is also the Chair of the Professional Standards & National Curriculum Committee (PSNC) of the Canadian Association of Professional Dog Trainers (CAPDT). In that role, she is leading the development of a national curriculum and registration process that will advance the professional standards of dog training across Canada.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Jessica's philosophy blends science, mindfulness, and compassion, prioritizing connection over control and nervous system regulation before training. She is an author, expert witness in canine behaviour, and a frequent public speaker on topics ranging from bite prevention and breed discrimination to service dog training and humane handling. Her book, <em>Parenting Your Canine Child: How Behaving Like a Dog Can Make You a Better Human</em>, was published in 2023 and explores the parallels between human and canine social worlds.
                </p>
              </CardContent>
            </Card>

            {/* Cher Bio */}
            <Card className="shadow-strong hover:shadow-elegant transition-smooth">
              <CardHeader>
                <CardTitle className="text-2xl text-forest-deep">
                  Cher Wood
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Founder, Street Wise Canine
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Cher Wood is the founder and head trainer of Street Wise Canine, bringing over 17 years of professional dog training experience to her community. Her lifelong work with dogs began in childhood, growing up immersed in dog breeding and showing. By her early teens, she was handling Scottish Terriers in the show ring and later gained further expertise as a groomer, building a strong foundation in canine communication, body language, and handling.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Since establishing her own training practice, Cher has worked with countless families and dogs, focusing on building confidence, resilience, and fulfillment through practical, enrichment-first approaches. She identifies as a "balanced" trainer, following the philosophy of LIMA (Least Intrusive, Minimally Aversive), while always emphasizing respect for the individual dog and clear communication for both ends of the leash.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cher is known for her ability to make complex training concepts accessible and applicable in everyday life. At home, she is guided and inspired by her six Chihuahuas—a pack that continuously reminds her that great training is never about size or labels, but about understanding, patience, and connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-forest-medium mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
              Ready to Experience the Method?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join us for a Guided Decompression Walk and discover how slowing down can transform your relationship with your dog.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/guided-walks">
              <Button variant="nature" size="lg" className="w-full sm:w-auto">
                Book Your Walk
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => window.open('mailto:cherwood87@gmail.com', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
