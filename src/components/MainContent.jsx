// ./src/components/MainContent.jsx
import React from 'react';
import { FaQuoteRight, FaFilm, FaUtensils, FaNewspaper, FaTasks, FaBook, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const features = [
  { name: "Quotes", description: "Inspire your day with quotes", icon: <FaQuoteRight /> },
  { name: "Movies", description: "Get info on latest movies", icon: <FaFilm /> },
  { name: "Recipes", description: "Find delicious recipes", icon: <FaUtensils /> },
  { name: "News", description: "Stay updated with current events", icon: <FaNewspaper /> },
  { name: "Tasks", description: "Manage your to-do list", icon: <FaTasks /> },
  { name: "Books", description: "Discover great books", icon: <FaBook /> },
  { name: "World", description: "Explore the world", icon: <FaGlobe /> },
];

function Clicke(){
 console.log("icon or headline clicked!! (kindly add code for redirecting to respective pages😒)");
 

}

const MainContent = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-6xl text-gray-100 mb-4 font-dosis">Artemis</h1>
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Artemis brings together a range of functionalities from quotes to recipes, all in one place!
      </p>
      
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-left space-x-4">
            <div className="text-3xl text-blue-500 hover:cursor-pointer hover:opacity-70" onClick={Clicke}>{feature.icon}</div>
            <div>
              <spaan className="text-xl font-semibold hover:cursor-pointer hover:text-gray-300" onClick={Clicke}>{feature.name}</spaan>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-all duration-300">
        Explore Now
      </button>
    </section>
  );
};

export default MainContent;
