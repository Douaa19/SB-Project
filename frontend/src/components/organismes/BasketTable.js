import React from "react";
import { RowBasket, EmptyRowBasket } from "../atoms";
import { motion } from "framer-motion";

function BasketTable({ orders }) {
  return (
    <div className="md:mt-6 ssm:mt-4 ssm:mx-6 md:mx-0">
      <div className="min-w-full">
        {orders.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}>
            {orders.map((order, index) => (
              <>
                <RowBasket data={order} key={index} />
              </>
            ))}
          </motion.div>
        ) : (
          <EmptyRowBasket />
        )}
      </div>
    </div>
  );
}

export default BasketTable;
