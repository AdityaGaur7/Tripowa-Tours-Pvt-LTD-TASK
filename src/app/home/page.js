'use client'
import React from 'react';
import { FiMapPin, FiSearch, FiHeart, FiHome, FiUser } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Data from '../service.js'

const TravelPage = () => {
  const router = useRouter();
  const popular = Data.popular;
  const handleProductClick = (id) => {
  
    
    router.push(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Explore Aspen</h1>
        <div className="flex items-center text-blue-500 space-x-1">
          <FiMapPin className="text-lg" />
          <span className="text-sm">Aspen, USA</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full shadow px-4 py-2 mb-4">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Find things to do"
          className="flex-grow focus:outline-none text-sm"
        />
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 text-gray-600">
        <button className="bg-white py-2 px-4 rounded-full shadow text-blue-500">Location</button>
        <button className="py-2 px-4">Hotels</button>
        <button className="py-2 px-4">Food</button>
        <button className="py-2 px-4">Adventure</button>
  
      </div>

      {/* Popular Section */}
      <div className="space-y-2">
  <div className="flex justify-between items-center">
    <h2 className="text-xl font-semibold">Popular</h2>
    <a href="#" className="text-sm text-blue-500">See all</a>
  </div>
  <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
    {
      popular.map((location, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-4">
          <img
            src={location.imageUrl}
            alt={location.place}
            className="w-60 h-60 rounded-lg object-cover cursor-pointer max-w-xs"
            onClick={() => handleProductClick(index)}
          />
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm font-semibold">{location.place}</p>
            <span className="text-xs bg-gray-100 p-1 rounded-lg">{location.rating}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
            {/* <span>{location.description}</span> */}
            <FiHeart className="text-red-500" />
          </div>
        </div>
      ))
    }
  </div>
</div>


      {/* Recommended Section */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Recommended</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {
          
          popular.slice().reverse().map((location, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-2 w-full">
    <img
            src={location.imageUrl}
            alt={location.place}
            className="w-60 h-60 rounded-lg object-cover cursor-pointer max-w-xs"
            onClick={() => handleProductClick(popular.length -1 -index)}
          />
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-semibold">{location.place}</p>
                <span className="text-xs bg-gray-100 p-1 rounded-lg">{location.rating}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                {/* <span>{location.description}</span> */}
                <FiHeart className="text-red-500" />
              </div>
            </div>
          ))
        }
        </div>

        </div>
      

    
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-around">
        <FiHome className="text-blue-500" />
        <FiHeart />
        <FiUser />
      </div>
    </div>
  );
};

export default TravelPage;
