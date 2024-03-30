import React from 'react'

const About = () => {
  return (
    <div className='lg:px-80 px-5 py-5'>
      <h1 className='font-bold'>About zillow's Recommendations</h1>
      <p>Recommendations are based on your location and search activity, such as the homes you've viewed and saved and the filters you've used. We use this information to bring similar homes to your attention, so you don't miss out.</p>
    
        <div className='dropdowns lg:flex justify-between lg:my-5'>

            <select name="realestate" id="realestate" className='p-5 w-full'>
                <option value="" >Real estate</option>
                <option value="volvo">Browse all homes</option>
                <option value="volvo">Atlanta real estate</option>
                <option value="volvo">Baltimore real estate</option>
                <option value="volvo">Calgary real estate</option>
                <option value="volvo">Dallas realestate</option>
                <option value="volvo">Edmonton real estate</option>
            </select>

            <select name="rental" id="rental" className='p-5 w-full'>
                <option value="">Rentals</option>
                <option value="volvo">Rental Buildings</option>
                <option value="volvo">Atlanta apartments for rent</option>
                <option value="volvo">Baltimore apartments for rent</option>
                <option value="volvo">Charlotte apartments for rent</option>
                <option value="volvo">Dallas apartments for rent</option>
                <option value="volvo">Edmonton apartments for rent</option>
            </select>
     



            <select name="mortgage rates" id="realestate"  className='p-5 w-full block'>
                <option value="" default>Mortgage Rates</option>
                <option value="volvo">Current mortgage rates</option>
                <option value="volvo">Alaska mortgage rates</option>
                <option value="volvo">Arizona mortgage rates</option>
                <option value="volvo">Calgary mortgage rates</option>
                <option value="volvo">Dallas mortgage rates</option>
                <option value="volvo">Edmonton mortgage rates</option>
            </select>

            <select name="browseHomes" id="browseHomes"  className='p-5 w-full'>
                <option value="" >Browse Homes</option>
                <option value="California">California</option>
                <option value="texas">Texas</option>
                <option value="NY">New York</option>
                <option value="Florida">Florida</option>
                <option value="illinois">illinois</option>
                <option value="Georgia">Georgia</option>
            </select>
            
        </div>
        <hr />
    </div>
  )
}

export default About
