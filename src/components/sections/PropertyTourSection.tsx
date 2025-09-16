import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import walkImage1 from '@/assets/IMG_0484.jpeg';
import walkImage2 from '@/assets/IMG_5703.jpeg';

export const PropertyTourSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-forest-deep">
          See Our 100-Acre Property
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Take a virtual tour of our private trails, meadows, and forest paths where your dog will safely explore and decompress.
        </p>
        
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-strong">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/fR1quLHYZRw"
              title="Property Tour - Guided Decompression Walks"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 mx-auto"
              onClick={() => window.open('https://youtu.be/fR1quLHYZRw?si=xCnHrGfbHOJiSm1q', '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Open in YouTube
            </Button>
          </div>
        </div>

        {/* Property Images Gallery */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="relative">
            <ResponsiveImage 
              src={walkImage1}
              alt="Dog exploring the natural trails at our property"
              className="rounded-xl shadow-medium w-full"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-lg text-sm">
              Natural trails for exploration
            </div>
          </div>
          <div className="relative">
            <ResponsiveImage 
              src={walkImage2}
              alt="Peaceful meadow areas for decompression"
              className="rounded-xl shadow-medium w-full"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-lg text-sm">
              Open meadows for calm exploration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};