import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS CSS

import eventsData from "../events.json"; // Import your events data

const ExploreEvents = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Ensures animations only happen once
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Events</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
            data-aos="fade-up"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{event.location}</span>
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold">
                  {event.price === 0 ? "Free" : `₹${event.price}`}
                </span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default ExploreEvents;
