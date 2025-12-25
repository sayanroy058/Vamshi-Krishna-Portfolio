import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const awardImages = [
  { src: "/Awards/WhatsApp Image 2025-12-23 at 6.40.21 PM (1).jpeg", alt: "Award certificate 1" },
  { src: "/Awards/WhatsApp Image 2025-12-23 at 6.40.21 PM.jpeg", alt: "Award certificate 2" },
  { src: "/Certificates/WhatsApp Image 2025-12-23 at 6.40.20 PM (1).jpeg", alt: "Certificate 1" },
  { src: "/Certificates/WhatsApp Image 2025-12-23 at 6.40.20 PM.jpeg", alt: "Certificate 2" },
  { src: "/Certificates/WhatsApp Image 2025-12-23 at 6.40.21 PM.jpeg", alt: "Certificate 3" },
];

const AwardsGallery = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-background" id="awards-gallery">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Award Certificates
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Official recognition and certificates of achievement
        </p>

        {isMobile ? (
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {awardImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="shadow-elegant overflow-hidden border-none">
                    <CardContent className="p-4">
                      <div className="w-full flex items-center justify-center bg-muted/20 rounded-lg overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-auto object-contain max-h-[500px]"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {awardImages.map((image, index) => (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-glow transition-smooth overflow-hidden border-none"
              >
                <CardContent className="p-4">
                  <div className="w-full flex items-center justify-center bg-muted/20 rounded-lg overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto object-contain max-h-[500px] hover:scale-105 transition-smooth"
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

export default AwardsGallery;
