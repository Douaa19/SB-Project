import React from "react";

function LoadingCard() {
  return (
    <>
      <div className="bg-white shadow-lg animate-pulse h-[448px] rounded-5">
        <div className="flex justify-center items-center h-[366px] bg-gray-300 rounded-5"></div>
        <div className="flex flex-col justify-center items-start gap-4 p-4">
          <div className="h-[21px] bg-gray-300 w-full mb-2"></div>
          <div className="h-[21px] bg-gray-300 w-8"></div>
        </div>
      </div>
    </>
  );
}

export default LoadingCard;
