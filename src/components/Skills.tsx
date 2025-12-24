import { 
  ChefHat, 
  Thermometer, 
  Shield, 
  Users, 
  ClipboardList, 
  Utensils,
  Languages,
  GraduationCap
} from 'lucide-react';
import fruitDisplay from '@/assets/fruit-display.jpeg';

const skills = [
  { icon: Utensils, name: 'Knife Skills', description: 'Precision cutting and preparation techniques' },
  { icon: ChefHat, name: 'Cooking Methods', description: 'Mastery of various cooking techniques' },
  { icon: Thermometer, name: 'Temperature Control', description: 'Ensuring food safety standards' },
  { icon: Shield, name: 'Kitchen Safety', description: 'Maintaining safe work environments' },
  { icon: ClipboardList, name: 'Inventory Management', description: 'Optimal stock levels and reduced waste' },
  { icon: Users, name: 'Team Leadership', description: 'Guiding and mentoring kitchen staff' },
];

const education = [
  {
    degree: 'Advanced Diploma in Hotel Management',
    school: 'STEI Institute',
    location: 'Singapore',
    year: '2022',
  },
  {
    degree: 'Hotel Management',
    school: 'CAIIHM',
    location: 'Chennai, Tamilnadu',
    year: '2020',
  },
];

const languages = [
  { name: 'English', level: 'Fluent', percent: 95 },
  { name: 'Telugu', level: 'Native', percent: 100 },
  { name: 'Tamil', level: 'Conversational', percent: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block font-body text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Expertise
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6">
              Skills & Qualifications
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-12 md:mb-20">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <skill.icon size={20} className="text-primary group-hover:text-accent transition-colors duration-300 md:w-7 md:h-7" />
                </div>
                <h3 className="font-heading text-base md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                  {skill.name}
                </h3>
                <p className="font-body text-muted-foreground text-xs md:text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education & Languages */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Education */}
            <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-primary md:w-[22px] md:h-[22px]" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-4 md:space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-accent pl-3 md:pl-4">
                    <h4 className="font-heading text-base md:text-lg font-semibold text-foreground mb-0.5 md:mb-1">
                      {edu.degree}
                    </h4>
                    <p className="font-body text-sm md:text-base text-primary font-medium">{edu.school}</p>
                    <p className="font-body text-xs md:text-sm text-muted-foreground">
                      {edu.location} • {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Languages size={18} className="text-primary md:w-[22px] md:h-[22px]" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">Languages</h3>
              </div>
              <div className="space-y-4 md:space-y-5">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center mb-1.5 md:mb-2">
                      <span className="font-body text-sm md:text-base font-medium text-foreground">{lang.name}</span>
                      <span className="font-body text-xs md:text-sm text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="h-1.5 md:h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Precision & Passion Feature Section */}
          <div className="mt-10 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Image Side */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-card group order-2 md:order-1">
              <img
                src={fruitDisplay}
                alt="Artfully arranged fresh fruit display - showcasing culinary artistry"
                className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/30" />
            </div>

            {/* Content Side */}
            <div className="order-1 md:order-2 space-y-4 md:space-y-6">
              <div>
                <span className="inline-block font-body text-xs md:text-sm font-medium text-accent uppercase tracking-widest mb-2 md:mb-3">
                  Philosophy
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  Precision & Passion
                </h3>
                <div className="w-16 md:w-20 h-1 bg-accent rounded-full mb-4 md:mb-6" />
              </div>
              
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                Crafting memorable dining experiences with attention to every detail. Every ingredient is carefully selected, every technique meticulously applied.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">500+</div>
                  <div className="text-xs md:text-sm font-body text-muted-foreground">Items Prepaired</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-accent mb-1">100%</div>
                  <div className="text-xs md:text-sm font-body text-muted-foreground">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
