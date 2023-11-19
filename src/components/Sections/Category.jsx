import { Link } from "react-router-dom";
import { livingRoom, bedroom, kitchen } from "../../assets";
import MyLink from "../Fragments/MyLink";

const Card = ({ image, title, link, position }) => {
  return (
    <div className="w-full relative">
      <div
        className={`absolute  ${
          position === "top" ? "top-8 lg:top-12" : "bottom-8 lg:bottom-12"
        } left-8 lg:left-12 z-10`}
      >
        <h1 className="text-2xl lg:text-3xl mb-3">{title}</h1>
        <MyLink link={link}>Shop Now</MyLink>
      </div>
      <img
        src={image}
        alt="Living Room"
        className="w-full rounded-lg object-cover"
      />
    </div>
  );
};

const Category = () => {
  return (
    <div className="px-4 md:px-8 lg:px-[160px] flex flex-wrap gap-3 md:gap-0 font-medium">
      <div className="w-full md:w-1/2 md:pr-3">
        <Card
          image={livingRoom}
          title="Living Room"
          link="/shop"
          position="top"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <Card image={bedroom} title="Bedroom" link="/shop" position="bottom" />
        <Card image={kitchen} title="Kitchen" link="/shop" position="bottom" />
      </div>
    </div>
  );
};

export default Category;
