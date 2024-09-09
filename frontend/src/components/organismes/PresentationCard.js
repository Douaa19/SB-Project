import React from "react";

function PresentationCard({ item }) {
  return (
    <div className="ssm:p-4 sm:p-6 w-400 max-w-500 min-w-300 gap-6 border rounded-lg border-main flex justify-between items-center">
      <div className="sm:w-20 sm:max-w-20 sm:min-w-20 ssm:max-w-16 ssm:min-w-16">
        <img
          src={item.icon}
          alt="img"
          className="w-16 max-w-16 min-w-16 ssm:w-12 ssm:maw-w-12"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-bold sm:text-16 capitalize sm:pb-2 ssm:text-12 ssm:pb-1">
          {item.title}
        </span>
        <p className="sm:text-14 ssm:text-10">{item.desc}</p>
      </div>
    </div>
  );
}

export default PresentationCard;
