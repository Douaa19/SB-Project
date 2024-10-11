import React from "react";

function PresentationCard({ item }) {
  return (
    <div className="rounded-lg h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-gray-100 group-hover:border-slate-700 relative z-50">
      <div className="relative z-50 p-4">
        <div className="md:w-10 ssm:w-8">
          <img src={item.icon} alt={item.title} className="w-full" />
        </div>
        <div className="">
          <h4 className="text-zinc-100 font-bold tracking-wide mt-2">
            {item.title}
          </h4>
          <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PresentationCard;
