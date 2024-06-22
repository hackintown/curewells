import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserNurse, FaBaby, FaStethoscope, FaAmbulance, FaUserMd, FaBed, FaProcedures } from 'react-icons/fa';

const servicesInfo = [
  { icon: <FaHeartbeat size={40} className="text-red-500" />, title: "Nursing Care", description: "Our nursing care services ensure professional and compassionate care for patients in the comfort of their home." },
  { icon: <FaUserNurse size={40} className="text-blue-500" />, title: "GDA Available", description: "We provide General Duty Assistants to assist patients with daily activities and basic medical care." },
  { icon: <FaBaby size={40} className="text-green-500" />, title: "Newborn Care", description: "Our specialized newborn care services ensure your baby receives the best care right from the start." },
  { icon: <FaStethoscope size={40} className="text-yellow-500" />, title: "Daily Doctor Visit", description: "Our doctors are available for daily visits to monitor and manage your health conditions." },
  { icon: <FaProcedures size={40} className="text-pink-500" />, title: "Elder Patient Care", description: "Comprehensive care services for elderly patients, ensuring their health and comfort." },
  { icon: <FaUserMd size={40} className="text-purple-500" />, title: "Physiotherapy", description: "Expert physiotherapy services to aid recovery and improve mobility and strength." },
  { icon: <FaBed size={40} className="text-indigo-500" />, title: "Inpatient Services", description: "We offer inpatient services for comprehensive care of admitted patients." },
  { icon: <FaAmbulance size={40} className="text-teal-500" />, title: "Critical Care", description: "Our critical care services are designed to provide intensive medical care for severe conditions." }
];

const Services = () => {
  return (
    <div className="py-16 bg-gray-50" id='services'>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">Our Services</h2>
        <p className="text-lg font-medium text-center mb-12 text-gray-600">Providing 24/7 Home Services</p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {servicesInfo.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
