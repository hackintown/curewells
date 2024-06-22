import React, { useState } from "react";
import config from "../config";
import axios from "axios";
import { motion } from "framer-motion";

const EnquiryForm = ({ isModalOpen, toggleModal }) => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${config.apiBaseUrl}/api/enquiries`, {
        fname,
        email,
        phone,
        services,
      });
      setMessage("Enquiry Submitted Successfully!");
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      setMessage(`Enquiry failed: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    setServices(option);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, duration: 0.3 }
    },
  };

  const inputVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5 }
    },
  };

  return (
    <div>
      {isModalOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            className="relative max-w-md w-full bg-white rounded-lg shadow-lg p-6"
            variants={inputVariants}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">ENQUIRE NOW</h3>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-900"
                onClick={toggleModal}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <motion.div variants={inputVariants} className="mb-4">
                <input
                  id="fname"
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Enter Full Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={fname}
                  autoComplete="off"
                />
              </motion.div>
              <motion.div variants={inputVariants} className="mb-4">
                <input
                  id="email"
                  value={email}
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  autoComplete="off"
                />
              </motion.div>
              <motion.div variants={inputVariants} className="mb-4">
                <input
                  id="phone"
                  value={phone}
                  placeholder="Enter Phone Number"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="new-password"
                />
              </motion.div>
              <motion.div variants={inputVariants} className="mb-4 relative">
                <button
                  id="services"
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="button"
                  onClick={toggleDropdown}
                >
                  {selectedOption || "Choose Services"}
                  <svg
                    className="w-4 h-4 inline-block ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 w-full bg-white border rounded-lg shadow-md mt-2">
                    <ul>
                      {["Nursing Care", "GDA Available", "Newborn Care", "Daily Doctor Visit", "Elder Patient Care", "Physiotherapy", "Inpatient Services", "Critical Care"].map((service, index) => (
                        <li key={index} onClick={() => handleOptionSelect(service)} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
              <motion.div variants={inputVariants} className="mb-4">
                <textarea
                  placeholder="Notes"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="cover_letter"
                ></textarea>
              </motion.div>
              <motion.button
                variants={inputVariants}
                disabled={loading}
                className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg transition duration-300 ease-in-out hover:bg-blue-600"
                type="submit"
              >
                {loading ? "Processing..." : "Submit"}
              </motion.button>
              {message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-center text-sm text-gray-600"
                >
                  {message}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default EnquiryForm;
