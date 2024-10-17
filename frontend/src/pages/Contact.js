import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageTitle } from "../components/atoms";
import { NavBar, Footer } from "../components/layout";
import { Form } from "../components/templates";
import Popup from "../components/organismes/Popup";
import ContactDonePopup from "../components/molecules/ContactDonePopup";
import { setContactDone } from "../redux/actions/popups";
import { MapPinHouse, Inbox, Phone } from "lucide-react";

function Contact() {
  const dispatch = useDispatch();
  const contactPopup = useSelector((state) => state.contactDonePopup);

  const closePopup = () => {
    dispatch(setContactDone(false));
  };

  return (
    <>
      <NavBar />
      <div className="mt-24 flex w-full md:px-16 ssm:px-8 justify-center">
        <div className="flex justify-center items-center w-[90%] ssm:mb-10">
          <div className="rounded-sm shadow-lg h-full bg-white flex md:flex-row ssm:flex-col items-center justify-center w-full">
            <div className="py-6 px-8 w-full flex justify-center">
              <div className="md:w-10/12 ssm:w-full flex flex-col md:px-0 sm:px-12 ssm:px-4">
                <div className="mb-8">
                  <h1 className="text-main font-semibold text-18">
                    Get in Touch
                  </h1>
                  <p className="text-gray-500 md:text-16 ssm:text-14 font-medium">
                    Feel free to drop us a line below
                  </p>
                </div>
                <div className="">
                  <Form
                    className="flex flex-col items-between w-full gap-4"
                    type="contact"
                  />
                </div>
              </div>
            </div>
            <div className="h-full flex justify-center items-start flex-col bg-main shadow-md text-light lg:px-12 md:px-6 sm:px-16 ssm:px-10 py-12 rounded-sm w-full">
              <h2 className="font-medium pb-8">Contact Us</h2>
              <div className="flex flex-col justify-arond items-center gap-4">
                <div className="flex justify-start items-center gap-4 w-full py-2">
                  <Inbox className="w- h-" size={20} />
                  <p className="ssm:text-14">embroidery.saba12@gmail.com</p>
                </div>
                <div className="flex justify-start items-center gap-4 w-full py-2">
                  <Phone className="w- h-" size={20} />
                  <p className="ssm:text-14">+212634242755</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      {contactPopup && (
        <div
          onClick={closePopup}
          className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
          <Popup>
            <ContactDonePopup />
          </Popup>
        </div>
      )}
    </>
  );
}

export default Contact;
