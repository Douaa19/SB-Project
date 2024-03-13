import React, { useEffect, useState } from "react";
import { RowBasket, EmptyRowBasket } from "../atoms";
import DeleteIcon from "../../assets/icons/delete.png";
import EditIcon from "../../assets/icons/edit-text.png";

function BasketTable({ orders }) {
  const style = {
    th: "font-bold capitalize text-dark px-6 py-4 text-center md:text-sm ssm:text-12",
  };

  return (
    <div className="md:mt-6 ssm:mt4">
      <div className="min-w-full">
        {orders.orders.length > 0 ? (
          <>
            <div>
              {orders.orders.map((item) => (
                <RowBasket
                  data={item}
                  key={item.title}
                  deleteIcon={DeleteIcon}
                  editIcon={EditIcon}
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyRowBasket />
        )}
      </div>
    </div>
  );
}

export default BasketTable;
