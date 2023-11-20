import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../../constant";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useState } from "react";
import MyLink from "../Fragments/MyLink";
import formatCurrency from "../../services/formatCurrenly";

const IconHeart = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div
      className="flex items-center justify-center p-1.5 shadow-md rounded-full"
      onClick={handleClick}
    >
      {isClick ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="fade-in"
        >
          <path
            d="M10.0002 4.18159C9.02692 3.24762 7.70557 2.67361 6.25016 2.67361C3.25862 2.67361 0.833496 5.09874 0.833496 8.09028C0.833496 13.3972 6.64211 16.3278 9.01165 17.3025C9.6498 17.565 10.3505 17.565 10.9887 17.3025C13.3582 16.3278 19.1668 13.3972 19.1668 8.09028C19.1668 5.09874 16.7417 2.67361 13.7502 2.67361C12.2948 2.67361 10.9734 3.24762 10.0002 4.18159Z"
            fill="red"
          />
        </svg>
      ) : (
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
            d="M10.577 5.76422C10.2546 6.07365 9.74545 6.07365 9.42301 5.76422L8.84601 5.2105C8.17065 4.56239 7.25829 4.16667 6.25001 4.16667C4.17894 4.16667 2.50001 5.8456 2.50001 7.91667C2.50001 9.90219 3.57483 11.5417 5.12647 12.8888C6.67944 14.237 8.53618 15.1312 9.64555 15.5876C9.87751 15.683 10.1225 15.683 10.3545 15.5876C11.4638 15.1312 13.3206 14.237 14.8735 12.8888C16.4252 11.5417 17.5 9.90218 17.5 7.91667C17.5 5.8456 15.8211 4.16667 13.75 4.16667C12.7417 4.16667 11.8294 4.56239 11.154 5.2105L10.577 5.76422ZM10 4.00798C9.02676 3.074 7.70542 2.5 6.25001 2.5C3.25847 2.5 0.833344 4.92512 0.833344 7.91667C0.833344 13.2235 6.64196 16.1542 9.0115 17.1289C9.64965 17.3914 10.3504 17.3914 10.9885 17.1289C13.3581 16.1542 19.1667 13.2235 19.1667 7.91667C19.1667 4.92512 16.7416 2.5 13.75 2.5C12.2946 2.5 10.9733 3.074 10 4.00798Z"
            fill="#6C7275"
          />
        </svg>
      )}
    </div>
  );
};

const Slide = (props) => {
  const [isHover, setIsHover] = useState(false);
  const { image, price, discount, children } = props;

  const handleHover = () => {
    setIsHover(true);
  };

  const handleHovered = () => {
    setIsHover(false);
  };

  const iconStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
        fill="#343839"
      />
    </svg>
  );
  const stars = Array(5).fill(iconStar);

  const actualPrice = price - (discount * price) / 100;

  return (
    <div className="w-full">
      <div
        className="relative flex justify-center overflow-hidden"
        onMouseEnter={handleHover}
        onMouseLeave={handleHovered}
      >
        <div className="flex flex-col gap-2 absolute top-4 left-4 Z-10 font-bold">
          <p className="py-1 px-3.5 bg-white rounded-md">NEW</p>
          {discount > 0 && (
            <p className="py-1 px-3.5 bg-[#38CB89] text-white rounded-md">
              -{discount}%
            </p>
          )}
        </div>
        <div
          className={`absolute top-4 ${
            isHover ? "right-4" : "-right-[100%]"
          } Z-10 transition-all duration-300 ease-in-out`}
        >
          <IconHeart />
        </div>
        <img src={image} alt={children} className="w-full rounded-md" />
        <button
          type="button"
          className={`absolute ${
            isHover ? "bottom-4" : "-bottom-[100%]"
          } w-11/12 bg-primary text-white py-3 rounded-lg active:scale-95 transition-all duration-300 ease-in-out select-none`}
        >
          Add to cart
        </button>
      </div>
      <div className="flex items-center mt-3">
        {stars.map((star, index) => (
          <div key={index}>{star}</div>
        ))}
      </div>
      <h1 className="text-xl my-1">{children}</h1>
      <div className="flex gap-3">
        <p className="text-lg">{formatCurrency(actualPrice)}</p>
        {discount > 0 && (
          <p className="text-lg text-secondary line-through">
            {formatCurrency(price)}
          </p>
        )}
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className="px-4 md:px-8 lg:px-[160px] mt-12 font-semibold">
      <div className="flex justify-between items-end">
        <h1 className="text-3xl font-medium">
          New
          <br />
          Arrivals
        </h1>
        <MyLink link={"/products"}>More Products</MyLink>
      </div>
      <Swiper
        spaceBetween={24}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="py-12">
            <Slide
              image={product.image}
              price={product.price}
              discount={product.discount}
            >
              {product.name}
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
