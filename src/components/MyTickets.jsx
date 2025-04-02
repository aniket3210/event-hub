import React, { useState, useEffect } from "react";
import Aos from "aos"; // AOS for animations
import "aos/dist/aos.css"; // AOS CSS

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);

  // Generate random tickets data
  const generateTickets = () => {
    const ticketData = [
      {
        id: 1,
        eventName: "Ed Sheeran Live Concert",
        date: "2025-04-10",
        price: 2500,
        isExpired: false,
      },
      {
        id: 2,
        eventName: "Tech Conference 2025",
        date: "2025-06-05",
        price: 0,
        isExpired: false,
      },
      {
        id: 3,
        eventName: "Cricket Championship Finale",
        date: "2025-07-10",
        price: 1500,
        isExpired: true,
      },
      {
        id: 4,
        eventName: "AI for Business Innovation",
        date: "2025-08-25",
        price: 1000,
        isExpired: true,
      },
      {
        id: 5,
        eventName: "Photography Exhibition",
        date: "2025-02-15",
        price: 500,
        isExpired: true,
      },
      {
        id: 6,
        eventName: "Startup Business Summit",
        date: "2025-08-01",
        price: 500,
        isExpired: false,
      },
      {
        id: 7,
        eventName: "Blockchain Seminar",
        date: "2025-11-15",
        price: 800,
        isExpired: true,
      },
      {
        id: 8,
        eventName: "Coding Bootcamp for Beginners",
        date: "2025-12-10",
        price: 0,
        isExpired: false,
      },
    ];
    setTickets(ticketData);
  };

  useEffect(() => {
    // Initialize AOS
    Aos.init({ duration: 1000 });

    // Generate random tickets on component mount
    generateTickets();
  }, []);

  return (
    <div className="my-tickets-container px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Tickets</h1>
      <div className="tickets-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className={`ticket-card rounded-lg shadow-lg overflow-hidden bg-white ${
              ticket.isExpired ? "bg-gray-200" : "bg-white"
            }`}
            data-aos="fade-up"
          >
            <div className="p-4">
              <h2
                className={`text-xl font-semibold ${
                  ticket.isExpired ? "text-gray-600 line-through" : "text-black"
                }`}
              >
                {ticket.eventName}
              </h2>
              <p
                className={`text-gray-600 ${
                  ticket.isExpired ? "text-gray-400" : ""
                }`}
              >
                {ticket.date}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span
                  className={`text-lg font-semibold ${
                    ticket.isExpired ? "text-gray-400" : "text-black"
                  }`}
                >
                  {ticket.isExpired ? "Expired" : `₹${ticket.price}`}
                </span>
                {ticket.isExpired ? (
                  <span className="text-sm text-gray-500">Expired</span>
                ) : (
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    View Details
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTickets;
