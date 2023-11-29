import React from "react";
import logo from "../assets/Images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { sidebarMenu } from "../ultis/menu";
import path from "../ultis/path";

const notActiveStyle =
  "py-2 px-[30px] font-bold text-[#32323D] text-[13px] flex gap-[12px] items-center";
const activeStyle =
  "py-2 px-[50px] font-bold text-[#0F7070] text-[13px] flex gap-[12px] items-center ";

const SidebarLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-main-200">
      <div
        onClick={() => navigate(path.HOME)}
        className="w-full h-[100px] py-[15px] px-[40px] flex justify-start items-center cursor-pointer "
      >
        <img src={logo} alt="logo" className="w-[120px] object-contain h-30 " />
      </div>
      <div className="flex flex-col  px-4">
        {sidebarMenu.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
          >
            {item.icons}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
