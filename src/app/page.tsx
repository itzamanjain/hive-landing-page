import Image from "next/image";
import Hero from "./components/Hero";
import Feat from "./components/Feat";
import Contact from "./components/Contact";
import Footerdemo from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";
import { FAQ } from "./components/Faqs";
export default function Home() {
  return (
    <div>
      <Hero />
      <Feat />
      <Testimonial />
      
      <Contact />
      <FAQ />
      <Footerdemo />

    </div>
  );
}
