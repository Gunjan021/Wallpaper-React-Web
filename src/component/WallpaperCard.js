import React from "react";

function WallpaperCard() {
  return (
    <div>
      <div className="p-4 font-semibold text-yellow-50 text-[30px]">
        <p>Letest WallPaper</p>
      </div>
      <div className="flex justify-center items-center flex-wrap p-4">
        <div className="p-4 transition ease-in-out h-fit delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img
            className="h-[250px] rounded-xl overflow-hidden"
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="p-4 transition ease-in-out h-fit delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img
            className="h-[250px] rounded-xl overflow-hidden"
            src="https://images.unsplash.com/photo-1585018823729-f345817a8e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="p-4 transition ease-in-out h-fit delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img
            className="h-[250px] rounded-xl overflow-hidden"
            src="https://images.unsplash.com/photo-1597858715706-fb50f241946e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
        </div>
        <div className="p-4 transition ease-in-out h-fit delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img
            className="h-[250px] rounded-xl overflow-hidden"
            src="https://images.unsplash.com/photo-1565804032403-18ece1fa3b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default WallpaperCard;
