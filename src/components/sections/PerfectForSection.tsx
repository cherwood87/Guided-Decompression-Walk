import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const PerfectForSection = () => {
  const scenarios = [
    "If your dog barks and lunges at other dogs",
    "If your rescue needs a safe way to build confidence",
    "If you avoid busy sidewalks because walks feel overwhelming",
    "If your high-energy dog never seems tired after a walk",
    "If you want calmer, more connected outings with your dog",
    "If you want to feel less frustrated and more in sync on walks",
    "If you're looking for a better way to connect with your dog while meeting their real needs",
    "If your dog struggles to settle at home because walks leave them more wound up than worn out",
    "If your anxious dog needs gentle confidence building"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-forest-deep">
          For the Dogs Who Need More Than a Walk
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {scenarios.map((item, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-forest-medium flex-shrink-0 mt-0.5" />
                  <p className="font-medium text-forest-deep text-left">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};