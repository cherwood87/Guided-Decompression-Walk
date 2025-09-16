import { TrendingUp, MapPin, Clock } from 'lucide-react';

export const SuccessStatsSection = () => {
  return (
    <section className="py-8 md:py-12 bg-forest-deep text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">92%</div>
            <div className="text-sm text-white/80">Handlers report stronger connection</div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">Both</div>
            <div className="text-sm text-white/80">Species benefit from co-regulation</div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">Science</div>
            <div className="text-sm text-white/80">Based on affective neuroscience</div>
          </div>
        </div>
      </div>
    </section>
  );
};