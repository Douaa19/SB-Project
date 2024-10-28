import React from "react";
import { RowBasket, EmptyRowBasket } from "../atoms";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

function BasketTable({ orders }) {
  return (
    <div className="md:mt-6 ssm:mt-4 ssm:mx-6 md:mx-0">
      <div className="min-w-full">
        {orders.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}>
              {orders.map((order, index) => (
                <RowBasket data={order} key={index} />
              ))}
            </motion.div>
            <div className="flex justify-between items-center w-full">
              <a
                href="/checkout"
                class="my-2 relative inline-flex items-center px-8 py-3 overflow-hidden md:text-16 ssm:text-14 font-medium text-main border-1 border-main rounded-md hover:text-white group hover:bg-gray-50">
                <span class="absolute left-0 block w-full h-0 transition-all bg-main opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute -left-2 flex items-center justify-end w-10 h-10 duration-300 transform -translate-x-full group-hover:translate-x-0 ease">
                  <ArrowLeft strokeWidth={1.5} size={24} />
                </span>
                <span class="relative">Back To Shopping</span>
              </a>
              <a
                href="/checkout"
                class="my-2 relative inline-flex items-center px-8 py-3 overflow-hidden md:text-16 ssm:text-14 font-medium text-main border-1 border-main rounded-md hover:text-white group hover:bg-gray-50">
                <span class="absolute left-0 block w-full h-0 transition-all bg-main opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute -right-2 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <ArrowRight strokeWidth={1.5} size={24} />
                </span>
                <span class="relative">Check out</span>
              </a>
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
