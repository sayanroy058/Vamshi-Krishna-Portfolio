import { useState } from 'react';
import { ChefHat, X } from 'lucide-react';

import creationBruschetta from '@/assets/creation-bruschetta.jpeg';
import creationLambRack from '@/assets/creation-lamb-rack.jpeg';
import creationAsparagus from '@/assets/creation-asparagus.jpeg';
import creationCharcuterie from '@/assets/creation-charcuterie.jpeg';
import creationSalamiCones from '@/assets/creation-salami-cones.jpeg';
import creationBeanSalad from '@/assets/creation-bean-salad.jpeg';
import creationRisotto from '@/assets/creation-risotto.jpeg';
import creationStuffedFigs from '@/assets/creation-stuffed-figs.jpeg';
import creationFruitPlatter from '@/assets/creation-fruit-platter.jpeg';
import creationSurfTurf from '@/assets/creation-surf-turf.jpeg';
import whatsapp2 from '@/assets/WhatsApp Image 2025-12-23 at 6.40.26 PM (1).jpeg';
import whatsapp3 from '@/assets/WhatsApp Image 2025-12-23 at 6.40.26 PM.jpeg';
import whatsapp4 from '@/assets/WhatsApp Image 2025-12-23 at 6.40.27 PM (1).jpeg';
import whatsapp5 from '@/assets/WhatsApp Image 2025-12-23 at 6.40.27 PM.jpeg';

const creations = [
  {
    id: 1,
    image: creationBruschetta,
    title: 'Caprese Bruschetta',
    category: 'Appetizers',
  },
  {
    id: 2,
    image: creationLambRack,
    title: 'Herb-Crusted Lamb Rack',
    category: 'Main Course',
  },
  {
    id: 3,
    image: creationCharcuterie,
    title: 'Artisan Charcuterie Board',
    category: 'Appetizers',
  },
  {
    id: 4,
    image: creationFruitPlatter,
    title: 'Rainbow Fruit Display',
    category: 'Desserts',
  },
  {
    id: 5,
    image: creationStuffedFigs,
    title: 'Bacon-Wrapped Stuffed Figs',
    category: 'Main Course',
  },
  {
    id: 6,
    image: creationSurfTurf,
    title: 'Surf & Turf Platter',
    category: 'Main Course',
  },
  {
    id: 7,
    image: creationAsparagus,
    title: 'Grilled Asparagus & Shrimp',
    category: 'Main Course',
  },
  {
    id: 8,
    image: creationSalamiCones,
    title: 'Italian Salami Cones',
    category: 'Appetizers',
  },
  {
    id: 9,
    image: creationBeanSalad,
    title: 'Tuscan Bean Salad Cups',
    category: 'Appetizers',
  },
  {
    id: 10,
    image: creationRisotto,
    title: 'Chicken Risotto',
    category: 'Main Course',
  },
  {
    id: 12,
    image: whatsapp2,
    title: 'Signature Dish',
    category: 'Main Course',
  },
  {
    id: 13,
    image: whatsapp3,
    title: 'Chef Special',
    category: 'Main Course',
  },
  {
    id: 14,
    image: whatsapp4,
    title: 'Banquet Creation',
    category: 'Appetizers',
  },
  {
    id: 15,
    image: whatsapp5,
    title: 'Culinary Excellence',
    category: 'Main Course',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof creations[0] | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block font-body text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Portfolio
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6">
              My Culinary Creations
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4 md:mb-6" />
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              A showcase of dishes crafted with passion, precision, and creativity at The Ritz-Carlton
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {creations.map((creation, index) => (
              <div
                key={creation.id}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-card cursor-pointer ${
                  index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(creation)}
              >
                <div className={`relative ${
                  index === 0 || index === 3 ? 'aspect-square' : 'aspect-square'
                }`}>
                  <img
                    src={creation.image}
                    alt={creation.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-body text-xs text-accent mb-1">{creation.category}</span>
                    <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-primary-foreground leading-tight">
                      {creation.title}
                    </h4>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChefHat size={16} className="text-accent sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card/20 flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          <div 
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl sm:rounded-2xl"
            />
            <div className="text-center mt-4 sm:mt-6">
              <span className="font-body text-sm text-accent">{selectedImage.category}</span>
              <h4 className="font-heading text-xl sm:text-2xl font-semibold text-primary-foreground mt-1 sm:mt-2">
                {selectedImage.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
