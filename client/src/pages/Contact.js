import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageTitle } from "../components/atoms";
import { NavBar, Footer } from "../components/layout";
import { Form } from "../components/templates";
import Popup from "../components/organismes/Popup";
import ContactDonePopup from "../components/molecules/ContactDonePopup";
import { setContactDone } from "../redux/actions/popups";

function Contact() {
  const dispatch = useDispatch();
  const contactPopup = useSelector((state) => state.contactDonePopup);

  const closePopup = () => {
    dispatch(setContactDone(false));
  };

  return (
    <>
      <NavBar />
      <div className="flex w-full md:px-28 ssm:px-16 md:mt-8 ssm:mt-4 justify-center">
        <div className="flex flex-col items-center md:gap-10 ssm:gap-4 w-[80%]">
          <PageTitle
            className="font-extrabold md:text-42 ssm:text-32 capitalize text-main text-center"
            title="contact us"
          />
          <p className="text-dark md:text-16 w-full ssm:text-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet facilisis ipsum. Nunc rutrum feugiat tortor, quisvestibulum
            urna hendrerit ac. Pellentesque ut ultricies velit.
          </p>
          <Form
            className="flex flex-col items-between w-full gap-6"
            type="contact"
          />
        </div>
      </div>
      <Footer />
      {contactPopup === false && (
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
