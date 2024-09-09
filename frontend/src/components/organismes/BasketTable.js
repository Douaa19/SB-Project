import React from "react";
import { RowBasket, EmptyRowBasket } from "../atoms";
import DeleteIcon from "../../assets/icons/delete.png";
import EditIcon from "../../assets/icons/edit-text.png";

function BasketTable({ orders }) {
  return (
    <div className="md:mt-6 ssm:mt4">
      <div className="min-w-full">
        {orders.length > 0 ? (
          <>
            <div>
              {orders.map((order) => (
                <>
                  <RowBasket
                    data={order}
                    key={order}
                    deleteIcon={DeleteIcon}
                    editIcon={EditIcon}
                  />
                </>
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
