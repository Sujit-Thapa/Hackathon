import React from "react";
import { BiCalculator, BiMap, BiStore } from "react-icons/bi";
import { CgCodeClimate } from "react-icons/cg";
import { FaTractor } from "react-icons/fa";
import { FaPlantWilt } from "react-icons/fa6";
import { FcContacts } from "react-icons/fc";
import { GiCow, GiField } from "react-icons/gi";
import { GoReport } from "react-icons/go";
import { LiaCalendarAltSolid } from "react-icons/lia";
import { MdContacts } from "react-icons/md";
import { PiPlantBold } from "react-icons/pi";
import { SiCodeclimate } from "react-icons/si";
import {
  TiLockClosedOutline,
  TiTick,
  TiTickOutline,
  TiWeatherCloudy,
  TiWeatherPartlySunny,
} from "react-icons/ti";

export const SideNav = () => {
  return (
    <>
      <div className="flex flex-col w-[15%] py-10 px-5 gap-5">
        <div className="flex flex-row items items-center p-1 gap-3">
          <LiaCalendarAltSolid size={30} /> <p>Schedule</p>
        </div>
        <div className="flex flex-row items items-center p-1 gap-3">
          <TiTickOutline size={30} /> <p>Task</p>
        </div>
        <div className="flex flex-row items items-center p-1 gap-3">
          <GiCow size={30} /> <p>Livestock</p>
        </div>
        <div className="flex flex-row items items-center p-1 gap-3">
          <PiPlantBold size={30} /> <p>planting</p>
        </div>
        <div className="flex flex-row items items-center p-1 gap-3">
          <FaTractor size={30} /> <p>Resources</p>
        </div>
        <div className="flex flex-row items items-center p-1 gap-3">
          <BiCalculator size={30} /> <p>Accounting</p>
        </div>
        <div className="flex flex-row items items-center p-1 gap-3">
          <BiStore size={30} /> <p>Market</p>
        </div>
        <div className="flex flex-row items items-center p-1 gap-3">
          <MdContacts size={30} /> <p>Contacts</p>
        </div>
        <div className="flex flex-row items items-center p-1 gap-3">
          <GiField size={30} /> <p>Farm Map</p>
        </div>
        <div className="flex flex-row items items-center p-1 gap-3">
          <TiWeatherPartlySunny size={30} /> <p>Climate</p>
        </div>
        <div className="flex flex-row items items-center p-1 gap-3">
          <GoReport size={30} /> <p>Report</p>
        </div>
      </div>
    </>
  );
};
