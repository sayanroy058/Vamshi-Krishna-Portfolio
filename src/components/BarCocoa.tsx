import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const barCocoaImages = [
  { src: "/Playes entrees/WhatsApp Image 2025-12-25 at 6.49.36 PM (1).jpeg", alt: "Plated entree 1" },
  { src: "/Playes entrees/WhatsApp Image 2025-12-25 at 6.49.36 PM.jpeg", alt: "Plated entree 2" },
  { src: "/Playes entrees/WhatsApp Image 2025-12-25 at 6.49.37 PM (1).jpeg", alt: "Plated entree 3" },
  { src: "/Playes entrees/WhatsApp Image 2025-12-25 at 6.49.37 PM (2).jpeg", alt: "Plated entree 4" },
  { src: "/Playes entrees/WhatsApp Image 2025-12-25 at 6.49.37 PM.jpeg", alt: "Plated entree 5" },
  { src: "/Playes entrees/WhatsApp Image 2025-12-25 at 6.49.38 PM (1).jpeg", alt: "Plated entree 6" },
  { src: "/Playes entrees/WhatsApp Image 2025-12-25 at 6.49.38 PM (2).jpeg", alt: "Plated entree 7" },
  { src: "/Playes entrees/WhatsApp Image 2025-12-25 at 6.49.38 PM.jpeg", alt: "Plated entree 8" },
  { src: "/Playes entrees/WhatsApp Image 2025-12-25 at 6.49.39 PM (1).jpeg", alt: "Plated entree 9" },
  { src: "/Playes entrees/WhatsApp Image 2025-12-25 at 6.49.39 PM (2).jpeg", alt: "Plated entree 10" },
  { src: "/Plated salads/WhatsApp Image 2025-12-25 at 6.49.35 PM (1).jpeg", alt: "Banquet presentation 1" },
  { src: "/Plated salads/WhatsApp Image 2025-12-25 at 6.49.35 PM (2).jpeg", alt: "Banquet presentation 2" },
  { src: "/Plated salads/WhatsApp Image 2025-12-25 at 6.49.35 PM.jpeg", alt: "Banquet presentation 3" },
];

const BarCocoa = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/5" id="plated-entrees">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Playes Entrées
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Beautifully crafted main course presentations for banquet events
        </p>

        {isMobile ? (
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {barCocoaImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="shadow-elegant overflow-hidden border-none">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {barCocoaImages.map((image, index) => (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-glow transition-smooth overflow-hidden border-none"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-110 transition-smooth"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BarCocoa;
