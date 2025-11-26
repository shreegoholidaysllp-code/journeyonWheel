import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

import VehiclesSection from "@/components/sections/VehiclesSection";
import ToursSection from "@/components/sections/ToursSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import CitiesSection from "@/components/sections/CitiesSection";
import FAQSection from "@/components/sections/FAQSection";


export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <ServicesSection/>
    <VehiclesSection/>
    <TestimonialsSection/>
    <ToursSection/>
    <CitiesSection/>
    <CTASection/>
    <FAQSection/>
    <Footer/>
     
    </>
  );
}
