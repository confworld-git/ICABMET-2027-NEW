"use client";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoDocumentTextOutline,
  IoCallOutline,
  IoCloudDownloadOutline,
  IoMailOutline,
  IoLogOutOutline,
  IoPricetagOutline,
  IoMenuOutline
} from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { toaster } from "evergreen-ui";
import logo from "/images/logo/icabmet.png";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        navigate("/");
        toaster.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isActive = (path) => {
    if (path === "/Dashboard" && (location.pathname === "/" || location.pathname === "/Dashboard")) {
      return true;
    }
    return location.pathname === path;
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", path: "/Dashboard", icon: <IoHomeOutline /> },
    { name: "Registration", path: "/Dashboard/Registration", icon: <IoPersonOutline /> },
    { name: "Submission", path: "/Dashboard/Submission", icon: <IoDocumentTextOutline /> },
    { name: "Committee Member", path: "/Dashboard/CommitteeMember", icon: <BsPeople /> },
    { name: "Contact", path: "/Dashboard/Contact", icon: <IoCallOutline /> },
    { name: "Downloads", path: "/Dashboard/Downloads", icon: <IoCloudDownloadOutline /> },
    { name: "Coupon", path: "/Dashboard/CouponManagement", icon: <IoPricetagOutline /> },
    { name: "Enquiries", path: "/Dashboard/Enquiries", icon: <IoMailOutline /> },
  ];

  return (
    <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative w-full h-full ${isMenuOpen ? 'p-4 md:p-6' : 'py-6 px-2'} flex flex-col justify-between transition-all duration-300`}>
      
      {/* Mobile close button */}
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-6 right-6 lg:hidden p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100/50 rounded-full transition-colors"
      >
        <FiX className="w-5 h-5" />
      </button>

      <div className="flex flex-col h-full w-full">
        <div className={`mb-8 flex items-center ${isMenuOpen ? "justify-between" : "justify-center"}`}>
          {/* Brand/Logo Area */}
          <h2 className={`text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent tracking-tight whitespace-nowrap overflow-hidden transition-all duration-300 ${isMenuOpen ? "w-auto opacity-100" : "w-0 opacity-0 hidden"}`}>
            Admin Panel
          </h2>
          {/* Hamburger inside sidebar for desktop */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hidden lg:flex p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100/50 rounded-lg transition-colors"
          >
            <IoMenuOutline className="w-6 h-6" />
          </button>
        </div>

        <ul className="space-y-2 flex-1 overflow-y-auto no-scrollbar w-full">
          {navItems.map((item) => (
            <li key={item.name} className="flex justify-center w-full">
              <Link
                to={item.path}
                onClick={handleLinkClick}
                title={!isMenuOpen ? item.name : ""}
                className={`flex items-center ${isMenuOpen ? "space-x-3 px-4 py-3 w-full" : "justify-center w-12 h-12"} rounded-xl transition-all duration-300 ease-in-out group ${
                  isActive(item.path)
                    ? "bg-[#C70036]/10 text-[#C70036] font-medium shadow-sm"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span
                  className={`text-xl flex-shrink-0 transition-transform duration-300 ${
                    isActive(item.path) ? "scale-110" : "group-hover:scale-110"
                  }`}
                >
                  {item.icon}
                </span>
                {isMenuOpen && (
                  <span className="text-sm tracking-wide whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className=" border-gray-100 flex justify-center w-full">
          <button
            onClick={() => {
              logout();
              handleLinkClick();
            }}
            title={!isMenuOpen ? "Log Out" : ""}
            className={`bg-white border border-gray-200 hover:border-[#C70036] hover:bg-[#C70036]/5 text-gray-600 hover:text-[#C70036] rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md ${isMenuOpen ? "w-full py-3 px-4 space-x-2" : "w-12 h-12 px-0"}`}
          >
            <IoLogOutOutline className="text-xl flex-shrink-0" />
            {isMenuOpen && (
              <span className="text-sm font-medium whitespace-nowrap">
                Log Out
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;