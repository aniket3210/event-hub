import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Wide Range of Events",
    description:
      "From concerts to workshops, find events that suit your interests.",
  },
  {
    title: "Seamless Booking",
    description: "Easy and quick booking process with instant confirmation.",
  },
  {
    title: "Secure Payments",
    description: "Multiple payment options with high-level security.",
  },
  {
    title: "User-Friendly Experience",
    description: "Smooth navigation and personalized event recommendations.",
  },
  {
    title: "Support & Assistance",
    description: "24/7 customer support to help with any queries.",
  },
  {
    title: "Event Hosting Made Easy",
    description:
      "Organizers can create, manage, and track events effortlessly.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-[#f0f9ff] text-center" id="why-choose-us">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Why Choose <span className="text-cyan-600">EventHub?</span>
      </h2>
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <CheckCircle size={40} className="text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
