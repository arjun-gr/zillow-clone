import React from "react";
import appstore from "../../assets/app-store-badge.svg";
import playstore from "../../assets/google-play-badge.svg";
import zillow from "../../assets/z-logo-default.svg";
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import footerimg from "../../assets/footer-art.svg";

const Footer = () => {
  return (
    <div className="footer lg:px-80 px-5">
      <div>
        <ul className="flex flex-wrap justify-center gap-5 text-sm ">
          <li>About</li>
          <li>Zestmates</li>
          <li>Research</li>
          <li>Careers</li>
          <li>Careers- U.S. Privacy Notice</li>
          <li>Careers- Mexico Privacy Notice</li>
          <li>Help</li>
          <li>Advertise</li>
          <li>Fair Housing Guide</li>
          <li>Advocacy</li>
          <li>Terms of use</li>
        </ul>
        <ul className="flex flex-wrap justify-center gap-5 text-sm py-3">
          <li>Privacy portal</li>
          <li>Cookie Preference</li>
          <li>Learn</li>
          <li>AI</li>
          <li>Mobile Apps</li>
        </ul>

        <ul className="flex flex-wrap justify-center gap-5 text-sm pb-5">
          <li>Trulia</li>
          <li>StreetEasy</li>
          <li>HotPads</li>
          <li>Out East</li>
          <li>ShowiwngTime+</li>
        </ul>
      </div>
      <hr />

      <div className="text-[10px] text-center flex flex-col items-center pt-5">
        <p className="lg:w-[710px]">
          Zillow Group is committed to ensuring digital accessibility for
          individuals with disabilities. We are continuously working to improve
          the accessibility of our web experience for everyone, and we welcome
          feedback and accommodation requests. If you wish to report an issue or
          seek an accommodation, please let us know.
        </p>
        <p className="lg:w-[710px] mt-5 mb-3">
          Zillow, Inc. holds real estate brokerage licenses in multiple states.
          Zillow (Canada), Inc. holds real estate brokerage licenses in multiple
          provinces. § 442-H New York Standard Operating Procedures § New York
          Fair Housing Notice TREC: Information about brokerage services,
          Consumer protection notice California DRE #1522444
        </p>

        <a href="" className="text-blue-500 text-sm mb-5">
          Contact Zillow, Inc, Brokerage
        </a>

        <p className="lg:w-[710px]">
          For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
          REALTOR® logo are controlled by The Canadian Real Estate Association
          (CREA) and identify real estate professionals who are members of CREA.
          The trademarks MLS®, Multiple Listing Service® and the associated
          logos are owned by CREA and identify the quality of services provided
          by real estate professionals who are members of CREA. Used under
          license.
        </p>

        <div className="download-mobile-store my-5">
          <button className="mr-2">
            <img src={appstore} alt="appstore" />
          </button>
          <button>
            <img src={playstore} alt="playstore" />
          </button>
        </div>
        <img className="mb-5" src={zillow} alt="zillow-logo" />
        <div className="socials">
          <p className="text-[15px]">Follow us:</p>
          <div className="icons flex justify-center items-center gap-2">
            <FaFacebook size={30} color="#0079db" />
            <TiSocialInstagramCircular size={40} color="#0079db" />
            <FaTiktok size={30} color="#0079db" />
          </div>
        </div>
        <p className="italic text-[15px] my-3">© 2006-2024 Zillow</p>
      </div>
      <img src={footerimg} alt="footerimage" />
    </div>
  );
};

export default Footer;
