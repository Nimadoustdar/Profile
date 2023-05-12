import { Link } from "react-router-dom";
import { useState } from "react";
//Profile Image
import ProfileImg from "../../assets/images/profile.svg";
//Icons
import {
  BsChevronDown,
  FiLogIn,
  HiOutlineKey,
  HiOutlineUser,
} from "../../assets/icons/ReactIcon";
function UserInfo() {
  //Styles
  const dropDownStyle =
    "flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-gray-400";

  const [dropDownProfile, setDropDownProfile] = useState(false);

  const handleProfile = () => {
    setDropDownProfile(!dropDownProfile);
  };
  return (
    <div className="relative border-b-4 border-transparent py-3 ">
      <div
        className="flex justify-center items-center  cursor-pointer"
        onClick={handleProfile}
      >
        <div className="h-10 w-10">
          <img
            src={ProfileImg}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="cursor-pointer">
          <span className=" font-normal text-base  mx-2">Baran Akbari</span>
        </div>
        <BsChevronDown />
      </div>
      <div
        className={
          !dropDownProfile
            ? "hidden"
            : "absolute w-auto min-w-full z-[100] bg-white shadow-md px-5 py-5 rounded-lg mt-5"
        }
      >
        <ul className="space-y-3">
          <li className="text-sm">
            <Link to="/profile/userinfo" className={dropDownStyle}>
              <div className="mr-3">
                <HiOutlineUser className="h-6 w-6 text-[#3b3b3b]" />
              </div>
              Account
            </Link>
          </li>
          <li className="text-sm">
            <Link to="/profile/userinfo" className={dropDownStyle}>
              <div className="mr-3">
                <HiOutlineKey className="h-6 w-6 text-[#3b3b3b]" />
              </div>
              Setting
            </Link>
          </li>
          <li className="text-sm">
            <Link to="/" className={dropDownStyle + " hover:border-red-600"}>
              <div className="mr-3 ">
                <FiLogIn className="h-6 w-6 text-[#3b3b3b]" />
              </div>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInfo;
