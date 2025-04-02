import React, { useState, useEffect } from "react";
import { FaPen, FaTrash, FaEye } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";

const MyEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) setEvents(JSON.parse(savedEvents));
  }, []);

  const handleDelete = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <div
      className="my-events-container bg-gradient-to-r from-green-600 to-teal-600 text-white min-h-screen flex flex-col items-center p-8"
      data-aos="fade-up"
    >
      <div className="w-full max-w-5xl bg-white text-black rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center mb-4">
          My Created Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-center mt-2">
                {event.name}
              </h3>
              <p className="text-sm text-center">{event.description}</p>
              <p className="text-sm text-gray-700">{event.date}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
              <div className="flex space-x-4 mt-2">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-full"
                  onClick={() => handleDelete(event.id)}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
