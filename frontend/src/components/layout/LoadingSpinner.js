import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="absolute top-0 left-0 z-50 bg-gray-100 opacity-5 flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-4 border-gray-700 rounded-full"
        role="status"></div>
    </div>
  );
};

export default LoadingSpinner;
