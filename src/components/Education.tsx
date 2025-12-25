import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Advanced Diploma in Hospitality Management",
    institution: "STEI Institute",
    location: "Singapore",
    year: "2021 – 2022",
    grade: "Distinction",
    type: "Diploma"
  },
  {
    degree: "B.Sc Catering Science & Hotel Management",
    institution: "Chennai's Amirtha International Institute of Hotel Management",
    location: "Chennai, India",
    year: "2017 – 2020",
    grade: "First Class",
    type: "Bachelor's Degree"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    location: "India",
    year: "2015 – 2017",
    grade: "Pass",
    type: "Intermediate"
  },
  {
    degree: "SSC",
    institution: "Viswam High School",
    location: "India",
    year: "2014 – 2015",
    grade: "80%",
    type: "Secondary School"
  }
];

const Education = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/30" id="education">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Education
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Academic excellence and continuous learning
        </p>

        <div className="space-y-4 sm:space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-glow transition-smooth gradient-card border-none"
            >
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="p-2 sm:p-3 gradient-hero rounded-lg flex-shrink-0">
                      {index === 0 ? (
                        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      ) : (
                        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1 leading-tight">{edu.degree}</h3>
                      <p className="text-sm sm:text-base md:text-lg text-primary font-medium">{edu.institution}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 ml-9 sm:ml-12 md:ml-16">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">{edu.year}</span>
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 gradient-hero rounded-lg">
                      <span className="text-primary-foreground font-bold text-sm sm:text-base">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
