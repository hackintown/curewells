import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Button from "./ui/Button";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Navbar({ toggleModal }) {
  const [isOpen, setIsOpen] = useState(false);
  // Scroll to Services section function
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-[#F2F7FF] bg-opacity-80 backdrop-blur-md">
      {/* Upper Header */}
      <div className="flex justify-between bg-blue-500 px-4 py-2 text-sm text-white md:px-6">
        <div className="container mx-auto flex items-center justify-center md:justify-end gap-4 md:gap-6">
          <div className="flex items-center">
            <FaPhoneAlt className="text-sm md:text-xl" />
            <span className="ml-2 text-xs md:text-sm">+916284116914</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-xs md:text-xl" />
            <span className="ml-2 text-xs md:text-sm">
              curewell.homecare@gmail.com
            </span>
          </div>
        </div>
      </div>
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between">
        <Link to="/">
          <img
            className="h-[60px] w-[60px] object-contain lg:h-[80px] lg:w-[145px]"
            src="/logo.png"
            alt="Logo"
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <Link
              to="/"
              className="text-primary-start hover:text-primary-start hover:opacity-100"
            >
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={scrollToServices}
              className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
            >
              Services
            </button>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
            >
              Contact
            </Link>
          </li>
        </ul>

        <Button className="hidden md:flex" onClick={toggleModal} />

        {/* Mobile Screen */}
        <div className="relative md:hidden">
          {isOpen ? (
            <IoMdClose
              onClick={() => setIsOpen(false)}
              className="size-7 cursor-pointer text-primary-end"
            />
          ) : (
            <HiMiniBars3BottomRight
              onClick={() => setIsOpen(true)}
              className="size-8 cursor-pointer text-primary-end"
            />
          )}

          {isOpen && (
            <div className="absolute right-2 top-8 min-w-[220px] rounded-2xl border bg-white p-4 shadow-lg">
              <ul className="mb-8 flex flex-col items-center gap-6">
                <li>
                  <Link
                    to="/"
                    className="text-primary-start hover:text-primary-start hover:opacity-100"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <Button className="w-full" onClick={toggleModal} />
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
