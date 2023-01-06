import React from "react";

import CallCompot from "@/components/icons/CallCompot";
import LocationCompot from "@/components/icons/LocationCompot";
import MailCompot from "@/components/icons/MailCompot";

const ContactComp = () => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-center ">
        <div className="h-1 w-[34%] bg-cameo md:flex md:w-[30%]  "></div>
        <h1 className="text-md mx-4 font-extrabold text-cameo md:text-5xl">
          Contact Me
        </h1>
        <div className="h-1 w-[34%] bg-cameo md:flex md:w-[30%]"></div>
      </div>
      <div className=" m-8 mx-auto flex w-[60%] flex-wrap justify-around gap-8">
        <button className="flex items-center justify-center gap-4 text-2xl  font-bold text-cameo">
          <MailCompot />
          <a
            href="mailto:    
                Ortiz.Jonathan@live.com"
          >
            Ortiz.Jonathan@live.com
          </a>
        </button>
        <button className="flex items-center justify-center gap-4">
          <LocationCompot />
          <p className="text-2xl font-bold capitalize text-cameo">
            argentina, buenos aires
          </p>
        </button>
        <button className="flex items-center justify-center gap-4">
          <CallCompot />
          <p className="text-2xl font-bold capitalize text-cameo ">
            +54 9 11 2531 2441
          </p>
        </button>
      </div>
      <div className="mx-auto flex h-1 w-full items-end bg-cameo lg:w-[80%]"></div>
    </div>
  );
};

export default ContactComp;
