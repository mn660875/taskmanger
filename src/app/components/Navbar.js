"use client";
import Link from "next/link";
import { IoHomeOutline, IoLogOutOutline, IoMailOpenOutline, IoSettingsOutline, IoStatsChartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="w- min-h-screen w-40 flex flex-col justify-between">
      
      {/* Logo */}
      <div>
        

        {/* Navigation */}
        <nav className="flex flex-col gap-2 pt-4">
          <Link href="/home">
            <div className="flex items-center border-l-4 border-[#FA6E6C] gap-3 p-3 hover:bg-gray-200 cursor-pointer">
              <IoHomeOutline className="text-2xl" />
              <span className="text-lg font-semibold">Home</span>
            </div>
          </Link>

          <div className="flex items-center border-l-4 border-[#FA6E6C] gap-3 p-3 hover:bg-gray-200 cursor-pointer">
            <IoStatsChartOutline className="text-2xl" />
            <span className="text-lg font-semibold">Statistics</span>
          </div>

          <div className="flex items-center border-l-4 border-[#FA6E6C] gap-3 p-3 hover:bg-gray-200 cursor-pointer">
            <IoMailOpenOutline className="text-2xl" />
            <span className="text-lg font-semibold">Messages</span>
          </div>

         
          <Link href={"/profile"}>
          <div className="flex items-center border-l-4 border-[#FA6E6C] gap-3 p-3 hover:bg-gray-200 cursor-pointer">
            <FaRegUser className="text-2xl" />
            <span className="text-lg font-semibold">Profile</span>
          </div></Link>

          <div className="flex items-center border-l-4 border-[#FA6E6C] gap-3 p-3 hover:bg-gray-200 cursor-pointer">
            <IoSettingsOutline className="text-2xl" />
            <span className="text-lg font-semibold">Settings</span>
          </div>
        </nav>
      </div>

      {/* Logout */}
      <div className="flex items-center border-l-4 border-[#FA6E6C] gap-3 p-3 hover:bg-gray-200 cursor-pointer mb-4">
        <IoLogOutOutline className="text-2xl" />
        <span className="text-lg font-semibold">Logout</span>
      </div>
    </div>
  );
}

