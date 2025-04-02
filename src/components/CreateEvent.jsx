import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";

const CreateEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    price: "",
    image: null,
  });

  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventDetails({
      ...eventDetails,
      image: URL.createObjectURL(file),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { ...eventDetails, id: Date.now() };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    alert("Event Created Successfully!");
    setEventDetails({
      name: "",
      description: "",
      date: "",
      location: "",
      price: "",
      image: null,
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 backdrop-blur-lg bg-opacity-80"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Create New Event
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form Inputs */}
          <input
            type="text"
            name="name"
            value={eventDetails.name}
            onChange={handleInputChange}
            placeholder="Event Name"
            required
            className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="description"
            value={eventDetails.description}
            onChange={handleInputChange}
            placeholder="Event Description"
            required
            className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={handleInputChange}
            required
            className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="location"
            value={eventDetails.location}
            onChange={handleInputChange}
            placeholder="Event Location"
            required
            className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            name="price"
            value={eventDetails.price}
            onChange={handleInputChange}
            placeholder="Ticket Price"
            required
            className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          {eventDetails.image && (
            <img
              src={eventDetails.image}
              alt="Event Preview"
              className="w-full h-32 object-cover mt-2 rounded-lg"
            />
          )}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center w-full hover:bg-blue-700 transition"
          >
            <FaPlusCircle className="mr-2" /> Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
