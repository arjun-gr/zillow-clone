import React from 'react'
import Nav from '../components/Nav'
import houses from '../../data/buyData'
const Buy = () => {
  return (
    <div>
      <Nav/>

      <div className='houses lg:px-80 px-5 pt-12 pb-10 flex justify-center gap-10 lg:justify-start flex-wrap'>
        
          {houses.map((house) => {
            return (
              <div
                key={house.address}
                className="lg:h-72  w-96 rounded-lg overflow-hidden shadow-md lg:hover:scale-105 transition-all cursor-pointer"
              >
                {" "}
                <div className="lg:h-48 overflow-hidden w-full">
                  <img src={house.imageUrl} alt="data-img" className="w-full" />
                </div>
                <div className="p-2">
                  <h2 className="text-xl font-bold">{house.price}</h2>
                  <p>
                    {" "}
                    <span className="font-bold">{house.beds}</span> bds |{" "}
                    <span className="font-bold">{house.bathrooms}</span> ba |{" "}
                    <span className="font-bold"> {house.sqft}</span> sqft |{" "}
                    {house.status}
                  </p>
                  <p>{house.address}</p>
                </div>
              </div>
            );
          })}
        
      </div>
    </div>
  )
}

export default Buy
