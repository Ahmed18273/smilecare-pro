import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/stats";
import Footer from "@/components/layout/footer";
import About from "@/components/home/about";
import Testimonials from "@/components/home/testimonials";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}