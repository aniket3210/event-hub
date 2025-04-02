import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import MyTickets from "./components/MyTickets";
import ExploreEvents from "./components/ExploreEvents";
import Dashboard from "./components/Dashboard";
import CreateEvent from "./components/CreateEvent";
import MyEvents from "./components/MyEvents";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exploreevents" element={<ExploreEvents />} />
        <Route path="/mytickets" element={<MyTickets />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/myevents" element={<MyEvents />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
