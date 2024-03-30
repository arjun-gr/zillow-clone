import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import trendingData from "../../data/data";

const Main = () => {
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
          dots: true
        }
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
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="lg:px-80 px-5 pt-12">
      <div className="top-heading-main flex justify-between">
        <div className="main-data pb-5">
          <h1 className="text-xl font-bold">Trending Homes in Seattle, WA</h1>
          <p>Viewed and saved the most in the area over the past 24 hours</p>
        </div>
        <div className="flex flex-col lg:block justify-center items-center button-next-prev space-y-2 ml-2">
          <button
            className="button btn border border-slate-300 rounded-md p-2 hover:bg-slate-200 w-[90px] lg:w-[90px] transition-all"
            onClick={previous}
          >
            Previous
          </button>
          <button
            className="button btn lg:ml-2 border border-slate-300 rounded-md p-2 w-[90px] hover:bg-slate-200 lg:w-[90px] transition-all"
            onClick={next}
          >
            Next
          </button>
        </div>
      </div>
      <div>
        <Slider arrows={false}
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {trendingData.map((data) => {
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
        <h2 className="text-center font-bold text-blue-700 py-5">
          More recommended homes
        </h2>
      </div>
    </div>
  );
};

export default Main;
