import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import config from "../config";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${config.apiBaseUrl}/api/contact`, {
        name,
        email,
        message,
      });
      console.log("Response:", response.data);
      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-100 flex flex-col items-center"
    >
      {/* Banner Section */}
      <section className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2">Feel free to reach out to us for any inquiries or questions!</p>
      </section>

      {/* Contact Form Section */}
      <motion.div 
        className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              required
            />
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              required
            />
          </div>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full p-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded-lg transition duration-300 ease-in-out ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:from-indigo-600 hover:to-blue-600"
            }`}
            disabled={loading}
            type="submit"
          >
            {loading ? "Sending..." : sent ? "Sent!" : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      {/* Map Section */}
      <section className="w-full h-96 mt-8">
        <iframe
          className="w-full h-full"
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124.00210685741815!2d-1.2458617863133947!3d51.52050236187013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605e64f0eab5d%3A0xef049e812da828f6!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1624335576655!5m2!1sen!2suk"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </section>

      {/* 24x7 Services Section */}
      <section className="bg-gray-200 py-12 px-4 text-center w-full">
        <h2 className="text-3xl font-bold mb-4">Our 24x7 Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard icon={<FaMapMarkerAlt className="text-4xl text-indigo-500" />} title="Location" description="Visit us at our central location in the heart of the city." />
          <ServiceCard icon={<FaPhoneAlt className="text-4xl text-indigo-500" />} title="Remote Assistance" description="Get assistance remotely via phone or online platforms." />
          <ServiceCard icon={<FaEnvelope className="text-4xl text-indigo-500" />} title="Emergency Services" description="24x7 emergency services available for urgent medical needs." />
          <ServiceCard icon={<FaGlobe className="text-4xl text-indigo-500" />} title="Online Consultation" description="Schedule consultations with our experts online at your convenience." />
        </div>
      </section>
    </motion.div>
  );
};

// Example ServiceCard component
const ServiceCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default ContactPage;
