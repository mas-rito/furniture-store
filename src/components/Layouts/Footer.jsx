import { Link } from "react-router-dom";
import { social } from "../../constant";

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-[160px] py-12 lg:pt-20 bg-primary text-white">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-fit flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center justify-center md:justify-start">
          <h1
            className="text-2xl text-center md:text-start w-full md:w-fit"
            onClick={() => window.scrollTo(0, 0)}
          >
            3legant<span className="text-secondary">.</span>
          </h1>
          <div className="w-1/6 h-[1px] md:w-[1px] md:h-full bg-secondary" />
          <p className="text-sm w-full md:w-fit text-center md:text-start">
            Gift & Decoration Store
          </p>
        </div>
        <div className="w-full md:w-fit justify-center flex flex-wrap gap-10 items-center mt-10 md:mt-0">
          <Link
            to={"/"}
            className="text-sm hover:text-secondary w-full md:w-fit text-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </Link>
          <Link
            to={"/shop"}
            className="text-sm hover:text-secondary w-full md:w-fit text-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            Shop
          </Link>
          <Link
            to={"/about"}
            className="text-sm hover:text-secondary w-full md:w-fit text-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-sm hover:text-secondary w-full md:w-fit text-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap-reverse justify-center md:justify-between py-4 mt-12 border-t border-secondary gap-y-10">
        <p className="text-sm w-full md:w-fit text-center text-secondary">
          © 2022 3legant. All rights reserved
        </p>
        <div className="flex gap-4">
          {social.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.iconW}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
