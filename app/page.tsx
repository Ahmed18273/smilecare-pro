import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/stats";
import About from "@/components/home/about";
import Testimonials from "@/components/home/testimonials";
import Gallery from "@/components/home/gallery";
import AppointmentForm from "@/components/forms/AppointmentForm";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/common/BackToTop";
import WhatsAppButton from "@/components/common/WhatsappButton";
import FAQ from "@/components/home/FAQ";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <AppointmentForm />
      <Contact />
      <BackToTopButton />
      <WhatsAppButton />
      <Footer />
    </>
  );
}