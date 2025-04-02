import UpcomingEvents from "./UpcomingEvents";
import VideoCarousel from "./VideoCarousel";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Contact from "./Contact";
import WhyChooseUs from "./WhyChooseUs";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="w-full flex flex-col items-center bg-[#F9F9F9]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroSection />
    
      <UpcomingEvents />
      
      <VideoCarousel />

      <Testimonials />
     
      <FAQ />

      <WhyChooseUs />

      <Contact /> 
    </motion.div>
  );
};

export default Home;
