import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, Award as AwardIcon, Crown } from "lucide-react";

const awards = [
  {
    title: "2024 3rd Quarter 5-Star Winner",
    description: "Recognized for exceptional performance and service excellence",
    icon: Crown,
    year: "2024",
    highlight: true
  },
  {
    title: "Gold Standard Ambassador",
    description: "Honored twice for exemplifying The Ritz-Carlton's Gold Standards",
    icon: Trophy,
    year: "2023-2024",
    highlight: true
  },
  {
    title: "5-Star Nominee",
    description: "Nominated twice for outstanding contributions to team excellence",
    icon: Star,
    year: "2023-2024"
  },
  {
    title: "Student Committee President",
    description: "Led student committee and represented peers in school initiatives",
    icon: AwardIcon,
    year: "School Year"
  }
];

const Awards = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-background" id="awards">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Awards & Achievements
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Recognition of dedication, excellence, and leadership
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <Card 
                key={index} 
                className={`shadow-elegant hover:shadow-glow transition-smooth gradient-card border-none ${
                  award.highlight ? 'ring-2 ring-primary/30' : ''
                }`}
              >
                <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className={`p-2 sm:p-3 ${award.highlight ? 'gradient-hero' : 'bg-accent/20'} rounded-lg flex-shrink-0`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${award.highlight ? 'text-primary-foreground' : 'text-accent'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground leading-tight">{award.title}</h3>
                        <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-2.5 py-1 sm:px-3 rounded-full self-start">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Achievement */}
        <Card className="mt-6 sm:mt-8 shadow-elegant gradient-card border-none">
          <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Athletic Participation</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Participated in various sports activities, demonstrating teamwork and competitive spirit
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Awards;
