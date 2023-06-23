import React from "react";

function Card({ data }) {
  console.log(data);
  return (
    <div>
      <div className="flex flex-wrap py-10 justify-evenly">
        <div className="transition ease-in-out h-fit delay-150 hover:-translate-y-1 hover:scale-110 duration-300 max-w-xs m-10 lg:m-0 rounded-xl overflow-hidden">
          <div className="flex items-center bg-slate-600 p-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                className=""
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <p className="text-white ml-2">Gunjan Rupapara</p>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/16577591/pexels-photo-16577591/free-photo-of-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex bg-slate-600 p-1">
            <img
              className="h-7 mr-1"
              src="https://img.icons8.com/?size=512&id=24816&format=png"
              alt=""
            />
            <img
              className="h-7 mr-1"
              src="https://img.icons8.com/?size=512&id=143&format=png"
              alt=""
            />
            <img
              className="h-7"
              src="https://img.icons8.com/?size=512&id=11504&format=png"
              alt=""
            />
          </div>

          <div className="bg-slate-700 p-2">
            <p className="text-left font-bold text-lg text-white">woman1</p>
            <p className="text-left text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              error?
            </p>
            <p className="text-left text-[10px] text-gray-400">
              21 June, 2023 <span>04:50PM</span>
            </p>
          </div>
        </div>

        <div className="transition ease-in-out h-fit delay-150 hover:-translate-y-1 hover:scale-75 duration-300 max-w-xs m-10 lg:m-0 rounded-xl overflow-hidden">
          <div>
            <img
              src="https://images.pexels.com/photos/16577591/pexels-photo-16577591/free-photo-of-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              srcset=""
            />
          </div>
          <div className="bg-slate-700 hover:h-auto p-4">
            <p className="font-bold text-xl text-white">woman2</p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              error?
            </p>
          </div>
        </div>
        <div className="transition ease-in h-fit delay-0 hover:-translate-x-1 hover:translate-y-6 duration-100 max-w-xs m-10 lg:m-0 rounded-xl overflow-hidden">
          <div>
            <img
              src="https://images.pexels.com/photos/16577591/pexels-photo-16577591/free-photo-of-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              srcset=""
            />
          </div>
          <div className="bg-slate-700 p-4">
            <p className="font-bold text-xl text-white">woman3</p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              error?
            </p>
          </div>
        </div>
        <div className="transition h-fit ease-in delay-0 hover:-translate-y-6 hover:rotate-6 duration-100 max-w-xs m-10 lg:m-0 rounded-xl overflow-hidden">
          <div>
            <img
              src="https://images.pexels.com/photos/16577591/pexels-photo-16577591/free-photo-of-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              srcset=""
            />
          </div>
          <div className="bg-slate-700 p-4">
            <p className="font-bold text-xl text-white">woman4</p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              error?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
