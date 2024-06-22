import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import ContactPage from "./components/ContactPage";
import EnquiryForm from "./components/EnquiryForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Navbar toggleModal={toggleModal} />
      <Routes>
        <Route exact path="/" element={<Home toggleModal={toggleModal} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Conditionally render EnquiryForm outside of Routes */}
      {isModalOpen && (
        <EnquiryForm isModalOpen={isModalOpen} toggleModal={toggleModal} />
      )}
    </div>
  );
}

export default App;
