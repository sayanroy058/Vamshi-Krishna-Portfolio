import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const dessertImages = [
  { src: "/cheese and charcuterie boards/WhatsApp Image 2025-12-25 at 6.49.29 PM.jpeg", alt: "Cheese and charcuterie board 1" },
  { src: "/cheese and charcuterie boards/WhatsApp Image 2025-12-25 at 6.49.30 PM (1).jpeg", alt: "Cheese and charcuterie board 2" },
  { src: "/cheese and charcuterie boards/WhatsApp Image 2025-12-25 at 6.49.30 PM.jpeg", alt: "Cheese and charcuterie board 3" },
  { src: "/cheese and charcuterie boards/WhatsApp Image 2025-12-25 at 6.49.31 PM (1).jpeg", alt: "Cheese and charcuterie board 4" },
  { src: "/cheese and charcuterie boards/WhatsApp Image 2025-12-25 at 6.49.31 PM (2).jpeg", alt: "Cheese and charcuterie board 5" },
  { src: "/cheese and charcuterie boards/WhatsApp Image 2025-12-25 at 6.49.31 PM.jpeg", alt: "Cheese and charcuterie board 6" },
];

const PlatedDesserts = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-background" id="cheese-boards">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Cheese & Charcuterie Boards
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Expertly curated artisan cheese and charcuterie presentations
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
