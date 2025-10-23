import Image from "next/image";
import React from "react";

const FooterComponent = () => {
  return (
    <div className="bottom-0 absolute flex justify-center h-6 text-gray-200 w-full cursor-pointer">
      <div className="bg-gray-800 px-2 rounded-t flex items-center gap-1">
        <Image
          src={"/bit.jpg"}
          alt="logo"
          height={20}
          width={20}
          className="rounded-full"
        />
        <p className="text-sm"> BIT</p>
      </div>
    </div>
  );
};

export default FooterComponent;
