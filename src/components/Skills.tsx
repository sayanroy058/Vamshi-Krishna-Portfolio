import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Users, Zap, Heart } from "lucide-react";

const technicalSkills = [
  "Plated Desserts",
  "Pastry Production",
  "Chocolate Fork Technique",
  "Chocolate Work",
  "Bakery Skills",
  "Mise en Place",
  "Sanitation",
  "Inventory Standards"
];

const softSkills = [
  { name: "Team Collaboration", icon: Users },
  { name: "Good Leadership", icon: ChefHat },
  { name: "Hard Working", icon: Zap },
  { name: "Disciplined", icon: Heart }
];

const Skills = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-background" id="skills">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          A comprehensive blend of technical mastery and interpersonal excellence
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Technical Skills */}
          <Card className="shadow-elegant hover:shadow-glow transition-smooth gradient-card border-none">
            <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-foreground flex items-center gap-2">
                <div className="p-1.5 sm:p-2 gradient-hero rounded-lg flex-shrink-0">
                  <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default text-xs sm:text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="shadow-elegant hover:shadow-glow transition-smooth gradient-card border-none">
            <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-foreground flex items-center gap-2">
                <div className="p-1.5 sm:p-2 gradient-hero rounded-lg flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-smooth"
                    >
                      <div className="p-1.5 sm:p-2 bg-accent/20 rounded-lg flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <span className="font-medium text-foreground text-sm sm:text-base">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
