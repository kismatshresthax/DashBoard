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

const Sidebar1 = forwardRef(({ showNav, setShowNav, isMobile }, ref) => {
  const sideMenu = [
    {
      id: 1,
      text: "Dashboard",
      Icon: <LayoutDashboard size={35} />,
      link: "/",
      icon: "fa-solid fa-gauge",
    },
    {
      id: 2,
      text: "Analytics",
      Icon: <FileBarChart size={35} />,
      link: "/Analytics",
      icon: "fa-solid fa-chart-simple",
    },
    {
      id: 3,
      text: "Report",
      Icon: <FileBarChart size={35} />,
      link: "/Report",
      icon: "fa-solid fa-file",
    },
  ];
  const closeSidebar = () => {
    if (window.innerWidth <= 640) {
      setShowNav(false);
    }
  };
  return (
    <div
      ref={ref}
      className={`fixed bg-white shadow-sm ${
        isMobile ? " z-50 top-0 w-1/2 h-full" : "w-1/6 h-full"
      }`}
    >
      <div className="flex justify-start ml-4 mt-6 mb-10">
        <p className="font-medium">Dasboard</p>
      </div>

      <ul className="flex-1 px-3">
        {sideMenu &&
          sideMenu.map((item, id) => (
            <Link to={item.link} onClick={closeSidebar}>
              <li
                key={item.id}
                className="relative w-50 h-25 flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group bg-gradient-to-tr text-indigo-800"
              >
                <i className={item.icon}></i>
                <span className="transition-all w-50 ml-3">{item.text}</span>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
});

export default Sidebar1;
