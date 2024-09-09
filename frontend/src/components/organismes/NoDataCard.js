import React from "react";

function NoDataCard() {
  return (
    <div className="h-[50vh] w-full flex justify-center items-center mb-6">
      <span className="text-gray font-bold text-18 py-8 px-28 rounded-md shadow-lg">
        No items for now
      </span>
    </div>
  );
}

export default NoDataCard;
