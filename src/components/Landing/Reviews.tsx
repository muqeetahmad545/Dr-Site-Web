"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ClientReviews = () => {
  // Array of client review objects
  const reviews = [
    {
      title: "It was a very good experience...",
      comment:
        "I just love working hard. I love being part of a team; I love working toward a common goal. A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",
      name: "Tom",
      image:
        "https://res.cloudinary.com/dfizbmrep/image/upload/v1710497214/client3_b4sflv.png",
    },
    {
      title: "It was a very Excellent experience...",
      comment:
        "I just love working hard. I love being part of a team; I love working toward a common goal. A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",
      name: "Jane",
      image:
        "https://res.cloudinary.com/dfizbmrep/image/upload/v1710497214/client5_r1pmzz.png", // Replace with actual image path
    },
    // ... add more reviews as needed
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div className="innerContainer py-24 relative">
        <div className="flex flex-col gap-6 justify-center px-10">
          <div className="relative z-50">
            <div
              data-aos="fade-right"
              className="text-5xl flex gap-2 font-extrabold py-20 justify-center"
            >
              <span className="!text-[#5bac52]">Here is what our Clients</span>{" "}
              are saying About us{" "}
            </div>
          </div>
          <div className="flex gap-36 justify-center items-center max-sm:gap-20">
            <FaChevronLeft
              className="text-4xl text-[#5bac52]"
              onClick={prevReview}
            />
            <div className="review relative flex flex-col items-center max-w-[30%]  w-full">
              <div
                className="p-10 rounded-xl mb-5 bg-white max-w-4xl max-sm:max-w-5xl z-10"
                style={{ boxShadow: "0px 0px 15px #e5e5e5", zIndex: 20 }}
              >
                <p className="font-bold mb-2 text-center relative text-[#5bac52]">
                  {reviews[currentReviewIndex].title}
                </p>
                <p className="relative">
                  {reviews[currentReviewIndex].comment}
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497216/dots_kcsjbe.png"
                alt="icon"
                width={141}
                height={162}
                className="absolute bottom-20 -left-10"
              />
              <img
                src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497216/dots_kcsjbe.png"
                alt="icon"
                width={141}
                height={162}
                className="absolute -top-16 -right-10"
              />

              <div className="client-info flex flex-col items-center relative z-50">
                <img
                  src={reviews[currentReviewIndex].image}
                  alt={reviews[currentReviewIndex].name}
                  width={106}
                  height={112}
                  className="w-24 h-24"
                />
                <span className="text-[#5bac52] font-bold">
                  {reviews[currentReviewIndex].name}
                </span>
              </div>
            </div>
            <FaChevronRight
              className="text-4xl text-[#5bac52]"
              onClick={nextReview}
            />
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497207/arrowsup_op6cpm.png"
          alt="icon"
          width={38}
          height={70}
          className="absolute top-16 left-0 z-0"
        />
        <img
          src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497207/arrowsup_op6cpm.png"
          alt="icon"
          width={38}
          height={70}
          className="absolute bottom-14 right-0 z-0 rotate-180"
        />
      </div>
    </div>
  );
};

export default ClientReviews;
