import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Target } from 'lucide-react';

export const PricingLocationSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Pricing */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-forest-deep">Pricing & Packages</h2>
            <p className="text-forest-medium font-medium mb-6 text-center">
              Spots are intentionally limited to keep groups small. Reserve now—your dog deserves this space.
            </p>
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Single Session</span>
                    <Badge variant="outline" className="text-lg font-bold">$35</Badge>
                  </CardTitle>
                  <CardDescription>Try it out</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="shadow-medium border-forest-medium/20">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>3-Pack</span>
                    <div className="text-right">
                      <Badge variant="outline" className="text-lg font-bold">$95</Badge>
                      <p className="text-sm text-forest-medium">save $10</p>
                    </div>
                  </CardTitle>
                  <CardDescription>Build consistency</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="shadow-medium border-forest-medium/30 bg-forest-light/20">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>6-Pack</span>
                    <div className="text-right">
                      <Badge className="bg-forest-medium text-white text-lg font-bold">$185</Badge>
                      <p className="text-sm text-forest-medium">save $25</p>
                    </div>
                  </CardTitle>
                  <CardDescription>Best value for habit-building</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <div className="flex gap-4 mt-8">
              <Button 
                variant="nature" 
                className="flex-1"
                onClick={() => window.open('https://petintel.ca/products/guided-decompression-walks', '_blank')}
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-forest-deep">Location Details</h2>
            <Card className="shadow-medium">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Private 100-acre property</p>
                    <p className="text-muted-foreground">Richmond, ON (directions after registration)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Saturdays, 3:00–4:00 PM</p>
                    <p className="text-muted-foreground">Arrive 10 minutes early for check-in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-forest-medium mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Forest trails, meadows, gentle elevation</p>
                    <p className="text-muted-foreground">On-site parking, easy access</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};