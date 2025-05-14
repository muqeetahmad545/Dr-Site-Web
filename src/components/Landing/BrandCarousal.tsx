"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RightArrow from "./RightArrow";
import brands from "../../constants/brands";

const BrandCarousal = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="flex justify-center w-full relative">
     <img
        src="https://res.cloudinary.com/dfizbmrep/image/upload/v1711388594/spotLeft_o5frqt.png"
        alt="img"
        width={50}
        height={100}
        className="absolute left-0 top-0"
      />
     <img
        src="https://res.cloudinary.com/dfizbmrep/image/upload/v1711388586/spotRight_sm7ksi.png"
        alt="img"
        width={50}
        height={100}
        className="absolute right-0 top-96"
      />
      <div className="max-w-[1500px]  max-sm:max-w-[360px] max-lg:max-w-[640px] max-xl:max-w-[1023px] max-2xl:max-w-[1220px] max-sm:px-0 px-10">
        <p className="text-xl mx-5 font-bold py-16 max-sm:text-2xl max-sm:pb-10">
          20+ Happy Customer
        </p>
        <div className="mb-5 mx-5">
          <Carousel
            slidesToSlide={1}
            customLeftArrow={<RightArrow />}
            infinite
            autoPlaySpeed={3000}
            pauseOnHover
            responsive={responsive}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <div className="flex items-center justify-center w-full h-full">
                 <img
                    className="pr-5"
                    src={brand.url}
                    alt={`brandicon-${index}`}
                    width={555}
                    height={55}
                    style={{ width: "max-content", maxHeight: 55 }}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-6 py-16 h-max pb-10 relative z-30 px-5">
          <div className="p-8 border-[5px] flex justify-between border-[#C9C9C9] rounded-xl h-full">
            <div>
              <h1 className="font-bold mb-4 text-2xl">
                What is offshore development?
              </h1>
              <p className="text-textcolor">
                Offshore development is a method of ordering from an overseas
                company to develop a system or software. Using this form,
                customers can not only save on recruitment and development
                costs, but also quickly find a source of high-quality engineers.
              </p>
            </div>
            <div className="flex items-end w-full max-sm:hidden">
             <img
                src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497218/globe_bmpw3n.png"
                alt="globe"
                width={186}
                height={135}
              />
            </div>
          </div>
          <div className="p-8 border-3 flex border-[#C9C9C9] bg-secondary text-white rounded-xl h-full">
            <div className="w-full">
              <h1 className="font-bold mb-4 text-2xl">
                Accellionx will help you solve your problem!
              </h1>
              <ul className="list-disc pl-6">
                <li>
                  Reduce development costs. -Adopted during system development
                </li>
                <li>️Lack of engineers</li>
                <li>️No software development experience</li>
                <li>️I just want to hire an engineer in a short time</li>
              </ul>
            </div>
            <div className="flex items-end justify-end max-sm:hidden">
             <img
                src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497225/rocket_lasv5u.png"
                alt="rocket"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousal;
