export const Gallery = () => {
  return (
    <div className="flex justify-center bg-cover bg-no-repeat bg-center w-full relative">
      <div className="innerContainer z-30 mx-10">
        <div className="flex flex-col items-center max-lg: max-sm:p-10">
          <div
            data-aos="fade-right"
            className="text-5xl flex gap-2 font-extrabold py-20 justify-center"
          >
            <span className="!text-[#5bac52]">Gallery of</span> Our Clinic
          </div>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-10 gap-10 mb-40">
            <div>
              <img
                src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-img-1.jpg"
                alt="Image..."
                width={333}
                height={306}
                className="mb-6"
              />
            </div>
            <div>
              <img
                src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-img-2.jpg"
                alt="Image..."
                width={333}
                height={306}
                className="mb-6"
              />
            </div>
            <div>
              <img
                src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-img-3.jpg"
                alt="Image..."
                width={333}
                height={306}
                className="mb-6"
              />
            </div>
            <div>
              <img
                src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-img-4.jpg"
                alt="Image..."
                width={333}
                height={306}
                className="mb-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
