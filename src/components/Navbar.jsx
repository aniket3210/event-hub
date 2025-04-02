import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/logo-1.png";

const Navbar = ({ onSearch }) => {
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const attendeeMenu = ["Home", "Explore Events", "My Tickets"];
  const organizerMenu = [
    "Home",
    "Explore Events",
    "Dashboard",
    "Create Event",
    "My Events",
  ];
  const menuItems = isOrganizer ? organizerMenu : attendeeMenu;

  const toggleOrganizer = () => {
    setIsOrganizer(!isOrganizer);
    navigate("/");
    setIsMenuOpen(false); // Close menu on toggle
  };

  return (
    <>
      <nav className="flex sticky top-0 z-50 items-center justify-between px-4 md:px-8 py-3 bg-[#161f3d] shadow-2xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              src={logo}
              alt="EventHub Logo"
              className="w-12 h-12 rounded-full border-2 border-white shadow-md hover:scale-105 transition duration-300"
              whileHover={{ rotate: 5, scale: 1.1 }}
            />
            <p
              style={{ fontFamily: "'Breesh', 'serif'" }}
              className="text-[#aca0fa] text-2xl font-semibold tracking-wide"
            >
              EventHub
            </p>
          </Link>
        </div>

        {/* Search Bar (Hidden on Small Screens) */}
        {!isOrganizer && (
          <div className="hidden md:flex items-center bg-white rounded-lg shadow-md px-3 py-1">
            <input
              type="text"
              placeholder="Search Event"
              className="px-3 py-1 text-sm text-gray-700 outline-none border-r border-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              className="px-3 py-1 text-sm text-gray-700 outline-none ml-2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              className="px-3 py-1 bg-[#FBF49A] text-gray-900 cursor-pointer text-sm rounded-lg ml-2 hover:bg-[#FEBFDO] transition"
              onClick={() => onSearch(searchQuery, city)}
            >
              <Search size={16} />
            </button>
          </div>
        )}

        {/* Desktop Menu Items */}
        <ul className="hidden sm:flex gap-4 text-white text-sm md:text-base">
          {menuItems.map((item, index) => {
            const path =
              item === "Home"
                ? "/"
                : `/${item.replace(/\s+/g, "").toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <li
                key={index}
                className={`cursor-pointer px-2 py-1 rounded-md ${
                  isActive
                    ? "bg-[#574f4f] text-white font-bold"
                    : "hover:text-[#FEBFDO]"
                }`}
              >
                <Link to={path}>{item}</Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-white text-lg z-50 bg-[#FEBFDO] p-2 rounded-md shadow-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu - Fullscreen Overlay */}
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#161f3d] bg-opacity-95 flex flex-col items-center justify-center z-50 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={30} />
            </button>

            {menuItems.map((item, index) => {
              const path =
                item === "Home"
                  ? "/"
                  : `/${item.replace(/\s+/g, "").toLowerCase()}`;
              return (
                <Link
                  key={index}
                  to={path}
                  className="py-3 text-lg font-semibold transition hover:text-[#FEBFDO]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}

            {/* Organizer Toggle (Now visible in Mobile Menu) */}
            <div className="flex flex-col items-center mt-6">
              <p className="text-gray-300 text-sm mb-2">
                Mode: {isOrganizer ? "Organizer" : "Attendee"}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-md rounded-full bg-[#FBF49A] text-gray-900 border shadow-lg cursor-pointer hover:bg-[#FEBFDO] transition"
                onClick={toggleOrganizer}
              >
                {isOrganizer ? "Switch to Attendee" : "Switch to Organizer"}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Organizer Toggle (Visible on Desktop) */}
        <div className="hidden sm:flex flex-col items-center">
          <p className="text-white text-xs mb-1">
            Mode: {isOrganizer ? "Organizer" : "Attendee"}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 text-xs md:text-sm rounded-full bg-[#FBF49A] text-gray-900 border shadow-lg cursor-pointer hover:bg-[#FEBFDO] transition"
            onClick={toggleOrganizer}
          >
            {isOrganizer ? "Switch to Attendee" : "Switch to Organizer"}
          </motion.button>
        </div>
      </nav>

      {/* Sticky White Bar (Spacing Fix) */}
      <div className="bg-white sticky h-5 top-16 w-full z-5"></div>
    </>
  );
};

export default Navbar;
