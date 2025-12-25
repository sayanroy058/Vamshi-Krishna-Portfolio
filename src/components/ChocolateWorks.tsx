import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const chocolateImages = [
  { src: "/Plated salads/WhatsApp Image 2025-12-25 at 6.49.32 PM (1).jpeg", alt: "Plated salad 1" },
  { src: "/Plated salads/WhatsApp Image 2025-12-25 at 6.49.32 PM.jpeg", alt: "Plated salad 2" },
  { src: "/Plated salads/WhatsApp Image 2025-12-25 at 6.49.33 PM (1).jpeg", alt: "Plated salad 3" },
  { src: "/Plated salads/WhatsApp Image 2025-12-25 at 6.49.33 PM (2).jpeg", alt: "Plated salad 4" },
  { src: "/Plated salads/WhatsApp Image 2025-12-25 at 6.49.33 PM.jpeg", alt: "Plated salad 5" },
  { src: "/Plated salads/WhatsApp Image 2025-12-25 at 6.49.34 PM (1).jpeg", alt: "Plated salad 6" },
  { src: "/Plated salads/WhatsApp Image 2025-12-25 at 6.49.34 PM.jpeg", alt: "Plated salad 7" },
];

const ChocolateWorks = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/5" id="plated-salads">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Plated Salads
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Fresh and artfully presented salad creations for banquet service
        </p>

        {isMobile ? (
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {chocolateImages.map((image, index) => (
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {chocolateImages.map((image, index) => (
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

export default ChocolateWorks;
