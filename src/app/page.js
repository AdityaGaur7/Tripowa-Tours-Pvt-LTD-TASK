'use client'

import React from 'react';
import {useRouter } from 'next/navigation';
const Banner = () => {
  const router = useRouter();
  return (
    <div
      className="relative h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/snowy-mountain-peak-against-clear-blue-sky_14117-848047.jpg?ga=GA1.1.1418771912.1722667438&semt=ais_hybrid)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-6xl font-bold mb-2 tracking-wide">Aspen</h1>
        <p className="text-2xl mb-8 text-center">Plan your <span className="font-bold">Luxurious Vacation</span></p>
        <button className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
        onClick={() =>  router.push('/home')}
        >
          Explore 
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default Banner;
