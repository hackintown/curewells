import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import BookAppointment from "../components/BookAppointment";
import EnquiryForm from "../components/EnquiryForm";

const Home = () => {
  return (
    <div>
      <div className="bg-[#F2F7FF]">
        <Hero />
      </div>

      <div className="bg-[#F2F7FF]">
        <Services />
      </div>

      <BookAppointment />
      <EnquiryForm />
    </div>
  );
};

export default Home;
