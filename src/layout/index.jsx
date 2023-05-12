import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Layout() {
  const [showAside, setShowAside] = useState(false);
  const handleNav = () => {
    setShowAside(!showAside);
  };
  return (
    <>
      <Header />
      <div className="w-full h-full container mx-auto flex flex-col lg:flex-row  mt-10  lg:gap-5   ">
        <Aside showAside={showAside} />
        {/* Hamburger Icon */}
        <div onClick={handleNav} className="lg:hidden flex mb-2">
          <AiOutlineMenu size={25} />
        </div>
        {/* aside Menu */}
        {/* Overlay */}
        <div
          className={
            showAside
              ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 z-[100]"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              showAside
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] lg:w-[45%] h-full bg-[#ecf0f3]  ease-in duration-100 overflow-y-auto"
                : " fixed left-[-100%] top-0  ease-in duration-100 "
            }
          >
            <div className="relative">
              <div
                onClick={handleNav}
                className="rounded-full absolute shadow-lg shadow-gray-400 p-3 cursor-pointer top-3 right-3
                "
              >
                <AiOutlineClose />
              </div>
              <Aside showAside={showAside} />
            </div>
          </div>
        </div>
        <div className="flex flex-grow w-full  bg-white  shadow-md border  border-[#D3D3D3CC] px-3 md:px-12 py-4 md:py-16 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
