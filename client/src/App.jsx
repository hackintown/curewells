import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";
import About from "./components/About";
import Services from "./components/Services";
import ServiceCards from "./components/ServiceCards";
import BookAnAppointment from "./components/BookAnAppointment";
import VideoSection from "./components/VideoSection";
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
        <ListItems />
      </div>

      <About />

      <div className="bg-[#F2F7FF]">
        <Services />
        <ServiceCards />
      </div>

      <BookAnAppointment />
      <VideoSection />
      <EnquiryForm isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}

export default App;
