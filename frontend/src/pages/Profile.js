import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Loading, Footer, NavBar } from "../components/layout";
import { ProfileSection } from "../components/organismes";
import { getUser } from "../services/userServices";

function Profile() {
  const userId = useSelector((state) => state.user_id);
  const [user, setUser] = useState({});
  const orders = useSelector((state) => state.orders);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // user
    const fetchUser = async () => {
      try {
        await getUser().then((res) => {
          setUser(res.data);
          setLoading(false);
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <>
      {loading === false ? (
        <>
          <NavBar setLoading={setLoading} />
          <ProfileSection orders={orders} user={user} />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Profile;
