import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-8 mt-12" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About EventHub */}
        <motion.div
          className="flex flex-col gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-cyan-400">
            About EventHub
          </h3>
          <p className="text-gray-400 text-sm">
            EventHub is your one-stop platform for discovering and managing
            events. Find exciting events, book tickets, and create your own
            event easily.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-col gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-cyan-400">Quick Links</h3>
          <ul className="text-gray-400 text-sm flex flex-col gap-2">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Explore Events
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition">
              My Tickets
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Contact Us
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="flex flex-col gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-cyan-400">Follow Us</h3>
          <div className="flex gap-4">
            <Facebook
              size={24}
              className="text-gray-400 hover:text-cyan-400 cursor-pointer transition"
            />
            <Twitter
              size={24}
              className="text-gray-400 hover:text-cyan-400 cursor-pointer transition"
            />
            <Instagram
              size={24}
              className="text-gray-400 hover:text-cyan-400 cursor-pointer transition"
            />
            <Linkedin
              size={24}
              className="text-gray-400 hover:text-cyan-400 cursor-pointer transition"
            />
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} EventHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
