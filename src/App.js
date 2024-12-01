import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Section1"; // Assuming Services.js is in the components folder
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Footer from "./components/Footer";
import Appointment from "./components/Appointment"; // Import your Appointments page
import Admin from "./components/Admin"; // Import Admin page if it exists

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <Section2 id="services" /> {/* Added ID for smooth scrolling */}
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
              <Section7 id="contact" /> {/* Added ID for smooth scrolling */}
              <Footer />
            </>
          }
        />

        {/* Appointments Page */}
        <Route path="/appointment" element={<Appointment />} />

        {/* Admin Page */}
        <Route path="/admin" element={<Admin />} /> {/* Admin route */}
      </Routes>
    </Router>
  );
};

export default App;