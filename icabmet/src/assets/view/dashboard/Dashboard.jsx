import React, { useEffect, useState } from "react";
import { IoMdTrendingUp } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineAppRegistration } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { BsQuestionLg } from "react-icons/bs";
import { MdCall, MdPersonAdd } from "react-icons/md";
import { TbBookDownload } from "react-icons/tb";
import { Link } from "react-router-dom";
import { toaster } from "evergreen-ui";
import axios from "axios";

const HandleExcelDownload = (data, filename) => {
  toaster.success(`Simulating download for ${filename}`);
};

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm border border-gray-100 animate-pulse">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gray-200" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
    <div className="flex flex-col gap-2 mt-2">
      <div className="h-8 bg-gray-200 rounded w-1/3" />
      <div className="h-3 bg-gray-200 rounded w-1/4" />
    </div>
  </div>
);

const Dashboard = () => {
  const [allData, setData] = useState(null);
  const [INR, setINR] = useState(0);
  const [loading, setLoading] = useState(true);

  const dataGet = async () => {
    setLoading(true);
    try {
      const dashboardResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/dashboard`,
        { withCredentials: true }
      );

      if (dashboardResponse.status === 200) {
        setData(dashboardResponse.data);
        const exchangeRateResponse = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const rate = exchangeRateResponse.data.rates.INR;
        setINR(Math.round(dashboardResponse.data.totalFee * rate));
      }
    } catch (error) {
      console.error("Dashboard data fetch error:", error);
      toaster.danger("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataGet();
  }, []);

  const data = [
    {
      title: "Total Registrations",
      icon: <MdOutlineAppRegistration />,
      color: "from-rose-400 to-red-500",
      path: "/Dashboard/Registration",
      count: allData?.Count_Registration,
      apiPath: "registration",
    },
    {
      title: "Total Submissions",
      icon: <RiFilePaper2Line />,
      color: "from-amber-400 to-yellow-500",
      path: "/Dashboard/Submission",
      count: allData?.Count_Submission,
      apiPath: "paperSubmission",
    },
    {
      title: "Total Members",
      icon: <MdPersonAdd />,
      color: "from-violet-400 to-purple-500",
      path: "/Dashboard/CommitteeMember",
      count: allData?.Count_CommitteeMember,
      apiPath: "committeeMember",
    },
    {
      title: "Total Downloads",
      icon: <HiDownload />,
      color: "from-sky-400 to-blue-500",
      path: "/Dashboard/Downloads",
      count: allData?.Count_Download,
      apiPath: "downlaod",
    },
    {
      title: "Total Enquiries",
      icon: <BsQuestionLg />,
      color: "from-indigo-400 to-indigo-600",
      path: "/Dashboard/Enquiries",
      count: allData?.Count_Enquiry,
      apiPath: "enquiry",
    },
    {
      title: "Total Contacts",
      icon: <MdCall />,
      color: "from-fuchsia-400 to-pink-500",
      path: "/Dashboard/Contact",
      count: allData?.Count_Contact,
      apiPath: "contact",
    },
  ];

  const apiHandle = async (path) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/${path}`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        HandleExcelDownload(
          response.data.data,
          `ICABMET ${path.charAt(0).toUpperCase() + path.slice(1)} Data`
        );
      }
    } catch (error) {
      console.error(`Error downloading ${path} data:`, error);
      toaster.danger(`Failed to download ${path} data.`);
    }
  };

  if (loading) {
    return (
      <div className="w-full">
        <div className="mb-8 mt-4 px-4">
          <div className="h-10 bg-gray-200 rounded-lg w-64 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 pb-12">
          {Array.from({ length: 7 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="px-4 md:px-8 w-full flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 mt-4 tracking-tight">
          Overview
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-[1400px]">
          {/* Revenue Card */}
          <div className="group bg-white rounded-2xl p-6 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-out relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all duration-500" />
            <div className="flex items-center gap-4 mb-4 z-10">
              <div className="w-12 h-12 flex justify-center items-center text-white text-2xl rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <FaIndianRupeeSign />
              </div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Total Revenue
              </p>
            </div>
            <div className="flex flex-col gap-1 z-10">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight flex items-baseline gap-1">
                <span className="text-green-600 text-lg">$</span>
                {allData?.totalFee || 0}
              </h2>
              <div className="flex items-center text-sm font-medium text-gray-400 mt-2">
                <span className="flex items-center text-gray-700 font-semibold mr-2 bg-gray-100 px-2 py-0.5 rounded">
                  <FaIndianRupeeSign className="mr-0.5 text-xs" /> {INR}
                </span>
                Est. INR
              </div>
            </div>
          </div>

          {/* Dynamic Data Cards */}
          {data.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-out relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-500" style={{ backgroundColor: 'currentColor', color: item.color.includes('rose') ? '#f43f5e' : item.color.includes('yellow') ? '#eab308' : item.color.includes('purple') ? '#a855f7' : item.color.includes('blue') ? '#3b82f6' : item.color.includes('indigo') ? '#6366f1' : '#ec4899' }} />
              
              <div className="flex items-center justify-between gap-2 mb-4 z-10">
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-12 h-12 flex-shrink-0 flex justify-center items-center text-white text-2xl rounded-xl bg-gradient-to-br ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider truncate" title={item.title.replace('Total ', '')}>
                    {item.title.replace('Total ', '')}
                  </p>
                </div>
                <button
                  onClick={() => apiHandle(item.apiPath)}
                  title="Download Data"
                  className="p-2 flex-shrink-0 text-gray-400 hover:text-[#C70036] hover:bg-red-50 rounded-lg transition-colors focus:outline-none"
                >
                  <TbBookDownload className="text-xl" />
                </button>
              </div>

              <div className="flex flex-col gap-1 z-10">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {item.count || 0}
                </h2>
                
                {item.path && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                      to={item.path}
                      className="text-[#C70036] hover:text-red-700 text-sm font-semibold flex items-center group/link"
                    >
                      View Details
                      <svg
                        className="ml-1 w-4 h-4 transform transition-transform group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
