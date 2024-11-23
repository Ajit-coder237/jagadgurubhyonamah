import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AcharyaparamparaPage from "./components/pages/acharyaparamparaPage";
import BhagwanyogirajPage from "./components/pages/bhagwanyogirajPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BhagwanyogirajPage />} />
        <Route path="/acharya" element={<AcharyaparamparaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
