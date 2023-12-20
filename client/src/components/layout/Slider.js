import React, { useEffect, useState } from "react";
import { ReactComponent as LeftBtn } from "../../assets/icons/left.svg";
import { ReactComponent as RigthBtn } from "../../assets/icons/right.svg";

function Slider({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full p-1 shadow border border-white text-gray-800 hover:bg-white/20">
          <LeftBtn size={40} className="ssm:w-4 ssm:h-4 sm:w-full sm:h-full" />
        </button>
        <button
          onClick={next}
          className="rounded-full p-1 shadow border border-white text-gray-800 hover:bg-white/20">
          <RigthBtn size={40} className="ssm:w-4 ssm:h-4 sm:w-full sm:h-full" />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all sm:w-2 sm:h-2 ssm:h-1 ssm:w-1 bg-white rounded-full ${
                curr === i ? "sm:p-2 ssm:p-1" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
