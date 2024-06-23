import React from 'react';
import { FaHome, FaEnvelope, FaCog, FaStore, FaGavel, FaHeart, FaThList, FaWallet, FaHistory, FaQuestionCircle } from 'react-icons/fa'; // Import icons
import { userlogo } from '../utils/Constants';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=" fixed left-0 top-0 bottom-0 w-64 overflow-y-auto bg-white shadow-lg h-screen scroll-m-0  bg-gray-100 p-8">
      <div className="flex items-center space-x-1 mb-14">
        <img src={userlogo} className="w-12 h-12 rounded-full" alt="avatar" />
        <div>
          <h2 className="text-lg font-medium">Mithun Gowda</h2>
          <p className="text-gray-500">@mithun</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-sm">GENERAL</h2>
        <nav>
          <a href="#" className="flex   pointer  items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <FaHome className="mr-2" /> Dashboard
          </a>
          
          
          <a href="#" className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <FaEnvelope className="mr-2" /> Message
          </a>
          <a href="#" className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <FaCog className="mr-2" /> Settings
          </a>
        </nav>
      </div>

      <div className="mt-10">
        <h2 className="text-sm">MARKETPLACE</h2>
        <nav>
          <a href="#" className="flex   pointer  items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <FaStore className="mr-2" /> Market
          </a>
          <a href="#" className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <FaGavel className="mr-2" /> Active Bid
          </a>
          <a href="#" className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <FaHeart className="mr-2" /> Saved
          </a>
        </nav>
      </div>

      <div className="mt-10">
        <h2 className="text-sm">MY PROFILE</h2>
        <nav>
          <a href="#" className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <FaThList className="mr-2" /> Collection
          </a>
          <a href="#" className="flex   pointer  items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <FaWallet className="mr-2" /> Wallet
          </a>
          <a href="#" className="flex   pointer  items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <FaHistory className="mr-2" /> History
          </a>
        </nav>
      </div>

      <div className="mt-10">
        <div className="p-4 bg-black rounded-lg">
          <h4 className="font-medium mb-2 text-white">Help Center</h4>
          <p className="text-gray-600 mb-4">Having trouble in Enefti? Please contact us for more questions.</p>
          <button className="w-full py-2 px-4 bg-white text-black rounded-lg flex items-center justify-center">
            <FaQuestionCircle className="mr-2" /> Go To Help Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
