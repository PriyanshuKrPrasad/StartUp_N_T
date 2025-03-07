import React from "react";
import { BsDribbble } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 ">
        {/* {1st column part} */}
        <div className="space-y-5">
          <h1 className="text-lg text-black font-bold">Solution</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            EnterPrice
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            By Workflow
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            By Team
          </p>
        </div>

        {/* {2nd column part} */}
        <div className="space-y-5">
          <h1 className="text-lg text-black font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            News & Press
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Our Customer
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Leadership
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Careers
          </p>
        </div>
        {/* {2nd column part} */}
        <div className="space-y-5">
          <h1 className="text-lg text-black font-bold">Resources</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blogs
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Webinar & Events
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Podcast
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            E-book & Guides
          </p>
        </div>
        {/* {4th path} */}
        <div className="text-lg text-black font-bold">
          Contact Us
          <div className="mt-6">
            <h1 className="text-sm  text-gray-600">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-blue-950">
              +333 7450939833
            </h1>
            <h3 className="text-base font-bold text-blue-900">
              +91 7450939833
            </h3>
          </div>
          <div className="mt-6">
            <h1 className="text-sm font-bold text-gray-600">Email</h1>
            <h1 className="text-base text-gray-700">
              priyanshukp123@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* {bottom part} */}
      <div className="mt-8  w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-gray-600 text-sm">
          Copyright © 2025 TechDev, All Rights Reserved by {"TechIndustries"}
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social :</span>
          <span className="text-gray-500 hover:text-gray-800 transition-all duration-300 ease-in-out cursor-pointer">
            <FaFacebook />
          </span>
          <span className="text-gray-500 hover:text-gray-800 transition-all duration-300 ease-in-out cursor-pointer">
            <FaTwitter />
          </span>
          <span className="text-gray-500 hover:text-gray-800 transition-all duration-300 ease-in-out cursor-pointer">
            <FaInstagram />
          </span>
          <span className="text-gray-500 hover:text-gray-800 transition-all duration-300 ease-in-out cursor-pointer">
            <BsDribbble />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
