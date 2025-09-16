import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';

export const ProgramsSection = () => {
  return (
    <section id="programs" className="py-12 md:py-16 lg:py-20 bg-forest-light/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-forest-deep">
          Programs & Services
        </h2>
        
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience The Decompression Method through hands-on programs designed for both dog owners and professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Guided Decompression Walks - Featured Program */}
          <Card className="shadow-medium hover:shadow-large transition-smooth border-forest-medium/30 bg-gradient-to-br from-forest-light/10 to-forest-medium/5">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block bg-forest-medium text-white text-xs px-2 py-1 rounded-full">Featured Program</span>
              </div>
              <CardTitle className="text-forest-deep text-xl md:text-2xl">Guided Decompression Walks</CardTitle>
              <p className="text-muted-foreground">
                Experience the method firsthand with expert coaching on 100 acres of private property.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-forest-medium" />
                  <span>100 acres of private property</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-forest-medium" />
                  <span>60-minute guided sessions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-forest-medium" />
                  <span>Expert coaching included</span>
                </div>
              </div>
              
              <Button 
                variant="hero" 
                className="w-full group"
                onClick={() => window.open('/guided-walks', '_self')}
              >
                Learn More About Guided Walks
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Professional Training */}
          <Card className="shadow-medium hover:shadow-large transition-smooth">
            <CardHeader>
              <CardTitle className="text-forest-deep text-xl md:text-2xl">Professional Training</CardTitle>
              <p className="text-muted-foreground">
                Certification programs for trainers and behavior professionals wanting to integrate the method.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-forest-medium" />
                  <span>Certification available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-forest-medium" />
                  <span>Comprehensive curriculum</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-forest-medium" />
                  <span>Online and in-person options</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};