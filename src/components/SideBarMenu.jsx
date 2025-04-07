import { GoDotFill } from "react-icons/go";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function SideBarMenu() {
  const links = [
    {
      path: "/",
      icon: <TbLayoutDashboardFilled />,
      title: "Home",
    },
    {
      path: "/projects",
      icon: <HiCodeBracketSquare />,
      title: "Projects",
    },
  ];
  return (
    <ul className="h-full p-5 flex flex-col gap-y-5 items-center justify-center z-50">
      {links.map((link, index) => (
        <li
          key={index}
          className="flex justify-center items-center relative group"
        >
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `flex items-center pr-5 border-r-[2px] text-4xl rounded-sm ${
                isActive
                  ? " text-white"
                  : "text-gray-500 hover:text-gray-400 border-transparent"
              }`
            }
          >
            {link.icon}
          </NavLink>
          <span className="absolute left-full ml-3 mt-2 text-white opacity-0 group-hover:opacity-100 ease-in-out duration-500 flex justify-center items-center">
            <hr className="p-3 py-0" />
            <div className="text-xs flex">
              <GoDotFill className="mt-[2px] mr-2" />
              {link.title}
            </div>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default SideBarMenu;
