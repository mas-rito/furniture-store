import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { social } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../redux/slice/navbarSlice";

const Notifications = () => {
  const [active, setActive] = useState(true);

  const iconDiscont = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.0181 14.8356L20.7727 15.5444H20.7727L21.0181 14.8356ZM21.0181 9.16437L21.2635 9.8731V9.8731L21.0181 9.16437ZM2.98189 14.8356L3.22727 15.5444H3.22727L2.98189 14.8356ZM2.98189 9.16437L2.73652 9.8731L2.73652 9.8731L2.98189 9.16437ZM15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L15.5303 9.53033ZM8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L8.46967 14.4697ZM6 20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25C1.25 19.6234 3.37665 21.75 6 21.75V20.25ZM21.25 17C21.25 18.7949 19.7949 20.25 18 20.25V21.75C20.6234 21.75 22.75 19.6234 22.75 17H21.25ZM18 3.75C19.7949 3.75 21.25 5.20507 21.25 7H22.75C22.75 4.37665 20.6234 2.25 18 2.25V3.75ZM6 2.25C3.37665 2.25 1.25 4.37665 1.25 7H2.75C2.75 5.20507 4.20507 3.75 6 3.75V2.25ZM21.2635 14.1269C20.3815 13.8216 19.75 12.9836 19.75 12H18.25C18.25 13.6424 19.3054 15.0363 20.7727 15.5444L21.2635 14.1269ZM19.75 12C19.75 11.0164 20.3815 10.1784 21.2635 9.8731L20.7727 8.45565C19.3054 8.96367 18.25 10.3576 18.25 12H19.75ZM4.25 12C4.25 12.9836 3.61845 13.8216 2.73652 14.1269L3.22727 15.5444C4.69461 15.0363 5.75 13.6424 5.75 12H4.25ZM2.73652 9.8731C3.61845 10.1784 4.25 11.0164 4.25 12H5.75C5.75 10.3576 4.69462 8.96367 3.22727 8.45565L2.73652 9.8731ZM22.75 8V7H21.25V8H22.75ZM21.25 16V17H22.75V16H21.25ZM1.25 16V17H2.75V16H1.25ZM2.75 8V7H1.25V8H2.75ZM18 20.25H6V21.75H18V20.25ZM18 2.25H6V3.75H18V2.25ZM2.73652 14.1269C2.05785 14.3619 1.25 14.9975 1.25 16H2.75C2.75 15.9441 2.77081 15.8708 2.85172 15.7813C2.9366 15.6873 3.06974 15.5989 3.22727 15.5444L2.73652 14.1269ZM21.2635 9.8731C21.9422 9.63813 22.75 9.00246 22.75 8H21.25C21.25 8.05587 21.2292 8.12917 21.1483 8.21871C21.0634 8.31265 20.9303 8.40111 20.7727 8.45565L21.2635 9.8731ZM3.22727 8.45565C3.06974 8.40111 2.9366 8.31265 2.85172 8.21871C2.77081 8.12917 2.75 8.05587 2.75 8H1.25C1.25 9.00246 2.05785 9.63813 2.73652 9.8731L3.22727 8.45565ZM20.7727 15.5444C20.9303 15.5989 21.0634 15.6873 21.1483 15.7813C21.2292 15.8708 21.25 15.9441 21.25 16H22.75C22.75 14.9975 21.9422 14.3619 21.2635 14.1269L20.7727 15.5444ZM9.25 9C9.25 9.13807 9.13807 9.25 9 9.25V10.75C9.9665 10.75 10.75 9.9665 10.75 9H9.25ZM9 9.25C8.86193 9.25 8.75 9.13807 8.75 9H7.25C7.25 9.9665 8.0335 10.75 9 10.75V9.25ZM8.75 9C8.75 8.86193 8.86193 8.75 9 8.75V7.25C8.0335 7.25 7.25 8.0335 7.25 9H8.75ZM9 8.75C9.13807 8.75 9.25 8.86193 9.25 9H10.75C10.75 8.0335 9.9665 7.25 9 7.25V8.75ZM15.25 15C15.25 15.1381 15.1381 15.25 15 15.25V16.75C15.9665 16.75 16.75 15.9665 16.75 15H15.25ZM15 15.25C14.8619 15.25 14.75 15.1381 14.75 15H13.25C13.25 15.9665 14.0335 16.75 15 16.75V15.25ZM14.75 15C14.75 14.8619 14.8619 14.75 15 14.75V13.25C14.0335 13.25 13.25 14.0335 13.25 15H14.75ZM15 14.75C15.1381 14.75 15.25 14.8619 15.25 15H16.75C16.75 14.0335 15.9665 13.25 15 13.25V14.75ZM14.4697 8.46967L8.46967 14.4697L9.53033 15.5303L15.5303 9.53033L14.4697 8.46967Z"
        fill="#141718"
      />
    </svg>
  );

  const iconArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M3.75 9H14.25"
        stroke="#377DFF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 13.5L14.25 9"
        stroke="#377DFF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 4.5L14.25 9"
        stroke="#377DFF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    active && (
      <div className="flex justify-center w-full gap-2 items-center py-2 bg-[#F3F5F7] font-semibold text-[#343839] text-sm fade-in">
        <div className="text-primary">{iconDiscont}</div>
        <h1>30% off storewide — Limited time!</h1>
        <Link
          to={"/shop"}
          className="text-sky-600 hidden md:flex items-center gap-1"
        >
          Shop Now {iconArrow}
        </Link>
        <button
          className="absolute right-4 md:right-10"
          onClick={() => setActive(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4419 5.44194C15.686 5.19786 15.686 4.80214 15.4419 4.55806C15.1979 4.31398 14.8021 4.31398 14.5581 4.55806L10 9.11612L5.44194 4.55806C5.19786 4.31398 4.80214 4.31398 4.55806 4.55806C4.31398 4.80214 4.31398 5.19786 4.55806 5.44194L9.11612 10L4.55806 14.5581C4.31398 14.8021 4.31398 15.1979 4.55806 15.4419C4.80214 15.686 5.19786 15.686 5.44194 15.4419L10 10.8839L14.5581 15.4419C14.8021 15.686 15.1979 15.1979 15.4419 14.5581C15.686 14.8021 15.686 14.8021 15.4419 14.5581L10.8839 10L15.4419 5.44194Z"
              fill="#343839"
            />
          </svg>
        </button>
      </div>
    )
  );
};

