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
        <div className="w-[70%] md:mb-0 ssm:mb-10">
          <div className="relative w-full rounded-sm shadow-lg h-full bg-white ll:block ssm:flex ssm:flex-col-reverse">
            <div className="ll:absolute ll:top-8 ll:-left-20 ssm:relative bg-main shadow-md text-light px-8 py-12 rounded-sm ll:h-[85%]">
              <div className="">
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
            <div className="ll:grid grid-cols-3 py-6 md:px-10 ssm:px-8">
              <div></div>
              <div className="col-span-2 ll:pl-10">
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
                    className="relative flex flex-col items-between w-full gap-4"
                    type="contact"
                  />
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
