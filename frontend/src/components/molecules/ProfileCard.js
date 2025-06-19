import React from "react";
import { UserRound } from "lucide-react";

function ProfileCard(props) {
  return (
    <>
      <div className="flex gap-10 bouder-md">
        <div className="w-32 h-32 shadow-md rounded-full bg-main flex items-center justify-center">
          <UserRound className="text-white" size={42} />
        </div>
        <div className="border border-gray-50">
          <form action="">
            <label htmlFor="">
              
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
