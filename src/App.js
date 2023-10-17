import { useState, useEffect, Fragment, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import {
  Tab,
  initTE,
} from "tw-elements";
import { ToastContainer } from "react-toastify";
import TopBar from "./components/Layout/TopBar";
import Sidebar from "./components/Layout/Sidebar";
import Analytics from "./components/Analytics/Analytics";
import Dashboard from "./components/Dashboard/Dashboard";
import Report from "./components/Report/Report";
import Sidebar1 from "./components/Layout/Sidebar1";
import TopBar1 from "./components/Layout/TopBar1";
import { toast } from "react-toastify";
import axios from "axios";
import config from "./config";
import { Login } from "./components/Login/Login";
import UserAuthenticationContext from "./contexts/UserAutheticationContext";
import UserSessionContext from "./contexts/UserSessionContext";
import CompanyContext from "./contexts/CompanyContext";
import Spinner from "./spinner";
export default function App({ children, pageProps }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebar, setSide] = useState(false);
  const [token, setToken] = useState();
  const [companies, setAllCompanies] = useState();
  const [permissions, setPermissions] = useState();
  const [company, setCompany] = useState();
  const [activeTab, setActiveTab] = useState(0);
  function handleResize() {
    if (window.innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const _token = window.localStorage.getItem("ERP_TOKEN");

    if (_token === undefined || _token === null) {
      setToken(false);
    } else {
      setToken(_token);
      getCompanies(_token);
    }
  }, [token]);
  const save_token = (e) => {
    window.localStorage.setItem("ERP_TOKEN", e);

    setToken(e);
  };

  useEffect(() => {
    if (company !== undefined) {
      getPermissions(token);
    }
  }, [company, setCompany]);

  const handleLogOut = (e) => {
    window.localStorage.removeItem("ERP_TOKEN");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("company");
    window.localStorage.removeItem("fiscal");
    setToken(false);
    // setUsers("");
  };

  const getCompanies = async (_token) => {
    // setTimeout(() => {
    fetch(`${config.APP_CONFIG}/Companies/Company`, {
      headers: {
        Authorization: _token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status_code === 401) {
          handleLogOut();
        } else if (res.status_code === 200) {
          setAllCompanies(res.msg);

          if (res.msg.length > 0) {
            if (localStorage.getItem("company") === null) {
              setCompany(res.msg[0]);
              window.localStorage.setItem(
                "company",
                JSON.stringify(res.msg[0])
              );
            } else {
              const reload = window.localStorage.getItem("company");

              setCompany(JSON.parse(reload));
            }
          } else {
            setCompany([]);
          }
        } else {
          toast.error("cannot fetch Companies");
          setAllCompanies([]);
        }
      })
      .catch((err) => {
        toast.error("error fetching Companies");
      });
  };

  const getPermissions = async (__token) => {
    await axios
      .get(`${config.APP_CONFIG}/UserPermission/getUserPermission/${__token}`, {
        headers: {
          Authorization: __token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.status_code === 401) {
          handleLogOut();
        } else if (res.data.status_code === 200) {
          const myper = res.data.msg.filter((x) => {
            if (x.company_id === company.id) {
              return true;
            }
            return false;
          });

          setPermissions(myper);
        } else {
          toast.error("Error Loading Permission");
          setPermissions([]);
        }
      })
      .catch((err) => {
        toast.error("Cannot fetch Permission");
        // setPermissions([]);
      });
  };

  if (token === undefined) {
    return <Spinner msg="Authenticating..." />;
  }

  if (token === false) {
    return (
      <div>
        <ToastContainer rtl />
        <Login setToken={save_token}></Login>
      </div>
    );
  }

  if (company === undefined) {
    return <Spinner msg=" Company Initializing..." />;
  }

  if (permissions === undefined) {
    return <Spinner msg="Loading permissions..." />;
  }
  console.log(company);
  console.log(companies);
  return (
    <UserSessionContext.Provider
      value={{
        token: token,
        handleLogOut: handleLogOut,
      }}
    >
      <UserAuthenticationContext.Provider
        value={{
          permissions: permissions,
        }}
      >
        <CompanyContext.Provider
          value={{
            companies: companies,
            company: company,
            setCompany: setCompany,
          }}
        >
          <Router>
            <>
              <div className="flex overflow:hidden items-start">
                {/* <div className={`${showNav ? " w-1/6" : ""}`}>
                  <Transition
                    as={Fragment}
                    show={showNav}
                    enter="transform transition duration-[400ms]"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform duration-[400ms] transition ease-in-out"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Sidebar1
                      showNav={showNav}
                      setShowNav={setShowNav}
                      isMobile={isMobile}
                      setIsMobile={setIsMobile}
                    />
                  </Transition>
                </div> */}
                <div
                  className={`flex flex-col w-full`}
                >
                  <TopBar1
                    showNav={showNav}
                    setShowNav={setShowNav}
                    isMobile={isMobile}
                  />

                  <div>
                    <ul
                      class=" mt-10 flex  list-none flex-row flex-wrap border-b-0 pl-0"
                      id="tabs-tab3"
                      role="tablist"
                      data-te-nav-ref>
                      <li role="presentation">
                        <Link to="/">
                          <a
                           
                            className={`my-2 cursor-pointer block border-x-0 border-b-2 border-t-0 border-transparent px-4 pb-2 pt-4 text-text-lg font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary  dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 ${
                              activeTab === 0
                                ? 'border-b-2   text-green-900'
                                : 'text-gray-500'
                            }`}
                         
                            onClick={() => setActiveTab(0)}
                            data-te-toggle="pill"
                            role="tab"
                            aria-selected="true"
                          >Home</a
                          >
                        </Link>
                      </li>
                      <li role="presentation">
                        <Link to='/Report' >
                          <a

                            className={`my-2  cursor-pointer block border-x-0 border-b-2 border-t-0 border-transparent px-4 pb-2 pt-4 text-text-lg font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary  dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 ${
                              activeTab === 1
                                ? 'border-b-2  text-green-900'
                                : 'text-gray-500'
                            }`}
                            onClick={() => setActiveTab(1)}
                            data-te-toggle="pill"

                            role="tab"

                            aria-selected="false"
                          >Report</a
                          >
                        </Link>
                      </li>

                    </ul>
                  </div>



                  <div className="p-5">
                    <main
                      className={` transition-all duration-[400ms] ${showNav && !isMobile ? "overflow:hidden " : ""
                        }`}
                    >
                      <Routes className="">
                        <Route path="/" exact={true} element={<Dashboard />} />
                        <Route
                          path="/analytics"
                          exact={true}
                          element={<Analytics />}
                        />

                        <Route
                          path="/report"
                          exact={true}
                          element={<Report />}
                        />
                      </Routes>
                    </main>
                  </div>
                </div>
              </div>
            </>
          </Router>
        </CompanyContext.Provider>
      </UserAuthenticationContext.Provider>
    </UserSessionContext.Provider>
  );
}
