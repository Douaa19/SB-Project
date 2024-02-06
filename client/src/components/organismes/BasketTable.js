import React, { useEffect, useState } from "react";
import { RowBasket } from "../atoms";
import DeleteIcon from "../../assets/icons/close-svgrepo-com.svg";

function BasketTable() {
  const [data, setData] = useState([
    {
      title: "product 1",
      size: "10/30",
      price: 20,
      quantity: 2,
      color: "black",
      total: 0,
    },
    {
      title: "product 2",
      size: "20/40",
      price: 25,
      quantity: 1,
      color: "white",
      total: 0,
    },
    {
      title: "product 3",
      size: "20/40",
      price: 20,
      quantity: 1,
      color: "white",
      total: 0,
    },
    {
      title: "product 4",
      size: "15/30",
      price: 15,
      quantity: 1,
      color: "black",
      total: 0,
    },
  ]);
  const style = {
    th: "font-bold capitalize text-dark px-6 py-4 text-center md:text-sm ssm:text-12",
  };

  useEffect(() => {
    const updateData = data.map((item) => ({
      ...item,
      total: item.price * item.quantity,
    }));

    setData(updateData);
  }, []);

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
        <tbody>
          {data.map((item) => (
            <RowBasket data={item} key={item.title} deleteIcon={DeleteIcon} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BasketTable;
