import React from "react";
import BoxText from "../../Helper/BoxText";
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        <BoxText>Our Services</BoxText>
        {/* {Heading} */}
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Our Services Made For You
        </h1>
        {/* {description} */}
        <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quod
          dicta consequatur dolorem id ex, praesentium sunt nisi blanditiis
          laborum!
        </p>
        {/* {Grid} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
          {/* {1st Service} */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="flex items-center space-x-5"
          >
            {/* {icon} */}
            <div
              className="w-14 h-14 rounded-md flex items-center  justify-center flex-col
                 bg-pink-200 bg-opacity-20"
            >
              <FaRocket className="w-6 h-6 text-orange-400" />
            </div>
            {/* {text content} */}
            <div>
              <p className="text-lg font-bold text-gray-700">Start Up</p>
              <p className="text-sm text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                praesentium.
              </p>
            </div>
          </div>
          {/* {2nd Service} */}
          <div data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay='100' className="flex items-center space-x-5">
            {/* {icon} */}
            <div
              className="w-14 h-14 rounded-md flex items-center  justify-center flex-col
                 bg-pink-200 bg-opacity-20"
            >
              <FaBriefcase className="w-6 h-6 text-orange-400" />
            </div>
            {/* {text content} */}
            <div>
              <p className="text-lg font-bold text-gray-700">Business</p>
              <p className="text-sm text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                praesentium.
              </p>
            </div>
          </div>
          {/* {3rd Service} */}
          <div data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay='200' className="flex items-center space-x-5">
            {/* {icon} */}
            <div
              className="w-14 h-14 rounded-md flex items-center  justify-center flex-col
                 bg-pink-200 bg-opacity-20"
            >
              <FaShoppingCart className="w-6 h-6 text-orange-400" />
            </div>
            {/* {text content} */}
            <div>
              <p className="text-lg font-bold text-gray-700">E-commerce</p>
              <p className="text-sm text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                praesentium.
              </p>
            </div>
          </div>
          {/* {4th Service} */}
          <div data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay='300' className="flex items-center space-x-5">
            {/* {icon} */}
            <div
              className="w-14 h-14 rounded-md flex items-center  justify-center flex-col
                 bg-pink-200 bg-opacity-20"
            >
              <MdOutlineDesignServices className="w-6 h-6 text-orange-400" />
            </div>
            {/* {text content} */}
            <div>
              <p className="text-lg font-bold text-gray-700">Digital Design</p>
              <p className="text-sm text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                praesentium.
              </p>
            </div>
          </div>
          {/* {5th Service} */}
          <div data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay='400'  className="flex items-center space-x-5">
            {/* {icon} */}
            <div
              className="w-14 h-14 rounded-md flex items-center  justify-center flex-col
                 bg-pink-200 bg-opacity-20"
            >
              <IoColorPaletteOutline className="w-6 h-6 text-orange-400" />
            </div>
            {/* {text content} */}
            <div>
              <p className="text-lg font-bold text-gray-700">
                Unlimited Colour
              </p>
              <p className="text-sm text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                praesentium.
              </p>
            </div>
          </div>
          {/* {6th Service} */}
          <div data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay='500'  className="flex items-center space-x-5">
            {/* {icon} */}
            <div
              className="w-14 h-14 rounded-md flex items-center  justify-center flex-col
                 bg-pink-200 bg-opacity-20"
            >
              <FaChess className="w-6 h-6 text-orange-400" />
            </div>
            {/* {text content} */}
            <div>
              <p className="text-lg font-bold text-gray-700">
                Strategy Solution
              </p>
              <p className="text-sm text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                praesentium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
