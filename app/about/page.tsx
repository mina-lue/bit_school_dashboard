import BackButton from "@/components/backButton";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center dark:bg-[#0a0a0a] dark:text-gray-200 text-xl">
      <div className="flex-col mt-2 mx-1 sm:mx-4 justify-center">
        <BackButton />
        <h1 className="sm:text-2xl text-md text-center m-2">
          {"About Bit school pay"}
        </h1>
        <p className="sm:text-lg text-sm">
          {`Bit School pay school fee payment application is powered by BIT
          software development company. Bit school pay makes paying the students\'
          school fee easy and seamless. The parents should not bother going from a 
          place to a bank to make the payments for the fee and come with receipt, 
          They make the payment online using their mobile device. On the other hand, 
          the schools get benefit of having simple and fast way to track payments and
          monitor the status of the fee payment.
          `}
        </p>
        <div className="flex gap-2 items-center justify-center mt-2">
          <p className="p-1 sm:p-2 bg-gray-800 w-fit rounded text-gray-200 text-sm">
            Contact Us
          </p>
        </div>
        <div className="w-full flex justify-center mt-4">
          <Image
            src={"/bit.jpg"}
            width={30}
            height={30}
            alt="bit"
            className="w-25 h-25 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
