import profilePhoto from '@/assets/profile-photo.png';
import heroBackground from '@/assets/hero-background.jpg';
import { MapPin, Award, ChefHat } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 md:pt-0 md:pb-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Stronger overlay on mobile for better text readability */}
        <div className="absolute inset-0 bg-hero-gradient opacity-95 md:opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-burgundy/70 via-burgundy/60 to-burgundy/50 md:from-burgundy/60 md:via-burgundy/40 md:to-transparent" />
        {/* Additional mobile overlay for better contrast */}
        <div className="absolute inset-0 bg-black/10 md:bg-transparent" />
      </div>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-24 md:w-64 h-24 md:h-64 bg-accent/5 md:bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-32 md:w-96 h-32 md:h-96 bg-primary-foreground/3 md:bg-primary-foreground/5 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-5 sm:px-6 py-8 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div 
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-foreground/15 backdrop-blur-sm rounded-full mb-3 md:mb-6 border border-primary-foreground/10"
            >
              <ChefHat size={14} className="text-accent sm:w-4 sm:h-4" />
              <span className="text-primary-foreground text-xs sm:text-sm font-medium tracking-wide">Lead Cook - Culinary Banquets</span>
            </div>

            <h1 
              className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground leading-tight mb-3 md:mb-6"
            >
              Vamsi Krishna
              <span className="block text-accent mt-1 md:mt-2">Karnam</span>
            </h1>

            <p 
              className="font-body text-sm sm:text-base md:text-lg text-primary-foreground/90 max-w-xl mx-auto lg:mx-0 mb-5 md:mb-8 leading-relaxed"
            >
              Crafting exceptional culinary experiences at The Ritz-Carlton, Charlotte.
              Passionate about precision, creativity, and delivering memorable dining moments.
            </p>

            <div 
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 mb-6 md:mb-10"
            >
              <div className="flex items-center gap-2 text-primary-foreground/95">
                <MapPin size={15} className="text-accent sm:w-[18px] sm:h-[18px]" />
                <span className="font-body text-xs sm:text-sm">Charlotte, North Carolina</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-primary-foreground/40 rounded-full" />
              <div className="flex items-center gap-2 text-primary-foreground/95">
                <Award size={15} className="text-accent sm:w-[18px] sm:h-[18px]" />
                <span className="font-body text-xs sm:text-sm">Five Star of the Quarter 2025</span>
              </div>
            </div>

            <div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground font-body font-semibold rounded-lg shadow-gold transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] text-sm sm:text-base"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-foreground/10 text-primary-foreground font-body font-medium rounded-lg border border-primary-foreground/20 backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/20 text-sm sm:text-base"
              >
                View Experience
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div 
              className="relative"
            >
              {/* Decorative ring */}
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-accent/30 via-transparent to-accent/15 rounded-full blur-sm" />
              
              {/* Photo container */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[3px] md:border-4 border-primary-foreground/30 shadow-elegant">
                <img
                  src={profilePhoto}
                  alt="Vamsi Krishna Karnam - Lead Cook at The Ritz-Carlton"
                  className="w-full h-full object-cover object-top scale-110"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hide on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <span className="text-primary-foreground/60 text-xs font-body uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
