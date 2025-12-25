import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Banquet Lead Cook",
    company: "The Ritz-Carlton, Charlotte",
    location: "Charlotte, NC, USA",
    period: "March 2025 – Present",
    responsibilities: [
      "Lead kitchen operations for large-scale banquet events",
      "Coordinate and supervise banquet kitchen team",
      "Ensure consistent food quality and presentation standards",
      "Execute high-volume event service with precision",
      "Maintain luxury hospitality Gold Standards"
    ],
    highlight: true
  },
  {
    title: "Banquet Cook 2",
    company: "The Ritz-Carlton, Charlotte",
    location: "Charlotte, NC, USA",
    period: "2024 – 2025",
    responsibilities: [
      "Prepared high-quality dishes for banquet events",
      "Maintained mise en place for efficient service",
      "Collaborated with team members during peak service",
      "Ensured food safety and sanitation standards"
    ]
  },
  {
    title: "Culinary J1 Cook 3",
    company: "The Ritz-Carlton, Charlotte",
    location: "Charlotte, NC, USA",
    period: "2023 – 2024",
    responsibilities: [
      "Station management and food preparation",
      "Recipe execution following Ritz-Carlton standards",
      "Kitchen organization and inventory management",
      "Teamwork in fast-paced culinary environment"
    ]
  },
  {
    title: "Trainee",
    company: "Wink Group of Hotels",
    location: "Singapore",
    period: "2021 – 2022",
    responsibilities: [
      "Culinary training in hotel operations",
      "Kitchen fundamentals and food preparation",
      "Customer service in hospitality setting",
      "International culinary exposure"
    ]
  },
  {
    title: "Internship Trainer",
    company: "Novotel, South Cavelosim",
    location: "Goa, India",
    period: "2019 – 2020",
    responsibilities: [
      "Assisted in kitchen training programs",
      "Food preparation and basic culinary skills",
      "Learned hotel kitchen operations",
      "Foundation in hospitality industry"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/30" id="experience">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Professional Experience
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          A journey of culinary excellence and continuous growth
        </p>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`shadow-elegant hover:shadow-glow transition-smooth gradient-card border-none ${
                exp.highlight ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 gradient-hero rounded-lg flex-shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground leading-tight">{exp.title}</h3>
                      <p className="text-base sm:text-lg font-medium text-primary mt-1">{exp.company}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{exp.location}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary self-start text-xs sm:text-sm">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {exp.period}
                  </Badge>
                </div>

                <ul className="space-y-1.5 sm:space-y-2 ml-7 sm:ml-10 md:ml-14">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-muted-foreground text-sm sm:text-base">
                      <span className="text-primary mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
