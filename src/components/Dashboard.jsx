import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaTicketAlt,
  FaChartLine,
  FaArrowUp,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [ticketStats, setTicketStats] = useState({
    total: 200,
    sold: 120,
    available: 80,
  });
  const [showScroll, setShowScroll] = useState(false);

  // Generate event data
  const generateEventData = () => {
    const eventData = [
      {
        id: 1,
        name: "Tech Conference 2025",
        date: "2025-06-10",
        attendees: 150,
      },
      { id: 2, name: "AI for Business", date: "2025-07-15", attendees: 80 },
      { id: 3, name: "Photography Expo", date: "2025-08-05", attendees: 50 },
      { id: 4, name: "Music Fest 2025", date: "2025-09-22", attendees: 120 },
    ];
    setEvents(eventData);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    generateEventData();
    window.addEventListener("scroll", () => {
      setShowScroll(window.scrollY > 300);
    });
  }, []);

  return (
    <div className="dashboard-container">
      {/* Hero Section */}
      <section
        className="h-[400px] w-[1490px] rounded bg-cover bg-center flex flex-col justify-center items-center text-white px-8 m-5 relative"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/realistic-dynamic-fog-background_23-2149111508.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >
          <h1 className="text-5xl font-bold mb-4">Event Organizer Dashboard</h1>
          <p className="text-lg">
            Manage events & track ticket sales effortlessly.
          </p>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="flex justify-center gap-8">
          {[FaUsers, FaCalendarAlt, FaTicketAlt].map((Icon, index) => (
            <motion.div
              key={index}
              className="info-box bg-white text-black rounded-lg shadow-lg p-6 w-48 text-center"
              data-aos="fade-up"
            >
              <Icon className="text-4xl mx-auto mb-4" />
              <h2 className="text-xl font-semibold">
                {["Attendees", "Events", "Tickets Sold"][index]}
              </h2>
              <p>
                {[ticketStats.total, events.length, ticketStats.sold][index]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-16 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Event Overview</h2>
          <p className="text-lg">View event details & analytics</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="event-card bg-gray-100 rounded-lg shadow-lg p-6 w-80 h-96"
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up"
            >
              <img
                src={`https://images.pexels.com/photos/${event.id}123/pexels-photo.jpg`}
                alt={event.name}
                className="rounded-lg h-48 w-full object-cover mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
              <p className="text-sm text-gray-700">Date: {event.date}</p>
              <p className="text-sm text-gray-700">
                Attendees: {event.attendees}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Actionable Insights</h2>
        <p className="text-lg mb-6">
          Boost event engagement with these strategies:
        </p>
        <motion.div
          className="w-80 p-6 bg-white text-black rounded-lg shadow-lg mx-auto"
          whileHover={{ scale: 1.05 }}
          data-aos="fade-up"
        >
          <ul className="list-disc pl-6">
            <li>Increase marketing for high-demand events.</li>
            <li>Offer early bird discounts.</li>
            <li>Partner with influencers for outreach.</li>
          </ul>
        </motion.div>
      </section>

      {/* Back to Top Button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Dashboard;
