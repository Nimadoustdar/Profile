/* eslint-disable react/prop-types */
//Profile Image
import ProfileImg from "../../assets/images/profile.png";
//Icons
import {
  BiMessageSquare,
  AiOutlineHeart,
  FiLogIn,
  HiOutlineUser,
  IoBagCheckOutline,
  MdOutlineLeaderboard,
  SlNote,
} from "../../assets/icons/ReactIcon";
import { NavLink } from "react-router-dom";

function Aside({ showAside }) {
  const navAside = [
    { id: 1, icon: <SlNote />, title: "My Course", slug: "course" },
    {
      id: 2,
      icon: <IoBagCheckOutline />,
      title: "My Assignment",
      slug: "assignment",
    },
    { id: 3, icon: <AiOutlineHeart />, title: "My Favorite", slug: "favorite" },
    { id: 4, icon: <BiMessageSquare />, title: "Message", slug: "message" },
    {
      id: 5,
      icon: <MdOutlineLeaderboard />,
      title: "Leader Board",
      slug: "leaderboard",
    },
    { id: 6, icon: <HiOutlineUser />, title: "User info", slug: "userinfo" },
    { id: 7, icon: <FiLogIn />, title: "Log Out", slug: "logout" },
  ];
  return (
    <aside
      className={
        (showAside
          ? " w-full  h-full min-h-screen px-10   "
          : "px-16  hidden lg:grid ") +
        " pt-16 pb-24  transition-all shadow-md border bg-white border-[#d3d3d3cc] "
      }
    >
      <div className="flex  items-center mb-14">
        <div className="h-12 w-12 mr-1 ">
          <img
            src={ProfileImg}
            alt="profile"
            className=" h-full w-full object-cover"
          />
        </div>
        <div className="grid">
          <span className="  text-base">Baran Akbari</span>
          <span className=" text-sm text-[#686666]">091212345678</span>
        </div>
      </div>
      <nav>
        <ul className="grid gap-2 whitespace-nowrap">
          {navAside.map((link) => (
            <li
              key={link.id}
              className={showAside ? "text-sm mb-4 " : "text-lg mb-10"}
            >
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#4d12ae" : "",
                })}
                to={`/profile/${link.slug}`}
                className="flex items-center"
              >
                <span
                  className={(showAside ? "text-xl" : "text-2xl") + " mr-6"}
                >
                  {link.icon}
                </span>
                <span>{link.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
