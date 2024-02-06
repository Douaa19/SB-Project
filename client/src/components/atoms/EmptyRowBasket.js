import React from "react";

function EmptyRowBasket() {
  return (
    <>
      <tr className="bg-white border-b border-gray-100 transition duration-300 ease-in-out">
        <td colspan="7" className="py-4 text-center">
          No items in you basket
        </td>
      </tr>
    </>
  );
}

export default EmptyRowBasket;
