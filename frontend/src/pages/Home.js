import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header, Loading } from "../components/layout";
import { Form } from "../components/templates";
import PresentationCards from "../components/layout/PresentationCards";
import SectionCards from "../components/layout/SectionCards";
import Footer from "../components/layout/Footer";
import { Star, Package, Mail, Earth, Phone, Map } from "lucide-react";

function Home() {
  const bestSellingItems = useSelector((state) => state.bestSellingItems);
  const newestItems = useSelector((state) => state.newestItems);
  const limit = useSelector((state) => state.loadMoreItems.limit);
  const [loading, setLoading] = useState(false);

  const [displayLimit, setDisplayLimit] = useState(limit);

  useEffect(() => {
    setDisplayLimit(limit);
  }, [limit]);

  return (
    <>
      {loading === false ? (
        <>
          <Header setLoading={setLoading} />
          <PresentationCards />
          <SectionCards
            items={bestSellingItems}
            title="best selling products"
            buttonText="View more"
            page="best-selling"
            limit={displayLimit}
            transition={false}
            icon={<Star size={32} />}
            lineSize="28"
          />
          <SectionCards
            items={newestItems}
            title="our products"
            buttonText="View more"
            page="products"
            limit={displayLimit}
            transition={false}
            icon={<Package size={32} />}
            lineSize="24"
          />
          <div
            className={`flex flex-col justify-center items-center sm:px-10 ssm:px-6 ssm:pb-4 sm:pb-7 mt-6`}
            id="contact">
            <h2
              className={`capitalize text-main flex items-center gap-1 relative ssm:text-2xl md:text-3xl font-bold pb-2 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-main after:bottom-0 after:left-0`}>
              <span className="text-yellow-500">
                <Mail size={32} />
              </span>{" "}
              Contact us
            </h2>
            <div className="w-[90%]">
              <div className="sm:mt-10 ssm:mt-5">
                <div className="ll:grid grid-cols-4 gap-8 py-6 md:px-10 ssm:px-8">
                  <div className="col-span-2 ll:pl-10">
                    <div className="">
                      <Form
                        className="relative flex flex-col items-between w-full gap-4"
                        type="contact"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start col-span-2">
                    <div className="mb-8">
                      <h1 className="text-main font-semibold text-18">
                        Get in Touch
                      </h1>
                      <p className="text-gray-500 md:text-16 ssm:text-14 font-medium">
                        Have questions or need assistance? We're here to help!
                        Feel free to reach out to us. Our team is ready to
                        assist you with any inquiries.
                      </p>
                      <div className="grid grid-cols-2 gap-0 mt-6">
                        <div className="col-span-1 flex justify-start items-center gap-1 mt-3 text-main">
                          <Phone size={32} className="text-yellow-500" />
                          <div className="">
                            <h5 className="capitalize font-bold">call us</h5>
                            <span>+212634242755</span>
                          </div>
                        </div>
                        <div className="col-span-1 flex justify-start items-center gap-1 mt-3 text-main">
                          <Mail size={32} className="text-yellow-500" />
                          <div className="">
                            <h5 className="capitalize font-bold">email us</h5>
                            <span>contact@sabaembroidery.com</span>
                          </div>
                        </div>
                        <div className="col-span-1 flex justify-start items-center gap-1 mt-3 text-main">
                          <Earth size={32} className="text-yellow-500" />
                          <div className="">
                            <h5 className="capitalize font-bold">website</h5>
                            <a href="https://sabaembroidery.com">
                              https://sabaembroidery.com
                            </a>
                          </div>
                        </div>
                        <div className="col-span-1 flex justify-start items-center gap-1 mt-3 text-main">
                          <Map size={32} className="text-yellow-500" />
                          <div className="">
                            <h5 className="capitalize font-bold">address</h5>
                            <span>Morocco, Youssoufia</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
