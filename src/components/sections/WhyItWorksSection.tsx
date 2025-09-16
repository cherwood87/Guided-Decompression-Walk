import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Target, Heart } from 'lucide-react';

export const WhyItWorksSection = () => {
  return (
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
  );
};