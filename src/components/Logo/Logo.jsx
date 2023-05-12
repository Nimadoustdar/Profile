//logo image
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo.png";

function Logo() {
  return (
    <Link
      to="/profile/userinfo"
      className="flex justify-center items-center mr-10 "
    >
      <img src={LogoImg} alt="logo" className="w-14 h-14" />
      <div className="ml-1">
        <h1 className="text-base font-normal  uppercase">options</h1>
        <span className="text-[15px] font-normal text-[#777373] uppercase">
          online
        </span>
      </div>
    </Link>
  );
}

export default Logo;
