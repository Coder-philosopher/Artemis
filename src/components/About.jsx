// ./src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold mb-6">About This Project</h2>
      <p className="text-gray-300 max-w-3xl text-center mb-4">
        This project is an all-in-one hub that brings together a variety of functionalities, including Quotes, Movies, Recipes, and News. It utilizes free APIs to provide real-time data and information on each of these topics, making it a versatile application that serves multiple purposes.
      </p>
      <p className="text-gray-300 max-w-3xl text-center mb-4">
        Developed using the MERN stack, this project also leverages the power of React and Tailwind CSS for a modern and responsive design. The project aims to showcase a combination of web development skills, utilizing various components, animations, and responsive design techniques to deliver a seamless user experience.
      </p>
      <p className="text-gray-300 max-w-3xl text-center mb-4">
        Each feature in this app is designed to provide specific information to the user, such as motivational quotes, latest movie details, delicious recipes, and current news updates. The navigation and layout are crafted to ensure ease of access to all functionalities, making it a useful and interactive platform.
      </p>
      <div className="mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-all duration-300">
          Explore Features
        </button>
      </div>
    </section>
  );
};

export default About;
