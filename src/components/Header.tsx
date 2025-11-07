import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from 'react';

const Header = () => {
  // ✅ Define the call handler
  const handleCall = () => {
    // Replace with your actual business phone number (in international format)
    const phoneNumber = '+254722698673'; // Example: Safaricom number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-accent)]">
            <span className="text-xl font-bold text-secondary-foreground">C</span>
          </div>
          <span className="text-xl font-bold text-foreground">CarbenSystems</span>
        </div>
        
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Contact
          </a>
          {/* ✅ Updated button */}
          <Button variant="hero" size="sm" onClick={handleCall}>
            Call Us Now
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;