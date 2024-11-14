import React from "react";
import {
  LayoutDashboard,
  Gauge,
  Users,
  Box,
  ClockArrowUp,
  LogOut,
} from "lucide-react";

function SideBar({ children }) {
  return (
    <div className="bg-light flex h-screen">
      <aside className="fixed justify-center inset-y-0 left-0 z-30 bg-main shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 bg-secondary text-light">
          <Gauge className="w-full" />
        </div>
        <nav className="mt-12 gap-6 flex flex-col text-light w-full items-center justify-between">
          <div className="group">
            <button className="hover:text-secondary transform hover:scale-105 duration-300">
              <a href="/users">
                <Users />
              </a>
            </button>
            <span className="capitalize absolute left-12 bottom1/2 translate-y-1/2 bg-secondary text-light text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              users
            </span>
          </div>
          <div className="group">
            <button className="hover:text-secondary transform hover:scale-105 duration-300">
              <a href="/items">
                <Box />
              </a>
            </button>
            <span className="capitalize absolute left-12 bottom1/2 translate-y-1/2 bg-secondary text-light text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              items
            </span>
          </div>
          <div className="group">
            <button className="hover:text-secondary transform hover:scale-105 duration-300">
              <a href="/categories">
                <LayoutDashboard />
              </a>
            </button>
            <span className="capitalize absolute left-12 bottom1/2 translate-y-1/2 bg-secondary text-light text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              categories
            </span>
          </div>
          <div className="group">
            <button className="hover:text-secondary transform hover:scale-105 duration-300">
              <a href="/orders">
                <ClockArrowUp />
              </a>
            </button>
            <span className="capitalize absolute left-12 bottom1/2 translate-y-1/2 bg-secondary text-light text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              orders
            </span>
          </div>
        </nav>
        <div className="absolute bottom-0 w-full p-6 text-light">
          <div className="group">
            <button className="hover:text-secondary transform hover:scale-105 duration-300">
              <LogOut />
            </button>
            <span className="capitalize absolute left-12 bottom1/2 translate-y-1/2 bg-secondary text-light text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              logout
            </span>
          </div>
        </div>
      </aside>

      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-light p-6">
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
}

export default SideBar;
