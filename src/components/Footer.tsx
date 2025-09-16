import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Globe, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-deep text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Walks Don't Have to Be Hard</h3>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join the families who've discovered that the best walks happen when both species 
            feel safe, understood, and free to be themselves.
          </p>
          
          <Link to="/guided-walks">
            <Button variant="hero-outline" size="lg" className="mb-12">
              Let's Get Started
            </Button>
          </Link>
          
          <div className="border-t border-white/20 pt-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Street Wise Canine */}
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-4">Street Wise Canine</h4>
                <div className="flex justify-center items-center gap-4">
                  <a 
                    href="https://streetwisecanine.ca" 
                    className="text-white/80 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Street Wise Canine Website"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com/streetwisecanine" 
                    className="text-white/80 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Street Wise Canine Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://facebook.com/streetwisecanine" 
                    className="text-white/80 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Street Wise Canine Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Pet Intel */}
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-4">Pet Intel</h4>
                <div className="flex justify-center items-center gap-4">
                  <a 
                    href="https://petintel.ca" 
                    className="text-white/80 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Pet Intel Website"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com/petintel" 
                    className="text-white/80 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Pet Intel Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://facebook.com/petintel" 
                    className="text-white/80 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Pet Intel Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-8 border-t border-white/20 text-white/60 text-sm">
              © {new Date().getFullYear()} The Decompression Method. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;