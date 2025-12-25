import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const barCocoaImages = [
  { src: "/Bar Cocoa – Coffee Shop Operations/WhatsApp Image 2025-11-10 at 6.33.15 PM.jpeg", alt: "Bar Cocoa operations 1" },
  { src: "/Bar Cocoa – Coffee Shop Operations/WhatsApp Image 2025-11-10 at 6.33.16 PM (1).jpeg", alt: "Bar Cocoa operations 2" },
  { src: "/Bar Cocoa – Coffee Shop Operations/WhatsApp Image 2025-11-10 at 6.33.16 PM.jpeg", alt: "Bar Cocoa operations 3" },
  { src: "/Bar Cocoa – Coffee Shop Operations/WhatsApp Image 2025-11-10 at 6.33.17 PM (1).jpeg", alt: "Bar Cocoa operations 4" },
  { src: "/Bar Cocoa – Coffee Shop Operations/WhatsApp Image 2025-11-10 at 6.33.17 PM (2).jpeg", alt: "Bar Cocoa operations 5" },
  { src: "/Bar Cocoa – Coffee Shop Operations/WhatsApp Image 2025-11-10 at 6.33.17 PM.jpeg", alt: "Bar Cocoa operations 6" },
];

const BarCocoa = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-accent/5" id="bar-cocoa">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Bar Cocoa – Coffee Shop Operations
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Professional coffee shop management and barista expertise
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
