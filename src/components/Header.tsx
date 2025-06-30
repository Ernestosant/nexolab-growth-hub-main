import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Inicio', href: '/', type: 'route' },
    { name: 'Servicios', href: '/services', type: 'route' },
    { name: 'Testimonios', href: '/#testimonials', type: 'scroll' },
    { name: 'Contacto', href: '/#contact', type: 'scroll' }
  ];

  const handleNavClick = (item: typeof menuItems[0]) => {
    if (item.type === 'scroll' && location.pathname === '/') {
      // If we're on home page, scroll to section
      const sectionId = item.href.split('#')[1];
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else if (item.type === 'scroll') {
      // If we're not on home page, navigate to home with hash
      window.location.href = item.href;
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-3 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/logos/Horizontal_Orange and Black Partnership Investment Logo_20250629_205646_0003.png" 
            alt="NexoLab Logo" 
            className="h-36 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            item.type === 'route' ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-nexo-orange-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-foreground hover:text-nexo-orange-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            )
          ))}
          <Button onClick={toggleTheme} variant="outline" size="sm" className="border-nexo-blue-200 hover:bg-nexo-orange-500 hover:text-white hover:border-nexo-orange-500 transition-all">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <Button onClick={toggleTheme} variant="outline" size="sm" className="border-nexo-blue-200 hover:bg-nexo-orange-500 hover:text-white hover:border-nexo-orange-500 transition-all">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  item.type === 'route' ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-lg font-medium hover:text-nexo-orange-500 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className="text-lg font-medium hover:text-nexo-orange-500 transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  )
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
