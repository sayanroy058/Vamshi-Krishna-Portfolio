import fiveStarAward from '@/assets/five-star-award.jpeg';
import achievementCertificate from '@/assets/achievement-certificate.jpeg';
import servSafeCertificate from '@/assets/servsafe-certificate.jpeg';
import marriottCertificate from '@/assets/marriott-certificate.jpeg';
import { Award, Star, Shield, BookOpen } from 'lucide-react';

const awards = [
  {
    id: 1,
    title: 'Five Star of the Quarter',
    organization: 'The Ritz-Carlton Charlotte',
    year: 'Q1 2025',
    image: fiveStarAward,
    icon: Star,
    description: 'Recognized for outstanding performance and dedication to excellence.',
  },
  {
    id: 2,
    title: '100% Event Satisfaction Score',
    organization: 'The Ritz-Carlton Charlotte',
    year: '2024',
    image: achievementCertificate,
    icon: Award,
    description: 'Achieved perfect satisfaction scores from Meeting Planners for hosting events.',
  },
];

const certifications = [
  {
    id: 1,
    title: 'ServSafe Food Handler',
    organization: 'National Restaurant Association',
    date: 'Sep 2024',
    expiry: 'Sep 2027',
    image: servSafeCertificate,
    icon: Shield,
  },
  {
    id: 2,
    title: 'Elevate Program',
    organization: 'Marriott International',
    date: '2024',
    image: marriottCertificate,
    icon: BookOpen,
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block font-body text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Recognition
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6">
              Awards & Certifications
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Awards */}
          <div className="mb-10 md:mb-16">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
              <Award className="text-accent w-5 h-5 md:w-6 md:h-6" />
              Awards
            </h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="group bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300"
                >
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute top-3 right-3 md:top-4 md:right-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/90 flex items-center justify-center shadow-gold">
                        <award.icon size={20} className="text-accent-foreground md:w-6 md:h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <span className="font-body text-xs md:text-sm font-medium text-accent">{award.year}</span>
                    </div>
                    <h4 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                      {award.title}
                    </h4>
                    <p className="font-body text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">
                      {award.organization}
                    </p>
                    <p className="font-body text-xs md:text-sm text-muted-foreground">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
              <Shield className="text-accent w-5 h-5 md:w-6 md:h-6" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="group bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300"
                >
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <cert.icon size={16} className="text-primary md:w-5 md:h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading text-base md:text-lg font-semibold text-foreground">
                          {cert.title}
                        </h4>
                        <p className="font-body text-xs md:text-sm text-muted-foreground">
                          {cert.organization}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
                      <span>Issued: {cert.date}</span>
                      {cert.expiry && <span>Expires: {cert.expiry}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
