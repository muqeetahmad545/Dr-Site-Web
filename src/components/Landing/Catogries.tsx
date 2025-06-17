import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Categories = () => {
  // Array of category objects
  const categories = [
    {
      title: "Thomas Launge",
      description:
        "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
      imagePath:
        "https://res.cloudinary.com/dfizbmrep/image/upload/v1710497226/setting_rfmin6.png",
      bgColor: "#F1E8FF",
    },
    {
      title: "Eye Medication",
      description:
        "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
      imagePath:
        "https://res.cloudinary.com/dfizbmrep/image/upload/v1710497228/storage_bessrs.png",
      bgColor: "#FFF2F2",
    },
    {
      title: "Blidness Test",
      description:
        "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
      imagePath:
        "https://res.cloudinary.com/dfizbmrep/image/upload/v1710497220/infinity_cth8ej.png",
      bgColor: "#E2F3FF",
    },
    {
      title: "Lasik Surgery",
      description:
        "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud",
      imagePath:
        "https://res.cloudinary.com/dfizbmrep/image/upload/v1710497221/mobile_vk6nnr.png",
      additionalImagePath:
        "https://res.cloudinary.com/dfizbmrep/image/upload/v1710497207/bellicon_qeppwi.png",
      bgColor: "#FFE7FB",
    },
  ];

  return (
    <div
      className="flex justify-center bg-cover bg-no-repeat w-full"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfizbmrep/image/upload/v1710497213/categorybg_m2n3ne.png')",
      }}
    >
      <div className="innerContainer">
        <div
          data-aos="fade-right"
          className="text-5xl flex gap-2 font-extrabold py-20 justify-center"
        >
          <span className="text-[#5bac52]">Professional </span> Clinicians
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 items-center max-sm:gap-6 gap-16 mb-32 w-[80%] justify-center">
            {categories.map((category, index) => (
              <div
                key={index}
                className="py-8 max-w-80 px-4 border relative border-[#c5c5c5] max-sm:m-auto max-md:m-auto rounded-xl h-full hover:text-white hover:bg-[#5aab52] hover:border-none transition-all duration-300  hover:shadow-md"
              >
                <div className="w-[75%] flex flex-col items-center gap-5 mb-8 max-sm:w-full mx-auto">
                  <div
                    className={`w-[70px] h-[75px] rounded-2xl flex items-center justify-center`}
                    style={{ backgroundColor: category.bgColor }}
                  >
                    <img
                      src={category.imagePath}
                      alt="icon"
                      width={35}
                      height={34}
                    />
                  </div>
                  <h2 className="text-xl font-bold">{category.title}</h2>
                  <p className="text-justify text-sm">{category.description}</p>
                  <div className="flex items-center gap-2 absolute bottom-5 cursor-pointer">
                    <Link to="/soon">
                      <span className="text-xs">Discover More</span>
                    </Link>
                    <FaArrowRightLong />
                  </div>
                  {category.additionalImagePath && (
                    <img
                      src={category.additionalImagePath}
                      alt="icon"
                      width={112}
                      height={112}
                      className="absolute -top-14 right-0"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
