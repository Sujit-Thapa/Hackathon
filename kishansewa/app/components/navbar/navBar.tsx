import { UserButton } from "@clerk/nextjs";
import NavSearchBar from "./navSearch";
import { BiBell } from "react-icons/bi";

export const NavBar = () => {
  return (
    <div className="flex gap-10 drop-shadow-md shadow-stone-400 justify-between px-5 ">
      <div className="flex gap-10">
        <div className="logo">logo</div>
        <NavSearchBar />
      </div>
      <div className="flex flex-row gap-10 items-center justify-center ">
        <BiBell className="nav-item w-6 h-6" />
        <UserButton />
      </div>
    </div>
  );
};
