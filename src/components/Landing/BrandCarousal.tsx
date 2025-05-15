'use client';
import 'react-multi-carousel/lib/styles.css';
import { COLORS } from '../../constants/theme';

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
  console.log('responsive', responsive);

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
          20+ Happy Patient
        </p>

        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-6 py-16 h-max pb-10 relative z-30 px-5">
          <div className="p-8 border-[5px] flex justify-between border-[#C9C9C9] rounded-xl h-full">
            <div>
              <h1 className="font-bold mb-4 text-2xl">Premium Care</h1>
              <p className="text-textcolor">
                Ut wisi enim ad minim veniam, quis laore nostrud exerci tation
                ulm hedi corper turet suscipit lobortis
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
          <div
            style={{ background: COLORS.gradientPrimary }}
            className="p-8 border-3 flex border-[#C9C9C9] bg-secondary text-white rounded-xl h-full"
          >
            <div className="w-full">
              <h1 className="font-bold mb-4 text-2xl">Powerful Medicine </h1>
              <ul className="list-disc pl-6">
                <p>
                  Ut wisi enim ad minim veniam, quis laore nostrud exerci tation
                  ulm hedi corper turet suscipit lobortis{' '}
                </p>
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
