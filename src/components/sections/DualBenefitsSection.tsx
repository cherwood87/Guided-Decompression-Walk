import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Heart, Users } from 'lucide-react';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import walkImage3 from '@/assets/IMG_5710.jpeg';

export const DualBenefitsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-forest-deep">
          Benefits for Both Ends of the Leash
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center mb-12">
          <div className="space-y-6">
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-forest-deep text-xl md:text-2xl">
                  <Heart className="w-8 h-8 md:w-10 md:h-10 text-forest-medium" />
                  For Your Dog
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Explore safely on a 12–30 ft line</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Reduce stress and build confidence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Sniff, pause, and make natural choices</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Move from arousal → regulation without being rushed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-forest-deep text-xl md:text-2xl">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-forest-medium" />
                  For You (the Handler)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Read your dog's signals in real time</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Master long-line handling without pulling</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Use breath and body to co-regulate</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-medium mt-0.5 flex-shrink-0" />
                  <span>Leave with repeatable skills for calmer daily walks</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <ResponsiveImage 
              src={walkImage3}
              alt="Dog and handler enjoying a peaceful decompression walk"
              className="rounded-2xl shadow-strong w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};