import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const HowItsDifferentSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-forest-deep">
          How The Decompression Method Is Different
        </h2>
        
        <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional dog training focuses on <strong>controlling behavior</strong> through commands, corrections, and compliance. The Decompression Method focuses on <strong>supporting both nervous systems</strong> to create sustainable change from the inside out.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-forest-deep text-xl md:text-2xl">Traditional Dog Training</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-red-500 mt-1">•</span>
                <span>Commands and corrections to control behavior</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-red-500 mt-1">•</span>
                <span>Focus on compliance over understanding</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-red-500 mt-1">•</span>
                <span>One-way communication (human to dog)</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-red-500 mt-1">•</span>
                <span>Manages symptoms without addressing root causes</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-forest-medium/20 bg-forest-light/10">
            <CardHeader>
              <CardTitle className="text-forest-deep text-xl md:text-2xl">The Decompression Method™</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                <span><strong>Co-regulation</strong> – Both species support each other's nervous systems</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                <span><strong>Choice-making</strong> – Dogs learn to self-regulate through natural behaviors</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                <span><strong>Two-way communication</strong> – Handlers learn to listen and respond</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                <span><strong>Root cause focus</strong> – Address nervous system dysregulation</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8 md:mt-12 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-forest-medium font-medium">
            The result? Sustainable change that comes from within, creating stronger partnerships and calmer, more confident dogs and handlers.
          </p>
        </div>
      </div>
    </section>
  );
};