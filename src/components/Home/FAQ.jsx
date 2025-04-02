import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is EventHub?",
    answer:
      "EventHub is a platform that allows users to explore and book events while enabling organizers to create and manage their events easily.",
  },
  {
    question: "How do I book an event?",
    answer:
      "Simply browse events, select the one you like, and proceed with the booking. You will receive a confirmation email after successful booking.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Refunds depend on the event organizer’s policy. Please check the event details for refund eligibility.",
  },
  {
    question: "Can I host my own event?",
    answer:
      "Yes! If you’re an organizer, you can create and manage events using the EventHub dashboard.",
  },
  {
    question: "Do I need an account to book an event?",
    answer:
      "Yes, having an account helps us manage your tickets and provide a seamless experience.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach out to our support team via the ‘Contact Us’ page for any assistance.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100 text-center" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 cursor-pointer text-left"
            whileHover={{ scale: 1.02 }}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
            {openIndex === index && (
              <motion.p
                className="text-gray-600 mt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
