import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/90 to-primary/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-12 sm:py-16 md:py-20 text-center text-primary-foreground">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent shadow-2xl ring-4 ring-accent/30">
              <img 
                src="/profile-new.jpeg" 
                alt="Vamsi Krishna Karnam"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 tracking-tight px-2 bg-gradient-to-r from-white via-accent-foreground to-white bg-clip-text text-transparent drop-shadow-lg">
            Vamsi Krishna Karnam
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-playfair mb-4 sm:mb-6 text-primary-foreground/90 px-2">
            Banquet Lead Cook | The Ritz-Carlton, Charlotte
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 text-primary-foreground/80 px-4">
            Banquet Lead Cook with expertise in large-scale service, precision execution, and luxury hospitality standards
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 text-primary-foreground/90 px-4">
            <a href="mailto:vamsikrishnakarnam1221@gmail.com" className="flex items-center justify-center gap-2 hover:text-primary-foreground transition-smooth">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base">vamsikrishnakarnam1221@gmail.com</span>
            </a>
            <a href="tel:3322586532" className="flex items-center justify-center gap-2 hover:text-primary-foreground transition-smooth">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base">332-258-6532</span>
            </a>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base">Charlotte, NC, USA</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-card text-card-foreground hover:shadow-glow transition-smooth"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Experience
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
