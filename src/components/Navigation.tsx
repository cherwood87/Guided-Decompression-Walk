import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  items: Array<{
    label: string;
    action: () => void;
    type: 'scroll' | 'link';
  }>;
}

export function Navigation({ items }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleItemClick = (action: () => void) => {
    action();
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/"
          className="font-bold text-forest-deep text-lg md:text-xl hover:text-forest-medium transition-colors"
        >
          The Decompression Method
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {items.slice(0, -1).map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="text-forest-medium hover:text-forest-deep transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button 
            variant="hero" 
            size="sm"
            className="h-10 px-4 md:h-12 md:px-6"
            onClick={() => window.open('mailto:cherwood87@gmail.com', '_blank')}
          >
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-forest-medium hover:text-forest-deep transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-sm border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {items.slice(0, -1).map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item.action)}
                className="block w-full text-left py-3 px-4 text-forest-medium hover:text-forest-deep hover:bg-forest-light/10 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button 
                variant="hero" 
                size="sm"
                className="w-full h-12"
                onClick={() => {
                  window.open('mailto:cherwood87@gmail.com', '_blank');
                  closeMenu();
                }}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}