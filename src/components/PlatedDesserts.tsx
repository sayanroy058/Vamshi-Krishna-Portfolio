import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const dessertImages = [
  { src: "/Plated Desserts/WhatsApp Image 2025-11-10 at 6.33.28 PM.jpeg", alt: "Plated dessert 1" },
  { src: "/Plated Desserts/WhatsApp Image 2025-11-10 at 6.33.29 PM (1).jpeg", alt: "Plated dessert 2" },
  { src: "/Plated Desserts/WhatsApp Image 2025-11-10 at 6.33.29 PM (2).jpeg", alt: "Plated dessert 3" },
  { src: "/Plated Desserts/WhatsApp Image 2025-11-10 at 6.33.29 PM.jpeg", alt: "Plated dessert 4" },
  { src: "/Plated Desserts/WhatsApp Image 2025-11-10 at 6.33.30 PM.jpeg", alt: "Plated dessert 5" },
];

const PlatedDesserts = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-background" id="plated-desserts">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Plated Desserts
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Exquisite plated dessert presentations combining artistry and flavor
        </p>

        {isMobile ? (
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {dessertImages.map((image, index) => (
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
            {dessertImages.map((image, index) => (
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

export default PlatedDesserts;
