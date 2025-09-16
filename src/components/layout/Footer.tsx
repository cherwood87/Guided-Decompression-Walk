import { ExternalLink, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 md:py-12 bg-forest-deep text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4">Guided Decompression Walks™</h3>
          <p className="text-forest-light mb-6">
            Hosted by Pet Intel & Emotional Well-Being and Street Wise Canine
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-forest-light mb-6">
            <span>Saturdays, 3:00–4:00 PM</span>
            <span>•</span>
            <span>Richmond, ON</span>
            <span>•</span>
            <span>$35 per session</span>
          </div>
        </div>
        
        <div className="border-t border-forest-medium/30 pt-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Street Wise Canine */}
            <div className="text-center">
              <h3 className="text-white font-semibold mb-3">Street Wise Canine</h3>
              <div className="space-y-2">
                <a 
                  href="https://streetsmartcanine.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-forest-light hover:text-white transition-colors"
                >
                  Website <ExternalLink className="w-4 h-4" />
                </a>
                <div className="flex justify-center gap-3">
                  <a 
                    href="https://www.facebook.com/streetwisecanine" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-forest-light hover:text-white transition-colors"
                    aria-label="Street Wise Canine Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/cherwood87/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-forest-light hover:text-white transition-colors"
                    aria-label="Street Wise Canine Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Pet Intel */}
            <div className="text-center">
              <h3 className="text-white font-semibold mb-3">Pet Intel</h3>
              <div className="space-y-2">
                <a 
                  href="https://petintel.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-forest-light hover:text-white transition-colors"
                >
                  Website <ExternalLink className="w-4 h-4" />
                </a>
                <div className="flex justify-center gap-3">
                  <a 
                    href="https://www.facebook.com/PetIntel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-forest-light hover:text-white transition-colors"
                    aria-label="Pet Intel Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/petinteldogs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-forest-light hover:text-white transition-colors"
                    aria-label="Pet Intel Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};