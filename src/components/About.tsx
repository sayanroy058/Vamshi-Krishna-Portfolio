import ritzAnnouncement from '@/assets/ritz-carlton-announcement.jpeg';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block font-body text-sm font-medium text-accent uppercase tracking-widest mb-4">
              About Me
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6">
              A Journey of Culinary Excellence
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-card">
                <img
                  src={ritzAnnouncement}
                  alt="Vamsi Krishna at The Ritz-Carlton Charlotte - Lead Cook Announcement"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                  <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-card/90 backdrop-blur-sm rounded-lg text-xs md:text-sm font-medium text-foreground">
                    Lead Cook - Culinary Banquets
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 md:space-y-6">
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                My career has been a journey of growth and dedication. After graduating from 
                <span className="text-foreground font-medium"> STEI Institute in Singapore</span>, 
                I began my career as an internship trainer at Novotel Hotel in Goa, India.
              </p>

              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                My big break came when I joined 
                <span className="text-foreground font-medium"> Ritz-Carlton Charlotte as a J1 intern</span>. 
                My strong ability to learn and adapt quickly allowed me to transition into a cook role. 
                Over time, I recognized the need to step up into a leadership position.
              </p>

              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                I took on responsibilities such as ordering, creating prep lists, attending BEO meetings, 
                and executing multiple events. My exceptional performance proved I had the skills to manage 
                the banquet culinary department as a 
                <span className="text-foreground font-medium"> Lead Cook</span>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8 border-t border-border">
                <div className="text-center">
                  <span className="block font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">5+</span>
                  <span className="font-body text-xs md:text-sm text-muted-foreground">Years Experience</span>
                </div>
                <div className="text-center">
                  <span className="block font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 md:mb-2">100%</span>
                  <span className="font-body text-xs md:text-sm text-muted-foreground">Event Satisfaction</span>
                </div>
                <div className="text-center">
                  <span className="block font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">3</span>
                  <span className="font-body text-xs md:text-sm text-muted-foreground">Countries Worked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
