import zillow from "../../assets/z-logo-default.svg";
const Nav = () => {
  return (
    <div className="bg-white-500 sm:px-20 lg:px-80 py-5">
      <nav className="flex justify-center lg:justify-between items-center">
        <ul className="lg:flex gap-8 items-center hidden lg:block">
          <li>Buy</li>
          <li>Rent</li>
          <li>Sell</li>
          <li>Home Loans</li>
          <li>Agent finder</li>
        </ul>

        <img src={zillow}a alt="zillow-logo" className="w-40" />

        <ul className="lg:flex gap-8 items-center hidden lg:block">
          <li>Manage Rentals</li>
          <li>Advertise</li>
          <li>Help</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
