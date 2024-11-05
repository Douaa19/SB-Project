import React, { useEffect, useState } from "react";
import { RowBasket, EmptyRowBasket } from "../atoms";
import { motion } from "framer-motion";

function BasketTable({ orders, isLoggedIn }) {
  const [guestOrders, setGuestOrders] = useState([]);

  useEffect(() => {
    if (!isLoggedIn) {
      const storedGuestOrders = JSON.parse(localStorage.getItem("guestOrders"));
      setGuestOrders(storedGuestOrders);
    }
  }, [isLoggedIn]);

  const handleGuestOrdersUpdate = (updatedOrders) => {
    setGuestOrders(updatedOrders);
    localStorage.setItem("guestOrders", JSON.stringify(updatedOrders));
  };

  const displayedOrders = isLoggedIn ? orders : guestOrders;

  return (
    <div className="md:mt-6 ssm:mt-4 ssm:mx-6 md:mx-0">
      <div className="min-w-full">
        {displayedOrders.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}>
              {displayedOrders.map((order, index) => (
                <RowBasket
                  data={order}
                  key={index}
                  isLoggedIn={isLoggedIn}
                  onGuestOrdersUpdate={handleGuestOrdersUpdate}
                />
              ))}
            </motion.div>
          </>
        ) : (
          <EmptyRowBasket />
        )}
      </div>
    </div>
  );
}

export default BasketTable;
