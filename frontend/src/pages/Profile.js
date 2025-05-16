import React from "react";
import { Loading, Footer, NavBar } from "../components/layout";
import { ProfileSection } from "../components/organismes";

function Profile() {
  return (
    <>
      {/* {loading === false ? ( */}
      <>
        <NavBar
        // setLoading={setLoading}
        />
        <ProfileSection />
        <Footer />
      </>
      {/* ) : (
        <Loading />
      )} */}
    </>
  );
}

export default Profile;
