import React from "react";

function ForgetPasswordPopup() {
  return (
    <>
      <div class="absolute bg-white opacity-80 inset-0 z-0"></div>
      <div class="w-500 max-w-xl p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-dark animation-fadeIn">
        <div class="">
          <div class="text-center p-5 flex-auto justify-center">
            <h2 class="text-xl font-bold py-6 text-white">Success</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPasswordPopup;
