import { ResponsiveImage } from '@/components/ResponsiveImage';
import walkImage4 from '@/assets/IMG_5736.jpeg';

export const ExperienceSection = () => {
  return (
    <section id="session-flow" className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-forest-deep">
          The Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-4xl mx-auto text-lg">
          Each walk is a guided session on our 100-acre private property. Dogs explore safely on a long line while trainers coach you on handling, timing, and reading your dog's signals. You'll leave with a calmer dog and skills you can use on every walk.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-forest-deep">Arrival & Setup (5 min)</h3>
                <p className="text-muted-foreground">Gear check (back-clip harness + 12+ ft line), route preview</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-forest-deep">Guided Walk (40–45 min)</h3>
                <p className="text-muted-foreground">Follow your dog's exploration; trainers coach timing, body cues, and micro-exercises; no dog-dog greetings</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-forest-deep">Recap (5–10 min)</h3>
                <p className="text-muted-foreground">Your dog's regulation profile + practice plan</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ResponsiveImage 
              src={walkImage4}
              alt="Trainer guiding a dog and handler through the decompression walk experience"
              className="rounded-2xl shadow-strong w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};