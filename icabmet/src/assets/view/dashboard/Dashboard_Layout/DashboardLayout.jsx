import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <section className="bg-[#f4f6f8] min-h-screen font-sans admin-font">
      <div className="flex flex-row items-start w-full relative">
        {/* Sidebar container */}
        <div
          className={`fixed top-0 left-0 z-20 h-screen p-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMenuOpen 
              ? "w-[300px] translate-x-0" 
              : "w-[96px] -translate-x-full lg:translate-x-0"
          }`}
        >
          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10 lg:hidden transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <div
          className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] w-full min-h-screen relative flex flex-col ${
            isMenuOpen ? "lg:pl-[300px]" : "lg:pl-[96px]"
          }`}
        >
          {/* Header Area (Mobile Hamburger) */}
          <div className="lg:hidden sticky top-0 z-10 h-16 bg-[#f4f6f8]/80 backdrop-blur-md flex items-center px-4 border-b border-gray-200/50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-500 rounded-xl hover:bg-white hover:shadow-sm hover:text-gray-900 transition-all focus:outline-none"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Page Content */}
          <div className="p-4 lg:p-8 pt-4">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
