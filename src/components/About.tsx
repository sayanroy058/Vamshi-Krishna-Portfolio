import { Card, CardContent } from "@/components/ui/card";
import { Award, Target } from "lucide-react";

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5" id="about">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Dedicated culinary professional committed to excellence in banquet operations
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Professional Summary - Large Card */}
          <Card className="lg:col-span-2 shadow-elegant hover:shadow-glow transition-smooth border-l-4 border-l-primary bg-gradient-to-br from-card to-primary/5">
            <CardContent className="pt-6 px-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 gradient-hero rounded-xl flex-shrink-0 shadow-md">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Professional Summary</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Experienced Banquet Lead Cook with a strong background in luxury hospitality and high-volume 
                    event execution. Proven leader in coordinating kitchen teams, ensuring consistent food quality, 
                    and delivering seamless service for large-scale banquets and VIP events.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Objective - Vertical Card */}
          <Card className="shadow-elegant hover:shadow-glow transition-smooth border-t-4 border-t-accent bg-gradient-to-br from-card to-accent/5">
            <CardContent className="pt-6 px-6">
              <div className="flex flex-col gap-4">
                <div className="p-3 bg-accent/10 rounded-xl w-fit shadow-sm">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Career Objective</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To contribute strong leadership and culinary expertise as a Banquet Lead Cook, delivering 
                    high-quality banquet service while supporting team efficiency and luxury hospitality standards.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Grid - Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Personal Information */}
          <Card className="shadow-elegant hover:shadow-glow transition-smooth bg-gradient-to-br from-card to-muted/30">
            <CardContent className="pt-6 px-6">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-lg">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Personal Information
              </h4>
              <div className="space-y-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2 p-2 bg-background/50 rounded-lg">
                  <span className="font-semibold text-foreground">DOB:</span>
                  <span>January 8, 2000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="shadow-elegant hover:shadow-glow transition-smooth bg-gradient-to-br from-card to-primary/5">
            <CardContent className="pt-6 px-6">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-lg">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Telugu", "English", "Tamil"].map((lang) => (
                  <span key={lang} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-smooth">
                    {lang}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hobbies */}
          <Card className="shadow-elegant hover:shadow-glow transition-smooth bg-gradient-to-br from-card to-accent/5">
            <CardContent className="pt-6 px-6">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-lg">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                Hobbies
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Music", "Cooking"].map((hobby) => (
                  <span key={hobby} className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-smooth">
                    {hobby}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
