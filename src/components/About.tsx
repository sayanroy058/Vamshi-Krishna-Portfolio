import { Card, CardContent } from "@/components/ui/card";
import { Award, Target } from "lucide-react";

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-background" id="about">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Dedicated pastry professional committed to culinary excellence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Professional Summary */}
          <Card className="shadow-elegant hover:shadow-glow transition-smooth gradient-card border-none">
            <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 gradient-hero rounded-lg flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-foreground">Professional Summary</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Luxury pastry professional with Ritz-Carlton culinary experience. Skilled in chocolate work, 
                    plated desserts, bakery operations, and Gold Standard quality. Strong team collaborator and 
                    Pastry Learning Coach dedicated to excellence in every creation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Objective */}
          <Card className="shadow-elegant hover:shadow-glow transition-smooth gradient-card border-none">
            <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 gradient-hero rounded-lg flex-shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-foreground">Career Objective</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    To advance my career in hotel management by leveraging strong management skills, 
                    culinary expertise, and dedication to quality service that ensures mutual growth and 
                    exceptional guest experiences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Details */}
        <Card className="mt-6 sm:mt-8 shadow-elegant gradient-card border-none">
          <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Personal Information</h4>
                <div className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                  <p><span className="font-medium text-foreground">Date of Birth:</span> May 12, 2001</p>
                  <p><span className="font-medium text-foreground">Father's Name:</span> Esunathi Sathaiah</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["Telugu", "Hindi", "English"].map((lang) => (
                    <span key={lang} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
                <h4 className="font-semibold text-foreground mt-3 sm:mt-4 mb-2 text-sm sm:text-base">Hobbies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Cooking", "Gardening"].map((hobby) => (
                    <span key={hobby} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
