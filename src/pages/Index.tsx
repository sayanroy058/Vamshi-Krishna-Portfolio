import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import AwardsGallery from "@/components/AwardsGallery";
import ChocolateWorks from "@/components/ChocolateWorks";
import WeddingCakes from "@/components/WeddingCakes";
import RoomAmenities from "@/components/RoomAmenities";
import PlatedDesserts from "@/components/PlatedDesserts";
import BarCocoa from "@/components/BarCocoa";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ChocolateWorks />
      <WeddingCakes />
      <RoomAmenities />
      <PlatedDesserts />
      <BarCocoa />
      <Education />
      <Awards />
      <AwardsGallery />
      <Contact />
    </main>
  );
};

export default Index;
