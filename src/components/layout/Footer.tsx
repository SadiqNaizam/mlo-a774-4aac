import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">FlavorSwift</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your favorite food, delivered fast to your door.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} to={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} FlavorSwift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;