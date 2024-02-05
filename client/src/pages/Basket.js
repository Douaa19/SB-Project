import React from "react";
import { NavBar, Footer } from "../components/layout";
import { BasketTable } from "../components/organismes";
import { PageTitle } from "../components/atoms";
import { ShippingForm } from "../components/molecules";

function Basket() {
  return (
    <>
      <NavBar />
      <div className="md:px-[4.5rem] lg:px-32 ssm:px-8 ssm:pt-4 w-full">
        <PageTitle
          title="my basket"
          className="capitalize md:text-32 ssm:text-24 font-extrabold text-main text-start"
        />
        <BasketTable />
        <div className="mt-6 w-full flex items-start justify-between gap-4">
          <ShippingForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Basket;
