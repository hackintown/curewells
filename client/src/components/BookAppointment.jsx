import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BookAppointment({toggleModal}) {
  return (
    <div className="mx-auto mb-[20px] max-w-screen-xl px-3 pt-[80px] md:mb-[213px] md:pt-[18px]">
      <p className="mb-3 text-center font-poppins text-[22px] font-medium text-secondary">
        Book an Appointment
      </p>
      <div className="flex h-auto flex-col items-center justify-center rounded-[32px] bg-gradient-to-tl from-primary-start to-primary-end p-8 text-white md:h-[315px] md:p-12">
        <h3 className="font-poppins text-2xl font-semibold text-center md:text-[32px]">
          Schedule a Virtual or In-Person Appointment Today
        </h3>
        <p className="mb-6 mt-3 max-w-[676px] text-center text-lg md:text-xl">
          Experience the best in personalized healthcare with our 24/7 services. 
          Whether you need a routine check-up or urgent care, our expert team is here to assist you.
        </p>
        <button onClick={toggleModal} className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-medium text-primary-start shadow-lg transition-transform duration-300 hover:scale-105 md:px-8 md:py-4">
          <FaWhatsapp className="text-2xl" />
          Book an Appointment
        </button>
      </div>
    </div>
  );
}
