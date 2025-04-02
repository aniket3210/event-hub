import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
      title: "Music Festivals & Concerts",
      description:
        "Experience the thrill of live performances with world-class artists. Our curated music events create unforgettable moments across genres from rock to classical.",
      tag: "MUSIC",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg",
      title: "Business Conferences & Expos",
      description:
        "Connect with industry leaders and innovators at our premier business events. Expand your network and gain insights that drive success.",
      tag: "BUSINESS",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428_1280.jpg",
      title: "Interactive Workshops & Classes",
      description:
        "Hands-on learning experiences led by experts in their fields. Develop new skills and unleash your creativity in supportive, collaborative environments.",
      tag: "EDUCATION",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  return (
    <div className="rounded-2xl w-full max-w-[1480px] mx-auto px-4 md:px-8">
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

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Area */}
        <div className="relative h-full w-full flex flex-col justify-center items-center text-center md:text-left px-6 md:px-12">
          <div className="w-full max-w-3xl">
            {/* Category Tag */}
            <AnimatePresence mode="wait">
              <motion.span
                key={`tag-${currentSlide}`}
                className="inline-block px-4 py-1 bg-yellow-400 text-black text-sm font-bold tracking-wider rounded mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {carouselData[currentSlide].tag}
              </motion.span>
            </AnimatePresence>

            {/* Animated Title */}
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

            {/* Animated Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                className="text-lg md:text-xl text-gray-200 my-6 max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {carouselData[currentSlide].description}
              </motion.p>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                href="#explore"
                className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-md font-medium text-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Events
              </motion.a>

              <motion.a
                href={`#category-${carouselData[
                  currentSlide
                ].tag.toLowerCase()}`}
                className="px-6 py-3 border-2 border-white text-white rounded-md font-medium text-lg hover:bg-white hover:bg-opacity-10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View {carouselData[currentSlide].tag} Events
              </motion.a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-40 flex items-center justify-center text-white hover:bg-opacity-60 transition-all"
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + carouselData.length) % carouselData.length
            )
          }
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-40 flex items-center justify-center text-white hover:bg-opacity-60 transition-all"
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % carouselData.length)
          }
          aria-label="Next slide"
        >
          ❯
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center">
          <div className="flex space-x-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-6 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-yellow-400"
                    : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
