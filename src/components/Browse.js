import React from "react";
import browseHomes from "../../assets/browse/homes.jpg";
import rent from "../../assets/browse/rent.jpg";
import buyHome from "../../assets/browse/buyhome.jpg";

const Browse = () => {
  return (
    <div className="browse-items bg-slate-100 px-5 lg:px-80 py-10 gap-2 flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="browse-homes bg-white lg:w-[380px] p-10 rounded-lg shadow-lg lg:hover:scale-105 transition-all cursor-pointer">
        <img src={browseHomes} alt="browse-homes" />
        <div className="browse-homes-data text-center">
          <h1 className="text-2xl font-bold py-3">Browse homes</h1>
          <p>
            Find your place with an immersive photo experience and the most
            listings, including things you wont find anywhere else.
          </p>
          <button className="border py-2 px-4 rounded-md border-blue-600 text-blue-600 font-bold mt-8 mb-10">
            Browse homes
          </button>
        </div>
      </div>

      <div className="find-rental bg-white lg:w-[380px] p-10 rounded-lg shadow-lg lg:hover:scale-105 transition-all cursor-pointer">
        <img src={rent} alt="find-rental" />
        <div className="find-rental-data text-center">
          <h1 className="text-2xl font-bold py-3">Rent a home</h1>
          <p>
            We're creating a seamless online experience from shopping on the
            largest rental network, to applying, to paying rent.
          </p>
          <button className="border py-2 px-4 rounded-md border-blue-600 text-blue-600 font-bold mt-8 mb-10">
            Find rentals
          </button>
        </div>
      </div>

      <div className="buy-home bg-white lg:w-[380px] p-10 rounded-lg shadow-lg lg:hover:scale-105 transition-all cursor-pointer">
        <img src={buyHome} alt="buy-home" />
        <div className="buy-home-data text-center">
          <h1 className="text-2xl font-bold py-3">Buy a home</h1>
          <p>
            A real estate agent can provide you with a clear breakdown of costs
            so that you can avoid suprise expenses.
          </p>
          <button className="border py-2 px-4 rounded-md border-blue-600 text-blue-600 font-bold mt-8 mb-10">
            Find a local agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Browse;
