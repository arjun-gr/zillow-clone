import { useState } from "react";
import zillow from "../../assets/z-logo-default.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  const [show, setShow] = useState(null);

  function handleHover(id) {
    setShow(id);
  }

  return (
    <div className="bg-white-500 py-2 sm:px-20 lg:px-80 border">
      <nav className="flex justify-center lg:justify-between items-center">
        <ul className="lg:flex  gap-8 items-center hidden lg:block cursor-pointer">
          <li
            className="relative py-5 hover:text-blue-500"
            onMouseOver={() => handleHover("1")}
            onMouseOut={() => handleHover(null)}
          >
            <Link to="/homes">
            Buy</Link>
            {show === "1" ? (
              <ul className="absolute bg-white top-16 w-40 text-center shadow-md">
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  Home for sale
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Foreclosures
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  For sale by owner
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  Open Houses
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  New constructions
                </li>
              </ul>
            ) : (
              <></>
            )}
          </li>

          <li
            className="relative py-5 hover:text-blue-500"
            onMouseOver={() => handleHover("2")}
            onMouseOut={() => handleHover(null)}
          >
            Rent
            {show === "2" ? (
              <ul className="absolute bg-white top-16 w-40 text-center shadow-md">
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  Rental buildings
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Apartments for rent
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Houses for rent
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  All rental listings
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  All rental buildings
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Rent by owner
                </li>
              </ul>
            ) : (
              <></>
            )}
          </li>

          <li
            className="relative py-5 hover:text-blue-500"
            onMouseOver={() => handleHover("3")}
            onMouseOut={() => handleHover(null)}
          >
            Sell
            {show === "3" ? (
              <ul className="absolute bg-white top-16 w-40 text-center shadow-md">
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  Explore your options
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  See your home's value
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Home values
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  Sellers guide
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Sellers agents
                </li>
              </ul>
            ) : (
              <></>
            )}
          </li>

          <li
            className="relative py-5 hover:text-blue-500"
            onMouseOver={() => handleHover("4")}
            onMouseOut={() => handleHover(null)}
          >
            Home Loans
            {show === "4" ? (
              <ul className="absolute bg-white top-16 w-40 text-center shadow-md">
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  Zillow Home Loans
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Bank Loans
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Calulate your budget
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  Home equity
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Today's rates
                </li>
              </ul>
            ) : (
              <></>
            )}
          </li>

          <li
            className="relative py-5 hover:text-blue-500"
            onMouseOver={() => handleHover("5")}
            onMouseOut={() => handleHover(null)}
          >
            Agent Finder
            {show === "5" ? (
              <ul className="absolute bg-white top-16 w-40 text-center shadow-md z-50">
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  Real estate agents
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Property managers
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Home inspectors
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  Home builders
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Agent resource
                </li>
              </ul>
            ) : (
              <></>
            )}
          </li>
        </ul>
        
        <Link to="/">
        <img src={zillow} alt="zillow-logo" className="w-40" /></Link>

        <ul className="lg:flex gap-8 items-center hidden lg:block">
          <li
            className="relative py-5 hover:text-blue-500"
            onMouseOver={() => handleHover("6")}
            onMouseOut={() => handleHover(null)}
          >
            Manage Rentals
            {show === "6" ? (
              <ul className="absolute bg-white top-16 w-40 text-center shadow-md">
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  List a rental
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  My Listings
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Messages
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black p-2">
                  Applications
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Leases
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Payments
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Zillow rental hub
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  My rentals
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Resource center
                </li>
                <li className="border hover:bg-blue-500 hover:text-white text-black  p-2">
                  Help center
                </li>
              </ul>
            ) : (
              <></>
            )}
          </li>
          <li>Advertise</li>
          <li>Help</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
