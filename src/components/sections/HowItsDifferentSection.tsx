import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const HowItsDifferentSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-forest-deep">
          How Guided Decompression Walks Are Different
        </h2>
        
        <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most traditional training walks focus on <strong>controlling the dog</strong>: short leashes, constant corrections, and powering past distractions. While this might manage the behavior in the moment, it often keeps dogs stuck rehearsing stress.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-forest-deep text-xl md:text-2xl">Traditional Training Walks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-red-500 mt-1">•</span>
                <span>Short leashes with constant tension</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-red-500 mt-1">•</span>
                <span>Corrections when dogs react to triggers</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-red-500 mt-1">•</span>
                <span>Power through distractions</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-red-500 mt-1">•</span>
                <span>Force compliance over building confidence</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-forest-medium/20 bg-forest-light/10">
            <CardHeader>
              <CardTitle className="text-forest-deep text-xl md:text-2xl">Guided Decompression Walks™</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                <span><strong>Space over pressure</strong> – Dogs explore on long lines (12–30 ft)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                <span><strong>Regulation over correction</strong> – Use sniffing and choice to lower stress</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                <span><strong>Partnership over power struggles</strong> – Learn calm communication</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                <span><strong>Confidence over compliance</strong> – Dogs choose calm instead of being forced</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8 md:mt-12 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-forest-medium font-medium">
            The result? Dogs stop practicing reactivity and start practicing regulation—something that carries into every future walk.
          </p>
        </div>
      </div>
    </section>
  );
};