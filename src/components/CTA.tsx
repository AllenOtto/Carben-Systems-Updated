import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from 'react';

// ✅ Define your business phone number (international format, without + for WhatsApp)
const BUSINESS_PHONE = '+254722698673'; // Replace with your real number

const CTA = () => {
  // 📞 Phone call handler
  const handleCall = () => {
    window.location.href = `tel:${BUSINESS_PHONE}`;
  };

  // 💬 WhatsApp handler
  const handleWhatsapp = () => {
    // Remove the '+' and any non-digit characters for WhatsApp
    const whatsappNumber = BUSINESS_PHONE.replace(/\D/g, ''); // Keeps only digits
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] py-20 md:py-28" id="cta">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-5xl">
            Ready to Transform Your ISP Business?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
            Join hundreds of ISPs already using CarbenSystems to streamline their operations, 
            automate billing, and provide better service to their customers.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="hero" className="group" onClick={handleCall}>
              Call to Schedule a Demo
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={handleWhatsapp}
            >
              Schedule a Demo Via WhatsApp
            </Button>
          </div>
          <p className="mt-8 text-sm text-primary-foreground/60">
            No credit card required • Free installation • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;