import React, { useContext,useState } from "react";
import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowLongRightIcon,
  BellIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import UserSessionContext from "../../contexts/UserSessionContext";
import CompanyContext from "../../contexts/CompanyContext";

const TopBar1 = ({ showNav, setShowNav, isMobile }) => {
  const userSessionContext = React.useContext(UserSessionContext);
  const  companyContext = useContext(CompanyContext)
  const [activeTab, setActiveTab] = useState(0);
  console.log(showNav);
  const handleLog = (e) => {
    e.preventDefault();
    alert("log");
    userSessionContext.handleLogOut();
    // setUsers("");
  };
  return (
    <div
      className={`fixed z-50 top-0  px-5 h-14 flex  bg-red-400 justify-between my-auto items-center transition-all duration-[400ms] w-full
        `}
    >
      
      <div className="flex  cursor-pointer" style={{ cursor: "pointer" }}>
     
        <p className=" px-5 font-bold sm: text-sm ">{companyContext.company.name}</p>
       
      </div>
  
      <div class=" flex items-center ">
        <Menu as="div" className="">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <img
                src="./logo192.png"
                className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                alt="profile picture"
              />

              <span className="font-medium text-gray-700">Admin</span>
              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56  mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-indigo-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <CreditCardIcon className="h-4 w-4 mr-2" />
                    Billing
                  </Link>
                </Menu.Item>

                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-indigo-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <ArrowLongRightIcon
                      className="h-4 w-4 mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        userSessionContext.handleLogOut();
                        handleLog();
                      }}
                    />
                    Logout
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default TopBar1;
