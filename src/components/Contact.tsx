import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Let's connect and discuss opportunities for culinary excellence
        </p>

        <Card className="shadow-elegant gradient-card border-none">
          <CardContent className="pt-6 sm:pt-8 px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Information */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Contact Information</h3>
                
                <a 
                  href="mailto:malli1252001@gmail.com"
                  className="flex items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-smooth group"
                >
                  <div className="p-1.5 sm:p-2 gradient-hero rounded-lg flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground text-sm sm:text-base">Email</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-smooth text-xs sm:text-sm break-all">
                      malli1252001@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:980-433-8960"
                  className="flex items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-smooth group"
                >
                  <div className="p-1.5 sm:p-2 bg-accent/30 rounded-lg flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm sm:text-base">Phone</p>
                    <p className="text-muted-foreground group-hover:text-accent transition-smooth text-xs sm:text-sm">
                      980-433-8960
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 bg-muted/50 rounded-lg">
                  <div className="p-1.5 sm:p-2 bg-muted rounded-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm sm:text-base">Location</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Charlotte, NC, USA</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col justify-center">
                <div className="bg-primary/5 p-4 sm:p-5 md:p-6 rounded-lg border border-primary/10">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    Looking for a Talented Pastry Professional?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                    I'm passionate about creating exceptional desserts and maintaining the highest standards of culinary excellence. Let's discuss how I can contribute to your team.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <Button 
                      className="w-full gradient-hero hover:shadow-glow transition-smooth text-sm sm:text-base"
                      size="lg"
                      asChild
                    >
                      <a href="mailto:malli1252001@gmail.com">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-sm sm:text-base"
                      size="lg"
                    >
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center text-muted-foreground px-4">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Mallikarjuna Esunathi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
