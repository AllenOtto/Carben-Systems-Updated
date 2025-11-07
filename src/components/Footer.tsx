const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-accent)]">
                <span className="text-xl font-bold text-secondary-foreground">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">CarbenSystems</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional ISP billing and management solution for growing businesses.
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-foreground">Contact Us</p>
              <a href="tel:0722698673" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                📞 0722 698 673
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#cta" className="hover:text-foreground transition-colors">Get Started</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#cta" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#requirements" className="hover:text-foreground transition-colors">Requirements</a></li>
              <li><a href="#functions" className="hover:text-foreground transition-colors">System Functions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#top" className="hover:text-foreground transition-colors">Back To Top</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CarbenSystems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
