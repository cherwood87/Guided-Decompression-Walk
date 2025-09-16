import { Card, CardContent } from '@/components/ui/card';
import { Brain, Heart, Users, Target } from 'lucide-react';

export const MethodOverviewSection = () => {
  return (
    <section id="method-overview" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-forest-deep">
          The Science Behind the Method
        </h2>
        
        <div className="text-center mb-8 md:mb-12 max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Grounded in affective neuroscience and nervous system regulation, The Decompression Method recognizes that lasting behavioral change comes from supporting the emotional systems that drive behavior—not just managing symptoms.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-forest-deep mb-3">SEEKING System</h3>
              <p className="text-sm text-muted-foreground">
                Activating natural curiosity and exploration builds confidence and reduces anxiety
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-forest-deep mb-3">Co-Regulation</h3>
              <p className="text-sm text-muted-foreground">
                One nervous system helps regulate another through calm, consistent presence
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-forest-deep mb-3">Connection</h3>
              <p className="text-sm text-muted-foreground">
                Sustainable change emerges from trust and communication, not control and compliance
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-forest-deep mb-3">Choice-Making</h3>
              <p className="text-sm text-muted-foreground">
                Dogs learn self-regulation when given appropriate choices within safe boundaries
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};