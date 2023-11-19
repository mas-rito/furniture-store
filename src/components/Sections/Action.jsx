import { action } from "../../assets";
import MyLink from "../Fragments/MyLink";

const Action = () => {
  return (
    <div className="w-full h-screen md:h-5/6 flex flex-wrap bg-[#F3F5F7]">
      <div className="w-full md:w-1/2">
        <img
          src={action}
          alt="3legant"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-10 lg:pl-[72px] px-6 md:pr-10 lg:pr-[160px] flex flex-col justify-center gap-4">
        <h3 className="text-md text-blue-500 font-bold">SALE UP TO 35% OFF</h3>
        <h1 className="text-[34px] lg:text-[40px] font-medium leading-10 tracking-[-0.4px]">
          HUNDREDS of <br /> New lower prices!
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-secondary">
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <div className="mt-2">
          <MyLink link="/shop">Shop Now</MyLink>
        </div>
      </div>
    </div>
  );
};

export default Action;
