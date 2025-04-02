import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Event-related images for carousel
  const carouselData = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg", // Replace with actual concert image URL
      title: "Music Festivals & Concerts",
      description:
        "Experience the thrill of live performances with world-class artists. Our curated music events create unforgettable moments across genres from rock to classical.",
      tag: "MUSIC",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg", // Replace with actual conference image URL
      title: "Business Conferences & Expos",
      description:
        "Connect with industry leaders and innovators at our premier business events. Expand your network and gain insights that drive success.",
      tag: "BUSINESS",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428_1280.jpg", // Replace with actual workshop image URL
      title: "Interactive Workshops & Classes",
      description:
        "Hands-on learning experiences led by experts in their fields. Develop new skills and unleash your creativity in supportive, collaborative environments.",
      tag: "EDUCATION",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/03/01/22/27/women-655353_1280.jpg", // Replace with actual sports image URL
      title: "Sporting Events & Competitions",
      description:
        "Feel the excitement of championship tournaments and athletic showcases. From marathons to gaming tournaments, we bring competitors together.",
      tag: "SPORTS",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2013/02/14/14/13/kitchen-81644_1280.jpg", // Replace with actual food festival image URL
      title: "Food & Wine Festivals",
      description:
        "Indulge in culinary delights from renowned chefs and artisanal producers. Our gastronomic events celebrate food cultures from around the world.",
      tag: "CULINARY",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2020/04/16/09/57/watercolor-5049980_1280.jpg", // Replace with actual art exhibition image URL
      title: "Art Exhibitions & Cultural Shows",
      description:
        "Immerse yourself in creative expression through our curated exhibitions and performances celebrating diverse artistic traditions and innovations.",
      tag: "ARTS",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  // Initialize AOS
  useEffect(() => {
    const elements = document.querySelectorAll("[data-aos]");
    elements.forEach((el) => {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, 300);
    });
  }, []);

  return (
    <div className="rounded-2xl w-full max-w-[1480px] mx-auto">
      <motion.section
        className="relative rounded-xl overflow-hidden shadow-xl w-full"
        style={{ aspectRatio: "21/9", maxHeight: "85vh" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Carousel */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={carouselData[currentSlide].image}
                alt={carouselData[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient overlays for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content area */}
        <div className="relative h-full w-full flex flex-col justify-center">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
            <div className="w-full md:w-3/5 lg:w-1/2">
              {/* Event category tag */}
              <div
                data-aos="fade-up"
                className="opacity-0 transform translate-y-8 transition-opacity duration-800"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`tag-${currentSlide}`}
                    className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-bold tracking-wider rounded mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {carouselData[currentSlide].tag}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Animated title */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="opacity-0 transform translate-y-8 transition-opacity duration-800 delay-100"
              >
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={`title-${currentSlide}`}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {carouselData[currentSlide].title}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Animated divider */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="opacity-0 transform translate-y-8 transition-opacity duration-800 delay-200"
              >
                <motion.div
                  className="h-1 w-20 bg-yellow-400 my-6"
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>

              {/* Animated description */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="opacity-0 transform translate-y-8 transition-opacity duration-800 delay-300"
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${currentSlide}`}
                    className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {carouselData[currentSlide].description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* CTA Buttons */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="opacity-0 flex flex-wrap gap-4 transform translate-y-8 transition-opacity duration-800 delay-400"
              >
                <motion.a
                  href="#explore"
                  className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-md font-medium text-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Events
                </motion.a>

                <motion.a
                  href={`#category-${carouselData[
                    currentSlide
                  ].tag.toLowerCase()}`}
                  className="px-8 py-3 border-2 border-white text-white rounded-md font-medium text-lg hover:bg-white hover:bg-opacity-10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View {carouselData[currentSlide].tag} Events
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Event counter stats */}
        <div className="absolute bottom-16 right-10 bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-4 hidden md:flex gap-6 border border-white/10">
          <div className="text-center px-3">
            <p className="text-3xl font-bold text-yellow-400">1,200+</p>
            <p className="text-white text-sm">Annual Events</p>
          </div>
          <div className="text-center px-3 border-l border-r border-white/20">
            <p className="text-3xl font-bold text-yellow-400">35+</p>
            <p className="text-white text-sm">Countries</p>
          </div>
          <div className="text-center px-3">
            <p className="text-3xl font-bold text-yellow-400">500K+</p>
            <p className="text-white text-sm">Attendees</p>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center">
          <div className="flex space-x-3">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-yellow-400 w-8"
                    : "bg-white bg-opacity-50 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel navigation arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-30 flex items-center justify-center text-white hover:bg-opacity-50 transition-all border border-white/30"
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + carouselData.length) % carouselData.length
            )
          }
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-30 flex items-center justify-center text-white hover:bg-opacity-50 transition-all border border-white/30"
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % carouselData.length)
          }
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </motion.section>
    </div>
  );
};

export default HeroSection;
