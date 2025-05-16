import React from "react";
import { UserRound } from "lucide-react";

function ProfileCard(props) {
  return (
    <>
      <div className="">
        <div className="w-24 h-24 shadow-md rounded-full bg-main flex items-center justify-center">
          <UserRound className="text-white" size={42} />
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default ProfileCard;
