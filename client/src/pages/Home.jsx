import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import BookAppointment from "../components/BookAppointment";
import EnquiryForm from "../components/EnquiryForm";

const Home = ({ toggleModal }) => {
  return (
    <div>
      <div className="bg-[#F2F7FF]">
        <Hero toggleModal={toggleModal} />
      </div>

      <div className="bg-[#F2F7FF]">
        <Services toggleModal={toggleModal} />
      </div>

      <BookAppointment toggleModal={toggleModal} />
    </div>
  );
};

export default Home;
