import React from "react";
import NavBar from "./NavBar";
import HearoHeader from "./HearoHeader";

function Header(props) {
  return (
    <>
      <NavBar setLoading={props.setLoading} />
      <HearoHeader />
    </>
  );
}

export default Header;
