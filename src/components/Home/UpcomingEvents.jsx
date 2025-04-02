import React, { useEffect, useState } from "react";
import eventsData from "../../events.json"; // Ensure the path to your events.json file is correct
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Sort events by date
    const sortedEvents = eventsData.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setEvents(sortedEvents.slice(0, 8)); // Get first 8 events
  }, []);

  return (
    <section className="upcoming-events py-10 m-2">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="event-card bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }} // Hover effect for scaling
            whileTap={{ scale: 0.95 }} // Slightly shrinks on tap/click
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {event.name}
              </h3>
              <p className="text-sm text-gray-500">{event.location}</p>
              <p className="text-md font-medium text-gray-700">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                {event.description.slice(0, 100)}...
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-semibold text-gray-700">
                  {event.price > 0 ? `₹${event.price}` : "Free"}
                </span>
                <Link
                  to={`/explore-events/${event.id}`}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Explore
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/exploreevents"
          className="btn btn-primary text-white py-2 px-6 rounded-lg bg-blue-600 hover:bg-blue-700"
        >
          Explore More Events
        </Link>
      </div>
    </section>
  );
};

export default UpcomingEvents;
