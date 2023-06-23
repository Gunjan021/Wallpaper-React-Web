import React from "react";

function Advertisement() {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat flex flex-col md:flex-row justify-between md:justify-evenly items-start md:items-center p-4 mx-auto">
      <div className="text-4xl font-serif md:text-6xl mb-5 font-bold text-yellow-50 text-left">
        <p className="md:mt-5 tracking-wide">Your</p>
        <p className="md:mt-5 tracking-wide">Favorite</p>
        <p className="md:mt-5 tracking-wide">WallPapers</p>
        <button className="text-3xl py-2 px-4 mt-2 bg-stone-800">
          Explore
        </button>
      </div>
      <div className="object-cover rounded-3xl overflow-hidden">
        <img
          className="h-[300px] lg:h-[500px]"
          src="https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Advertisement;
