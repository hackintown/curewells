import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import ContactPage from "./components/ContactPage";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Routes>
      <Route path="/" element={<Navbar toggleModal={toggleModal} />}>
        <Route exact path="/" element={<Home toggleModal={toggleModal} />} />
        <Route path="/contact" element={<ContactPage />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
