import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { sellingData } from "../../data/data";

const Selling = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite:true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="selling lg:px-80 px-5 pt-12 pb-10">
      <div className="flex justify-between">
        <div className="selling-headers pb-5">
          <h1 className="text-xl font-bold">
            Selling Soon Homes in Seattle, WA
          </h1>
          <p>
            Likely to sell in the next month based on market insights and recent
            activity
          </p>
        </div>

        <div className="button-next-prev ml-2 flex flex-col justify-center lg:block gap-2">
          <button
            className="button btn border border-slate-300 rounded-md p-2 hover:bg-slate-200 w-[90px] transition-all"
            onClick={previous}
          >
            Previous
          </button>
          <button
            className="button btn lg:ml-2 border border-slate-300 rounded-md p-2 hover:bg-slate-200 w-[90px] transition-all"
            onClick={next}
          >
            Next
          </button>
        </div>
      </div>

      <Slider arrows={false}
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {sellingData.map((data) => {
          return (
            <div
              key={data.id}
              className="lg:h-72  w-96 rounded-lg overflow-hidden shadow-md"
            >
              {" "}
              <div className="lg:h-48 overflow-hidden w-full">
                <img src={data.img} alt="data-img" className="w-full" />
              </div>
              <div className="p-2">
                <h2 className="text-xl font-bold">{data.price}</h2>
                <p>
                  {" "}
                  <span className="font-bold">{data.bds}</span> bds |{" "}
                  <span className="font-bold">{data.ba}</span> ba |{" "}
                  <span className="font-bold"> {data.sqft}</span> sqft |{" "}
                  {data.status}
                </p>
                <p>{data.location}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Selling;
