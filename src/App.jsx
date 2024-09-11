import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Events from "./Pages/Events"
import About from "./Pages/About"
import Membership from "./Pages/Membership"
import Team from "./Pages/Team"

const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  </div>
  );
};

export default App;