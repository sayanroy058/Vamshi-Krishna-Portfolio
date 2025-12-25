import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const weddingCakeImages = [
  { src: "/Wedding cakes/WhatsApp Image 2025-11-10 at 1.15.05 PM.jpeg", alt: "Wedding cake 1" },
  { src: "/Wedding cakes/WhatsApp Image 2025-11-10 at 1.15.06 PM (1).jpeg", alt: "Wedding cake 2" },
  { src: "/Wedding cakes/WhatsApp Image 2025-11-10 at 1.15.06 PM (2).jpeg", alt: "Wedding cake 3" },
  { src: "/Wedding cakes/WhatsApp Image 2025-11-10 at 1.15.06 PM.jpeg", alt: "Wedding cake 4" },
  { src: "/Wedding cakes/WhatsApp Image 2025-11-10 at 1.15.07 PM (1).jpeg", alt: "Wedding cake 5" },
  { src: "/Wedding cakes/WhatsApp Image 2025-11-10 at 1.15.07 PM.jpeg", alt: "Wedding cake 6" },
  { src: "/Wedding cakes/WhatsApp Image 2025-11-10 at 1.15.29 PM.jpeg", alt: "Wedding cake 7" },
  { src: "/Wedding cakes/WhatsApp Image 2025-11-10 at 1.15.30 PM (1).jpeg", alt: "Wedding cake 8" },
];

const WeddingCakes = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/5" id="wedding-cakes">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Wedding Cakes
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Elegant wedding cake designs for unforgettable celebrations
        </p>

        {isMobile ? (
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {weddingCakeImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="shadow-elegant overflow-hidden border-none">
                    <CardContent className="p-0">
                      <div className="aspect-[3/4] overflow-hidden">
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
            {weddingCakeImages.map((image, index) => (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-glow transition-smooth overflow-hidden border-none"
              >
                <CardContent className="p-0">
                  <div className="aspect-[3/4] overflow-hidden">
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

export default WeddingCakes;
