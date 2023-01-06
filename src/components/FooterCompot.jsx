import React from "react";

const FooterCompot = () => {
  return (
    <div>
      <p className="mx-4 py-4 text-center font-normal capitalize text-white lg:text-xl">
        Copyrigth 2022 Jonathan Ortiz - All rights reserved - Made with React.
      </p>
      <button className="flex w-full justify-end ">
        <a href="#inicio">
          <img className="fixed bottom-0 right-0 mr-4 mb-4 p-4 bg-white/25 rounded-full w-14 hover:bg-white/80 transition-all duration-500 ease-in-out"
            src="https://img.icons8.com/ios-filled/50/000000/chevron-up.png"
            alt="up"
          />
        </a>
      </button>
    </div>
  );
};

export default FooterCompot;
