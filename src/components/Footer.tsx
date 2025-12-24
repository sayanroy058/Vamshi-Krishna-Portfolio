import { ChefHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <ChefHat size={20} className="text-accent" />
            </div>
            <div>
              <span className="font-heading text-xl font-semibold text-primary-foreground">
                Vamsi Krishna Karnam
              </span>
              <p className="font-body text-sm text-primary-foreground/60">
                Lead Cook - The Ritz-Carlton
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {['About', 'Experience', 'Skills', 'Awards', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-body text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
