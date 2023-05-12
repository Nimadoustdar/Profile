import { Link } from "react-router-dom";

function MainMenu({ nav }) {
  const links = [
    "Development",
    "Business",
    "Finance & Accounting",
    "IT&Software",
    "Marketing",
  ];
  return (
    <>
      <nav className={!nav ? "mt-10 hidden xl:flex  justify-center " : "flex"}>
        <ul className={!nav ? "flex" : "flex flex-col"}>
          {links.map((link) => (
            <li
              key={link}
              className={(!nav ? "ml-8  " : "mt-5 ") + " font-normal text-base"}
            >
              <Link to={`/profile/${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default MainMenu;
