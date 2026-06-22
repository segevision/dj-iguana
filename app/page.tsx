import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import MusicStyles from "@/components/MusicStyles";
import PriceEstimator from "@/components/PriceEstimator";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Testimonials />
      <Timeline />
      <MusicStyles />
      <PriceEstimator />
      <Instagram />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
