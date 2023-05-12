import { useState } from "react";
//Icons
import { AiOutlineClose, AiOutlineMenu } from "../../assets/icons/ReactIcon";
//Components
import Logo from "../Logo/Logo";
import MainMenu from "./MainMenu";
import TopBar from "./TopBar";
import Profile from "./UserInfo";
import Search from "./Search";

export function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="w-full h-full sticky top-0 bg-white grid  py-4 md:py-12 shadow-md  z-[100] ">
      <div className="container mx-auto">
        <div className=" flex w-full items-center">
          <Logo />
          <TopBar />
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="xl:hidden flex  grow justify-end">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <MainMenu />
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? "xl:hidden fixed left-0 top-0 w-full h-full bg-black/70 z-[100]"
            : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] lg:w-[45%] h-full bg-[#ecf0f3] p-10 ease-in duration-100 overflow-y-auto "
              : " fixed left-[-100%] top-0  ease-in duration-100 "
          }
        >
          <div>
            <div className="flex justify-between items-center">
              <Profile />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <Search nav={nav} />
            </div>
          </div>
          <div className="py-4 flex-col ">
            <TopBar nav={nav} />
            <MainMenu nav={nav} />
          </div>
        </div>
      </div>
    </header>
  );
}
