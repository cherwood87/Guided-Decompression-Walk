import { Card, CardContent } from '@/components/ui/card';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { testimonials } from '@/data/testimonials';
import walkImage5 from '@/assets/IMG_5744.jpeg';

export const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-forest-deep">
          What Handlers Are Saying
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-medium text-forest-deep">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center">
            <ResponsiveImage 
              src={walkImage5}
              alt="Happy dog and handler after a successful decompression walk"
              className="rounded-2xl shadow-strong w-full max-w-lg"
            />
          </div>
        </div>
      </div>                  
    </section>
  );
};