import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from './Header';
import VisionImg from '../../public/Images/Vision.jpg'
import WhoImg from '../../public/Images/Aboutus.jpg'
import MissionImg from '../../public/Images/ourMission.jpg'



const AboutUs = () => {

  return (
    <>
    <Header/>
     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg w-full">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">About Us</h1>

        <section className="mb-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <img src={WhoImg} alt="Bank Building" className="rounded-lg shadow-lg w-full object-cover" />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to XYZ Bank! We are committed to providing our customers with exceptional financial services and personalized solutions. Our bank has been a trusted name in the industry for over 50 years, consistently delivering quality service and fostering strong relationships with our clients.
            </p>
          </div>
        </section>

        <section className="mb-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower individuals and businesses by providing innovative financial solutions that promote growth and stability. We strive to exceed our customers' expectations through integrity, expertise, and a commitment to excellence.
            </p>
          </div>
          <div className="md:w-1/2 p-4 order-1 md:order-2">
            <img src={MissionImg} alt="Mission" className="rounded-lg shadow-lg w-full object-cover" />
          </div>
        </section>

        <section className="mb-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <img src={VisionImg} alt="Vision" className="rounded-lg shadow-lg w-full object-cover" />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to be the leading financial institution, known for our customer-centric approach, cutting-edge technology, and sustainable business practices. We aim to create a positive impact on our community and contribute to the economic development of the regions we serve.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <FaPhoneAlt className="text-blue-600 text-2xl mr-4" />
              <div>
                <p className="text-gray-700 font-semibold">Phone</p>
                <p className="text-gray-700">+1 (123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center mb-4 md:mb-0">
              <FaEnvelope className="text-blue-600 text-2xl mr-4" />
              <div>
                <p className="text-gray-700 font-semibold">Email</p>
                <p className="text-gray-700">support@xyzbank.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mr-4" />
              <div>
                <p className="text-gray-700 font-semibold">Address</p>
                <p className="text-gray-700">123 Bank Street, City, Country</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
   
  );
};

export default AboutUs;
