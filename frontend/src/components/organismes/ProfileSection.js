import React, { useState, useEffect } from "react";

function ProfileSection(props) {
  const [section, setSection] = useState("profile");

  const liStyle =
    "capitalize hover:cursor-pointer hover:bg-main hover:text-light rounded-md hover:transition-all hover:duration-300 hover:ease-linear py-3 px-4 mr-4";

  const changeSection = (section) => {
    setSection(section);
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="bg-white rounded-md flex items-center justify-between w-[80%] h-max p-6">
          <div className="border-r-1 border-gray-100 w-[25%]">
            <ul className="flex flex-col gap-4">
              <li className={liStyle} onClick={() => changeSection("profile")}>
                profile
              </li>
              <li className={liStyle} onClick={() => changeSection("password")}>
                password
              </li>
              <li className={liStyle} onClick={() => changeSection("orders")}>
                orders
              </li>
            </ul>
          </div>
          <div className="w-full px-8 h-full">
            {section === "profile" && <>Profile</>}
            {section === "password" && <>Password</>}
            {section === "orders" && <>Orders</>}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSection;
