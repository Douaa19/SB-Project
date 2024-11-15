import React from "react";
import { SideBar } from "../components/layouts";

function Home() {
  return (
    <>
      <SideBar>
        <div className="max-w-7xl mx-auto px-6 py-2 text-dark">
          <div className="w-full flex justify-between items-center">
            <div className="">
              <input type="text" placeholder="search..." />
            </div>
            <div className="flex items-center w-full">
              <div className="">
                <button>export</button>
              </div>
              <div className="rounded-full">
                <img src="" alt="" width={28} height={28} />
              </div>
            </div>
          </div>
        </div>
      </SideBar>
    </>
  );
}

export default Home;
