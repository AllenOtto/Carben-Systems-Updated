import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from 'react';
import logo from "@/images/logo.png";

const Header = () => {
  const handleCall = () => {
    const phoneNumber = '+254722698673';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="inline-block">
            <img
              src={logo}  // Fixed: removed quotes and extra braces
              alt="CarbenSystems Logo"
              className="h-10 w-auto" />
          </a>
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