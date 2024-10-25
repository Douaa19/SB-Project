import React from "react";
import { RowBasket, EmptyRowBasket } from "../atoms";

function BasketTable({ orders }) {
  return (
    <div className="md:mt-6 ssm:mt-4 ssm:mx-6 md:mx-0">
      <div className="min-w-full">
        {orders.length > 0 ? (
          <>
            {orders.map((order, index) => (
              <>
                <RowBasket data={order} key={index} />
              </>
            ))}
          </>
        ) : (
          <EmptyRowBasket />
        )}
      </div>
    </div>
  );
}

export default BasketTable;
