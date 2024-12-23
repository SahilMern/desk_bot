import React from "react";
import menuItem from "@/app/helpers/sidebarlist";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sticky p-8">
      {/* User Information Section */}
      <div className="flex items-center gap-5 mb-5">
        <Image
          src="/user.jpg"
          alt="User"
          width={50}  // Use numeric values without quotes
          height={50} // Use numeric values without quotes
          className="rounded-full object-cover"
          priority={true}
        />
        <div className="flex flex-col">
          <span className="font-medium">JHON JOE</span>
          <span className="text-sm text-gray-500">Administrator</span> {/* Fixed typo in "Administrator" */}
        </div>
      </div>

      {/* Menu Items */}
      <ul className="list-none">
        {menuItem.map((cat, key) => (
          <li key={key}>
            <span className="text-gray-500 font-semibold text-sm my-2 block">{cat.title}</span>
            <ul>
              {cat.list.map((item, subKey) => (
                <MenuLink item={item} key={subKey} />
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button className="text-white text-base font-medium py-5 my-1 flex items-center gap-3 w-full bg-transparent border-none rounded-lg cursor-pointer hover:bg-gray-700">
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
