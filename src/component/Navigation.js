import React from "react";

function Navigation() {
  return (
    <div className="text-white py-1 bg-stone-700 w-full md:px-10 m-auto">
      <nav className="flex justify-around md:justify-between items-center">
        <img
          className="h-12"
          src="https://img.icons8.com/?size=512&id=mkkp6yt38FVq&format=png"
          alt=""
        />
        <ul className="flex justify-center">
          <li className="p-2 text-sm md:p-4 md:text-lg hover:text-gray-300">
            <a href="#">WallPaper</a>
          </li>
          <li className="p-2 text-sm md:p-4 md:text-lg hover:text-gray-300">
            <a href="#">About Us</a>
          </li>
          <li className="p-2 text-sm md:p-4 md:text-lg hover:text-gray-300">
            <a href="#">Contect Us</a>
          </li>
        </ul>
        <div className="hidden md:flex justify-center items-center">
          <span className="flex justify-center items-center">
            <input
              className="rounded-3xl text-black w-96 py-1 px-2"
              placeholder="Search"
              type="text"
            />
            <img
              className="h-5 relative right-7"
              src="https://img.icons8.com/?size=512&id=132&format=png"
              alt=""
            />
          </span>
        </div>
        <div className="rounded-full overflow-hidden">
          <img
            className="h-10 w-10"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
