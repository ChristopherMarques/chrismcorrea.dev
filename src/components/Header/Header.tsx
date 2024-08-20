import React from "react";

export const Header = () => {
  return (
    <header className="text-center my-10">
      <h1 className="text-5xl font-bold">Christopher Corrêa</h1>
      <p className="text-gray-400 mt-2">Seasoned JavaScript Developer</p>
      <a
        href="#contact"
        className="mt-5 inline-block px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        I’m looking for new challenges 🔥
      </a>
    </header>
  );
};

export default Header;
