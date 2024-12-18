import React from "react";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed">
      {/* box 1 */}
      <div className="relative bg-[#253152] p-4 rounded-lg mb-5">
        <div className="absolute bottom-0 right-0 w-full">
          <Image
            src="/rocket.jpg"
            width={120}
            height={120}
            className="object-contain opacity-20"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-light">🔥Available now</span>
          <h3 className="font-bold text-base">
            How to use the new version of the admin dashboard
          </h3>
          <span className="font-medium text-[var(--textSoft)]">
            Take 4 minutes to learn
          </span>
          <p className="font-medium text-[var(--textSoft)] text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis.
          </p>
          <button className="flex items-center gap-2 p-2 bg-[#5d57c9] text-white rounded-md cursor-pointer">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      {/* box 2 */}
      <div className="relative bg-[#253152] p-4 rounded-lg mb-5">
        <div className="absolute bottom-0 right-0 w-full">
          {/* Image or any other content */}
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-light">🔥Available now</span>
          <h3 className="font-bold text-base">
            How to use the new version of the admin dashboard
          </h3>
          <span className="font-medium text-[var(--textSoft)]">
            Take 4 minutes to learn
          </span>
          <p className="font-medium text-[var(--textSoft)] text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis.
          </p>
          <button className="flex items-center gap-2 p-2 bg-[#5d57c9] text-white rounded-md cursor-pointer">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
