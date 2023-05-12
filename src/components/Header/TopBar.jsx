import { useState } from "react";
//components
import UserInfo from "./UserInfo";
import Search from "./Search";
import { BsChevronDown } from "../../assets/icons/ReactIcon";
//Icons

function TopBar({ nav }) {
  //Styles
  const linkDropDownStyle =
    "flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-gray-400";

  const [dropdown, setDropDown] = useState(false);
  const links = ["For New Career", "For Enterprise", "For Universities"];

  const handleDropDown = () => {
    setDropDown(!dropdown);
  };

  return (
    <>
      <div
        className={
          nav
            ? "flex flex-col w-full"
            : " hidden xl:flex visible items-center w-full"
        }
      >
        <div
          className={
            (nav ? " flex-col" : "flex w-full items-center ") + "flex w-full "
          }
        >
          <div className=" relative">
            <div
              onClick={handleDropDown}
              className="font-medium flex items-center mr-5 cursor-pointer  "
            >
              <span className="mr-2 text-base ">Tutorials</span>
              <BsChevronDown className="text-[#292d32]" size={14} />
            </div>
            <ul
              className={
                !dropdown
                  ? "hidden"
                  : "space-y-3 z-[100]  absolute w-auto min-w-full bg-white shadow-md px-5 py-5 rounded-lg mt-5"
              }
            >
              <li className="">
                <a href="#" className={linkDropDownStyle}>
                  One
                </a>
              </li>
              <li className="">
                <a href="#" className={linkDropDownStyle}>
                  two
                </a>
              </li>
              <li className="">
                <a href="#" className={linkDropDownStyle}>
                  three
                </a>
              </li>
            </ul>
          </div>
          <div className={!nav ? "flex" : "hidden"}>
            <Search />
          </div>
          <div>
            <ul className={!nav ? "flex " : "flex flex-col"}>
              {links.map((link) => (
                <li
                  key={link}
                  className={
                    (!nav ? " ml-4 " : " mt-5") + " font-normal text-base"
                  }
                >
                  <a href="/">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={!nav ? "flex justify-end flex-grow" : "hidden"}>
            <UserInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
