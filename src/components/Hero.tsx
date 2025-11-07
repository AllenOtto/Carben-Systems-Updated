import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] py-24 md:py-32" id="top">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
            Professional ISP Management Solution
          </div>
          <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-6xl lg:text-7xl">
            Complete ISP Billing & Management System
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
            Powerful PPPOE, Static IP, and Hotspot management with integrated payment processing, 
            automated billing, and comprehensive customer management.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* ✅ Scrolls to CTA section */}
            <Button size="lg" variant="hero" className="group" asChild>
              <a href="#cta">
                Get Started Free
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            {/* ✅ Scrolls to Pricing section */}
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              asChild
            >
              <a href="#pricing">View Pricing</a>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span>Free Installation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span>Free Hotspot (0-100 users)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span>M-PESA Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;