const MobileNav = () => {
  const isOpen = useSelector((state) => state.navbar.showNavbar);
  const dispatch = useDispatch();

  const iconSearch = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const iconCart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6115 3H8.38851C6.43316 3 4.7644 4.41365 4.44294 6.3424L2.77627 16.3424C2.36992 18.7805 4.25009 21 6.72185 21H17.2782C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.5571 6.3424C19.2356 4.41365 17.5669 3 15.6115 3Z"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  const iconProfile = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed z-50 left-0 top-0 w-full h-screen bg-white p-6 transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl text-primary">
          3legant<span className="text-secondary">.</span>
        </h1>
        <button onClick={() => dispatch(toggleNavbar())} className="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4419 5.44194C15.686 5.19786 15.686 4.80214 15.4419 4.55806C15.1979 4.31398 14.8021 4.31398 14.5581 4.55806L10 9.11612L5.44194 4.55806C5.19786 4.31398 4.80214 4.31398 4.55806 4.55806C4.31398 4.80214 4.31398 5.19786 4.55806 5.44194L9.11612 10L4.55806 14.5581C4.31398 14.8021 4.31398 15.1979 4.55806 15.4419C4.80214 15.686 5.19786 15.686 5.44194 15.4419L10 10.8839L14.5581 15.4419C14.8021 15.686 15.1979 15.1979 15.4419 14.5581C15.686 14.8021 15.686 14.8021 15.4419 14.5581L10.8839 10L15.4419 5.44194Z"
              fill="#343839"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-3 mt-4">
          <form
            action=""
            className="border-2 rounded-md px-4 py-2 flex gap-3 items-center w-full"
          >
            <button type="submit">{iconSearch}</button>
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[38px] border-none outline-none"
            />
          </form>
          <ul className="font-medium">
            <li className="border-b border-slate-200 py-4">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="border-b border-slate-200 py-4">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="border-b border-slate-200 py-4">
              <Link to={"/product"}>Product</Link>
            </li>
            <li className="border-b border-slate-200 py-4">
              <Link to={"/contact"}>Contanct Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <ul className="font-medium text-secondary">
            <li className="border-b border-slate-200 flex justify-between items-center py-4">
              <h1>Cart</h1>
              <div className="flex items-center gap-1">
                <div>{iconCart}</div>
                <div className="w-6 h-6 bg-primary rounded-full text-white text-center">
                  2
                </div>
              </div>
            </li>
            <li className="border-b border-slate-200 flex justify-between items-center py-4">
              <h1>Rito Ramadhan</h1>
              <div className="flex items-center gap-1">
                <div>{iconProfile}</div>
              </div>
            </li>
          </ul>
          <button
            type="button"
            className="w-full bg-primary text-white py-3 rounded-lg active:scale-95 transition duration-300 select-none"
          >
            Sign Out
          </button>
          <div className="w-full flex justify-center gap-6">
            {social.map((item, index) => (
              <Link to={item.link} key={index}>
                <img src={item.icon} alt={item.name} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const dispatch = useDispatch();

  const iconSearch = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const iconProfile = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  const iconCart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6115 3H8.38851C6.43316 3 4.7644 4.41365 4.44294 6.3424L2.77627 16.3424C2.36992 18.7805 4.25009 21 6.72185 21H17.2782C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.5571 6.3424C19.2356 4.41365 17.5669 3 15.6115 3Z"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  const iconMenu = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 8H17M7 12H17M7 16H17"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <>
      <Notifications />
      <MobileNav />
      <div className="w-full flex justify-between items-center py-5 px-8 md:px-10 lg:px-[160px]">
        <button
          className="lg:hidden button"
          onClick={() => dispatch(toggleNavbar())}
        >
          {iconMenu}
        </button>
        <h1 className=" font-bold text-xl md:text-2xl mr-auto lg:mr-0 ml-0">
          3legant<span className="text-secondary">.</span>
        </h1>
        <div className="hidden lg:flex gap-5 text-secondary text-sm">
          <Link to="#" className="active hover:text-primary">
            Home
          </Link>
          <Link to="#" className="hover:text-primary">
            Shop
          </Link>
          <Link to="#" className="hover:text-primary">
            Product
          </Link>
          <Link to="#" className="hover:text-primary">
            Contanct Us
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <div className="hidden lg:block">{iconSearch}</div>
          <div className="hidden lg:block">{iconProfile}</div>
          <div className="flex items-center gap-1">
            <div>{iconCart}</div>
            <div className="w-6 h-6 bg-primary rounded-full text-white text-center">
              2
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
