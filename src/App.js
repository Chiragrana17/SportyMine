import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Mission from "./components/Mission";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Programs from "./components/Programs";
import Activities from "./components/Activities";
import Event from "./components/Event";
import Feedback from "./components/Feedback";
import Faq from "./components/Faq";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Welcome />
              <Mission />
              <Team />
              <Contact />
            </>
          }
        />{" "}
        <Route path="/programs" element={<Programs />} />{" "}
        <Route path="/hero" element={<Hero />} />{" "}
        <Route path="/welcome" element={<Welcome />} />{" "}
        <Route path="/mission" element={<Mission />} />{" "}
        <Route path="/team" element={<Team />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/activities" element={<Activities />} />{" "}
        <Route path="/events" element={<Event />} />{" "}
        <Route path="/feedback" element={<Feedback />} />{" "}
        <Route path="/faq" element={<Faq />} />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
