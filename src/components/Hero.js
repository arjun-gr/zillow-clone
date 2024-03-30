import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-div h-[470px] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="drop-shadow-xl text-white lg:text-4xl font-bold">
          <span>Agents.</span>
          <span>Tours.</span> 
          <span>Loans.</span> 
          <span>Homes.</span> 
  
        </h1>
        <div className="input flex justify-center items-center bg-green-400 mt-8">
          <input
            type="text"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            className="w-[200px] lg:w-[640px] p-5 outline-none"
          />
          <button className="bg-white p-6 hover:bg-slate-200">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
