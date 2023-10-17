import React from "react";
import { forwardRef } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { LayoutDashboard, FileBarChart } from "lucide-react";
import { Link } from "react-router-dom";
const Sidebar = forwardRef(({ showNav, setShowNav }, ref) => {
  const sideMenu = [
    {
      id: 1,
      text: "Dashboard",
      Icon: <LayoutDashboard size={35} />,
      Link: "/",
    },
    {
      id: 2,
      text: "Analytics",
      Icon: <FileBarChart size={35} />,
      Link: "/Analytics",
    },
    {
      id: 3,
      text: "Report",
      Icon: <FileBarChart size={35} />,
      Link: "/Report",
    },
  ];
  const closeSidebar = () => {
    if (window.innerWidth <= 640) {
      setShowNav(showNav);
    }
  };
  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-5">
        <picture>
          <img
            src="https://img.logoipsum.com/243.svg"
            className="overflow-hidden transition-all w-32"
            alt=""
          />
        </picture>
      </div>
      <ul className="flex-1 px-3">
        {sideMenu &&
          sideMenu.map((item, id) => (
            <Link to={item.Link} onClick={closeSidebar}>
              <li
                key={item.id}
                className="relative w-50 h-25 flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group bg-gradient-to-tr text-indigo-800"
              >
                {item.Icon}
                <span className="transition-all w-52 ml-3">{item.text}</span>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
});

export default Sidebar;
