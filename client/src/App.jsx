import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookAppointment from "./components/BookAppointment";
import EnquiryForm from "./components/ui/EnquiryForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Navbar toggleModal={toggleModal} />
      <div className="bg-[#F2F7FF]">
        <Hero toggleModal={toggleModal} />
      </div>

      <div className="bg-[#F2F7FF]">
        <Services />
      </div>

      <BookAppointment toggleModal={toggleModal} />
      <EnquiryForm isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}

export default App;
