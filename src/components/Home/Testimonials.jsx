import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "EventHub made booking events so seamless! The UI is stunning and user-friendly.",
    rating: 5,
  },
  {
    name: "Sanya Kapoor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Loved how easy it was to find events in my city. Highly recommend EventHub!",
    rating: 4.5,
  },
  {
    name: "Rohan Verma",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    feedback:
      "A game-changer for event organizers! It has everything we need to manage events.",
    rating: 5,
  },
  {
    name: "Ishita Sharma",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "The smooth animations and fast booking process make this platform outstanding!",
    rating: 4.8,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100 text-center" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        What People Say
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              {testimonial.name}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{testimonial.feedback}</p>
            <div className="flex mt-3">
              {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                <Star key={i} className="text-yellow-400" />
              ))}
              {testimonial.rating % 1 !== 0 && (
                <Star className="text-yellow-400 opacity-50" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
