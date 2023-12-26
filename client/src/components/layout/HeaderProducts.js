import React from "react";
import Input from "../atoms/Input";

function HeaderProducts({ title, categories }) {
  return (
    <div>
      <div className="capitalize sm:text-32 ssm:text-24 font-extrabold text-main text-start">
        {title}
      </div>
      <div className="">
        <div className="groupe"></div>
        <div className="">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default HeaderProducts;
