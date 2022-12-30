import React from "react";

//images
import perfil from "@/img/perfil.jpg";

const HeroComp = () => {
  return (
    <section className="mx-auto flex h-[50vh]  w-[90vw] flex-col justify-center md:h-auto md:px-4 xl:w-[100vw] 2xl:justify-between  ">
      <div className=" w-full flex-col items-center justify-center md:flex md:flex-row md:items-center md:justify-between lg:justify-center  ">
        <div className="flex w-[100%]  flex-col items-center capitalize md:w-[50%]  ">
          <div className="flex items-baseline justify-center gap-4">
            <p className="pb-4 text-3xl font-light text-white md:text-4xl">
              I´M
            </p>
            <h1 className="pb-4 text-5xl font-extrabold text-cameo md:text-5xl">
              John Ortiz
            </h1>
          </div>
          <h2 className="leading-1 mb-4 text-center  text-3xl font-extrabold capitalize text-bostonblue md:text-start md:text-2xl">
            Web Developer from React
          </h2>
          <button
            className="
            mt-8 flex h-14 w-[50%] items-center justify-center rounded-full border-4 border-cameo bg-transparent transition duration-500 ease-in-out hover:border-transparent hover:bg-bostonblue hover:text-white hover:shadow-lg focus:outline-none xl:w-[40%] 2xl:w-[30%]
          "
          >
            <a
              href="https://www.linkedin.com/in/john-ortiz-0b1b1b1b1/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-2xl font-bold capitalize text-white">
                Contact me
              </p>
            </a>
          </button>
        </div>
        <div className="hidden  md:flex md:w-80">
          <img className="  rounded-full " src={perfil} alt="John" />
        </div>
      </div>
      <div className="mt-8 mb-4 flex justify-center md:justify-start lg:w-auto   lg:justify-end xl:w-10 xl:justify-start ">
        <div className="static flex gap-8 xl:fixed xl:left-[10%] xl:top-52 xl:flex-col-reverse 2xl:left-[20%] ">
          <a
            href="
            #"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin"
            />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/github--v1.png"
              alt="github"
            />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
              alt="twitter"
            />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroComp;
