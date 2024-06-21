import React from "react";

const EnquiryForm = ({ isModalOpen, toggleModal }) => {
  return (
    <div>
      {isModalOpen && (
        <>
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <form className="flex flex-col">
                  <input
                    placeholder="Full Name"
                    className="mb-4 rounded-md border-0 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    type="text"
                  />
                  <input
                    placeholder="Email"
                    className="mb-4 rounded-md border-0 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    type="email"
                  />
                  <input
                    placeholder="Phone Number"
                    className="mb-4 rounded-md border-0 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    type="text"
                  />
                  <textarea
                    placeholder="Notes"
                    className="mb-4 rounded-md border-0 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    name="cover_letter"
                  ></textarea>

                  <button
                    className="mt-4 rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 font-bold text-white transition duration-150 ease-in-out hover:bg-indigo-600 hover:to-blue-600"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EnquiryForm;
