import React, { useEffect, useState } from "react";
import { RowBasket, EmptyRowBasket } from "../atoms";
import DeleteIcon from "../../assets/icons/close-svgrepo-com.svg";

function BasketTable({ orders }) {
  const style = {
    th: "font-bold capitalize text-dark px-6 py-4 text-center md:text-sm ssm:text-12",
  };

  return (
    <div className="md:mt-6 ssm:mt4">
      <table className="min-w-full">
        <thead class="border-gray-100 border-b">
          <tr>
            <th scope="col" className={`${style.th}`}>
              product
            </th>
            <th scope="col" className={`${style.th}`}>
              size
            </th>
            <th scope="col" className={`${style.th}`}>
              price
            </th>
            <th scope="col" className={`${style.th}`}>
              quantity
            </th>
            <th scope="col" className={`${style.th}`}>
              color
            </th>
            <th scope="col" className={`${style.th}`}>
              total
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        {orders.orders.length > 0 ? (
          <>
            <tbody>
              {orders.orders.map((item) => (
                <RowBasket
                  data={item}
                  key={item.title}
                  deleteIcon={DeleteIcon}
                />
              ))}
            </tbody>
          </>
        ) : (
          <EmptyRowBasket />
        )}
      </table>
    </div>
  );
}

export default BasketTable;
