import giroLogoVertical from "@/assets/giro-logo-vertical.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <img 
              src={giroLogoVertical} 
              alt="GIRO 360 Logo" 
              className="h-64 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm">
              Websites, e-commerce, apps, brand identity, print and digital graphics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Giro 360. All rights reserved.</p>
          <p>Sophisticated 360° Virtual Tour Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
