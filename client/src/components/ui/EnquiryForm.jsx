import React, { useState } from "react";
import config from "../../config";

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
      const response = await axios.post(`${config.apiBaseUrl}/auth/register`, {
        fname,
        email,
        phone,
        services,
      });
      setMessage("Enquires Submitted Successfully!");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message,
      );
      setMessage(`Enquires failed: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false); // Close dropdown after selection if needed
  };
  return (
    <div>
      {isModalOpen && (
        <form onSubmit={handleSubmit}>
          <div className="fixed inset-0 z-50 bg-blue-500 bg-opacity-25"></div>
          <div className="fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0">
            <div className="relative m-auto max-h-full max-w-md p-4">
              <div className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-700">
                <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    ENQUIRE NOW
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                    onClick={toggleModal}
                  >
                    <svg
                      className="h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="flex flex-col">
                  <input
                    id="fname"
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="Enter Full Name"
                    className="mb-4 rounded-md border-0 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    type="text"
                    value={fname}
                    autoComplete="off"
                  />
                  <input
                    id="email"
                    value={email}
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4 rounded-md border-0 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    type="email"
                    autoComplete="off"
                  />
                  <input
                    id="phone"
                    value={phone}
                    placeholder="Enter Phone Number"
                    className="mb-4 rounded-md border-0 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="new-password"
                  />
                  <button
                    id="services"
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    className="mb-3 inline-flex items-center rounded-lg bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={toggleDropdown}
                  >
                    {selectedOption || "Choose Services"}
                    <svg
                      className="ms-3 h-2.5 w-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div
                      id="dropdown"
                      className="z-10 mb-2 w-full divide-y divide-gray-500 rounded-lg bg-gray-100 shadow dark:bg-gray-700"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <a
                            onClick={() => handleOptionSelect("Dashboard")}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => handleOptionSelect("Settings")}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => handleOptionSelect("Earnings")}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => handleOptionSelect(" Sign out")}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}

                  <textarea
                    placeholder="Notes"
                    className="mb-4 rounded-md border-0 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    name="cover_letter"
                  ></textarea>

                  <button
                    disabled={loading}
                    className="mt-4 rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 font-bold text-white transition duration-150 ease-in-out hover:bg-indigo-600 hover:to-blue-600"
                    type="submit"
                  >
                    {loading ? "Processing0" : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default EnquiryForm;
