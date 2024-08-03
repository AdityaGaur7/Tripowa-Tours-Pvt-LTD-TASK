'use client'
// import { useRouter } from 'next/navigation';

// const productDetails = [
//   // Example data, replace with real data
//   { name: 'Paris', description: 'The city of light' },
// { name: 'New York', description: 'The big apple' },
//   // Add more product details
// ];

// export default function ProductDetailsPage(props) {
//     const router = useRouter();
    
//     const  id  = props.params.id;
//     const product = productDetails[id-1];
    
//     console.log(productDetails);

//     if (!product) return <div>Loading...</div>;

//     return (
//         <div className="p-4">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg">{product.description}</p>
//         </div>
//     );
// }
// src/components/PropertyDetailCard.jsx

import React from 'react';
import { FiHeart, FiMapPin, FiArrowLeft } from 'react-icons/fi';
// import ExampleImage from '../assets/example3.jpg'; // Replace with actual image path
import Data from '../../service.js'

const PropertyDetailCard = (props) => {
    const  id  = props.params.id;
    const data = Data.popular;
        const product = data[id];
       console.log(product);
        

        // if (!product) return <div>Loading...</div>;
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image and Icons */}
      <div className="relative">
        <img src={product.imageUrl} alt="Coeurdes Alpes" className="w-full h-72 object-cover my-4 rounded-lg" />
        <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow">
          <FiArrowLeft className="text-gray-800" />
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
          <FiHeart className="text-red-500" />
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{product.place}</h2>
            <div className="flex items-center text-sm text-gray-500">
              <span className="text-yellow-500">★</span>
              <span className="ml-1">{product.rating} ({product.reviews})</span>
            </div>
          </div>
          <button className="text-blue-500 text-sm" onClick={()=>window.location.href=`${product.mapAddress}`}>Show map</button>
        </div>

        <p className="text-gray-600 text-sm">
         {product.description}
          <span className="text-blue-500 cursor-pointer"> Read more</span>
        </p>

        {/* Facilities */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Facilities</h3>
          <div className="flex space-x-4 text-gray-600 text-sm">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100  rounded-full">
                <div className="w-6 h-6" />🔥 <div/>
              </div>
              <span>1 Heater</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100  rounded-full">
                <div className="w-6 h-6" />🍽️ <div/>
              </div>
              <span>Dinner</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100  rounded-full">
                <div  className="w-6 h-6" /> 🛁<div/>
              </div>
              <span>1 Tub</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100  rounded-full">
                <div className="w-6 h-6" /> 🤽<div/>
              </div>
              <span>Pool</span>
            </div>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-green-500">Price {product.price}</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailCard;
