import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Lead Cook - Culinary Banquets',
    company: 'The Ritz-Carlton',
    location: 'Charlotte, North Carolina',
    period: 'March 2025 - Present',
    current: true,
    highlights: [
      'Manage the banquet culinary department with full leadership responsibilities',
      'Handle ordering, prep lists, BEO meetings, and event execution',
      'Achieved 100% Event Satisfaction Score for 2024',
      'Awarded Five Star of the Quarter Q1 2025',
    ],
  },
  {
    id: 4,
    title: 'Cook 2',
    company: 'The Ritz-Carlton',
    location: 'Charlotte, North Carolina',
    period: 'Aug 2024 - Mar 2025',
    current: false,
    highlights: [
      'Prepared high-volume banquet dishes and plated for events',
      'Assisted lead cook with station prep, execution, and quality checks',
      'Maintained strict food safety and sanitation standards',
      'Supported menu prep during peak seasonal events',
    ],
  },
  {
    id: 2,
    title: 'Culinary Intern',
    company: 'The Ritz-Carlton',
    location: 'Charlotte, North Carolina',
    period: 'May 2023 - May 2024',
    current: false,
    highlights: [
      'Assisted head chef in preparing and cooking menu items',
      'Made salads and prepped foods using proper knife techniques',
      'Reduced food costs by expertly estimating purchasing needs',
      'Maintained correct temperature of food products',
    ],
  },
  {
    id: 3,
    title: 'Internship Trainer',
    company: 'Novotel',
    location: 'South Cavelosim, Goa',
    period: 'Aug 2019 - Jan 2020',
    current: false,
    highlights: [
      'Helped new hires assimilate into workforce with successful onboarding',
      'Elevated performance levels and minimized compliance issues',
      'Trained new hires on procedures and protocols effectively',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block font-body text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Career Path
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 w-3 h-3 md:w-4 md:h-4 -translate-x-1/2 rounded-full border-4 border-background z-10 mt-8">
                  <div className={`w-full h-full rounded-full ${exp.current ? 'bg-accent animate-pulse' : 'bg-primary'}`} />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-12 sm:ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-card rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-card hover:shadow-elegant transition-shadow duration-300`}>
                    {exp.current && (
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3 md:mb-4">
                        Current Position
                      </span>
                    )}
                    
                    <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1 md:mb-2">
                      {exp.title}
                    </h3>
                    
                    <p className="font-body text-base md:text-lg font-medium text-primary mb-3 md:mb-4">
                      {exp.company}
                    </p>

                    <div className={`flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-6 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                        <MapPin size={14} className="md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                        <Calendar size={14} className="md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <ul className={`space-y-2 md:space-y-3 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-3 text-muted-foreground">
                          <ChevronRight size={14} className="text-accent mt-0.5 md:mt-1 flex-shrink-0 md:w-4 md:h-4" />
                          <span className="font-body text-xs md:text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
