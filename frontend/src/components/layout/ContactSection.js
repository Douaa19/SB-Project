import React from "react";
import { Form } from "../templates";
import { Mail } from "lucide-react";

function ContactSection() {
  return (
    <div
      className={`flex flex-col justify-center items-center sm:px-10 ssm:px-6 ssm:pb-4 sm:pb-7 mt-6`}
      id="contact">
      <h2
        className={`capitalize text-main flex items-center gap-1 relative ssm:text-2xl md:text-3xl font-bold pb-2 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-main after:bottom-0 after:left-0`}>
        <span className="text-secondary">
          <Mail size={32} />
        </span>{" "}
        Contact us
      </h2>
      <div className="w-[90%]">
        <div className="sm:mt-10 ssm:mt-5">
          <div className="ll:grid grid-cols-4 gap-8 py-6 md:px-10 ssm:px-8">
            <div className="flex flex-col items-start justify-start col-span-2 lg:mb-8 lg:mt-0 ssm:mb-0 ssm:mt-8">
              <div className="">
                <h1 className="text-main font-semibold text-18 md:text-start ssm:text-center">
                  Get in Touch
                </h1>
                <p className="text-gray-500 md:text-16 ssm:text-14 font-medium md:text-start ssm:text-center">
                  Have questions or need assistance? We're here to help! Feel
                  free to reach out to us. <br /> Our team is ready to assist
                  you with any inquiries.
                </p>
                <div className="grid ssm:grid-cols-1 sm:grid-cols-2 gap-0 mt-6">
                  <div className="col-span-1 flex flex-col justify-start sm:items-start ssm:items-center gap-1 mt-3 text-main">
                    <div className="flex items-end gap-2">
                      <h5 className="capitalize font-bold">call us</h5>
                    </div>
                    <span className="md:text-md ssm:text-sm">
                      +212634242755
                    </span>
                  </div>
                  <div className="col-span-1 flex flex-col justify-start sm:items-start ssm:items-center gap-1 mt-3 text-main">
                    <div className="flex items-end gap-2">
                      <h5 className="capitalize font-bold">email us</h5>
                    </div>
                    <span className="md:text-md ssm:text-sm">
                      contact@sabaembroidery.com
                    </span>
                  </div>
                  <div className="col-span-1 flex flex-col justify-start sm:items-start ssm:items-center gap-1 mt-3 text-main">
                    <div className="flex items-end gap-2">
                      <h5 className="capitalize font-bold">address</h5>
                    </div>
                    <span className="md:text-md ssm:text-sm">
                      Morocco, Youssoufia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 ll:pl-10 ssm:mt-6 ll:mt-0">
              <div className="">
                <Form
                  className="relative flex flex-col items-between w-full gap-4"
                  type="contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
