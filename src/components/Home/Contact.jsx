import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-12 bg-gray-100 text-center" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Contact Us
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        {/* Contact Info */}
        <div className="flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <Mail size={24} className="text-cyan-600" />
            <p className="text-gray-700">support@eventhub.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={24} className="text-cyan-600" />
            <p className="text-gray-700">+1 (234) 567-890</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={24} className="text-cyan-600" />
            <p className="text-gray-700">123 Event Street, NY, USA</p>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4"
          onSubmit={handleSubmit}
          whileHover={{ scale: 1.02 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <motion.button
            type="submit"
            className="bg-cyan-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-cyan-700 transition"
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
          {submitted && (
            <p className="text-green-600 mt-2">Message sent successfully!</p>
          )}
        </motion.form>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <motion.button
          className="fixed bottom-6 right-6 bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transition"
          onClick={scrollToTop}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </section>
  );
};

export default Contact;
