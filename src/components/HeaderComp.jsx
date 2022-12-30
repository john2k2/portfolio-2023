import React from "react";

import perfil from "@/img/perfil.jpg";

const HeaderComp = () => {
  return (
    <header className="flex h-24  w-full items-center justify-center ">
      <div className="m-4 mx-auto flex w-[90vw] items-center justify-around md:w-[90vw] md:justify-between lg:justify-between xl:justify-around ">
        <div>
          <img className="w-10 rounded-full" src={perfil} alt="John" />
        </div>
        <nav>
          <ul
            className="flex cursor-pointer gap-4 text-xl font-bold text-cameo  
          "
          >
            <li
              className="transition-all duration-500 
        ease-in-out hover:text-white "
            >
              Portfolio
            </li>
            <li
              className="transition-all duration-500 
        ease-in-out hover:text-white "
            >
              About
            </li>
            <li
              className="transition-all duration-500 
        ease-in-out hover:text-white "
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComp;
