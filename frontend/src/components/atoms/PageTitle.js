import React from "react";

function PageTitle({ title, className, icon }) {
  return (
    <div className={className}>
      {icon}
      {title}
    </div>
  );
}

export default PageTitle;
