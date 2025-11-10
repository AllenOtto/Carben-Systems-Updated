import logo from "@/images/logo.png";

// Define your business phone (same as CTA!)
const BUSINESS_PHONE = '+254728659724'; // TechBomba's number

const Footer = () => {
  // Reuse the same WhatsApp handler from CTA
  const handleWhatsapp = () => {
    const whatsappNumber = BUSINESS_PHONE.replace(/\D/g, ''); // "254722698673"
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="border-t border-border/40 bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo + Description */}
          <div>
            <div className="mb-4 flex items-center">
              <a href="/" className="inline-block">
                <img
                  src={logo}
                  alt="CarbenSystems Logo"
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional ISP billing and management solution for growing businesses.
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-foreground">Contact Us</p>
              <a
                href={`tel:${BUSINESS_PHONE}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                0722 698 673
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#cta" className="hover:text-foreground transition-colors">Get Started</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#cta" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#requirements" className="hover:text-foreground transition-colors">Requirements</a></li>
              <li><a href="#functions" className="hover:text-foreground transition-colors">System Functions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#top" className="hover:text-foreground transition-colors">Back To Top</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright + WhatsApp Link (Same Logic as CTA) */}
        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span>
              &copy; {new Date().getFullYear()} CarbenSystems. All rights reserved.
            </span>

            <span className="hidden sm:inline">•</span>

            <span>
              Designed by{" "}
              <a
                onClick={handleWhatsapp}
                className="inline-flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2 cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleWhatsapp()}
              >
                TechBomba Solutions
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;