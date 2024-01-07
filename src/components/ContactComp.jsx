import React from "react";

import CallCompot from "@/components/icons/CallCompot";
import LocationCompot from "@/components/icons/LocationCompot";
import MailCompot from "@/components/icons/MailCompot";

const ContactComp = () => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-center ">
        <div className="h-1 w-[29%] bg-cameo md:flex md:w-[30%]  "></div>
        <h1 className="text-md mx-4 text-2xl font-extrabold text-cameo md:text-5xl">
          <a name="contact"></a>
          Contact Me
        </h1>
        <div className="h-1 w-[29%] bg-cameo md:flex md:w-[30%]"></div>
      </div>
      <div className=" m-8 mx-auto flex  flex-wrap items-center justify-around gap-8 xl:w-[70%] xxl:w-[40%]">
        <button className="flex items-center justify-center gap-4 rounded-lg  py-2  px-4 text-2xl font-bold text-white ">
          <MailCompot />
          <a
            href="mailto:    
                Ortiz.Jonathan@live.com"
          >
            Ortiz.Jonathan@live.com
          </a>
        </button>
        <button className="flex items-center justify-center gap-4 rounded-lg  py-2 px-4 ">
          <LocationCompot />
          <p className="text-2xl font-bold capitalize text-white">
            argentina, buenos aires
          </p>
        </button>
        <button className="flex items-center justify-center gap-4 rounded-lg  py-2 px-4 text-center ">
          <CallCompot />
          <p className="text-2xl font-bold capitalize text-white  ">
            +35 1124057521
          </p>
        </button>
      </div>
      <div className="mx-auto flex h-1 w-full items-end bg-cameo lg:w-[80%]"></div>
      <div className="m-4 flex justify-center gap-8 xl:hidden">
        <a
          href="
            https://www.linkedin.com/in/jonathan-ortiz-937601136/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedin"
            target="_blank"
            rel="noreferrer"
          />
        </a>

        <a href="https://github.com/john2k2" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="github"
            target="_blank"
            rel="noreferrer"
          />
        </a>
        <a href="https://wa.me/+351 926 144667">
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="Enviar mensaje de WhatsApp"
            target="_blank"
            rel="noreferrer"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactComp;
