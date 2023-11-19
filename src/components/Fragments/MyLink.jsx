import { Link } from "react-router-dom";

const MyLink = ({ link, children }) => {
  const iconArrowNext = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4.16666 10H15.8333"
        stroke="#141718"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8333 15L15.8333 10"
        stroke="#141718"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8333 5L15.8333 10"
        stroke="#141718"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <Link
      to={link}
      className="w-fit flex items-center gap-1 hover:gap-3 transition-all duration-300 pb-2 border-b border-b-[#141718] font-medium"
    >
      <p>{children}</p>
      <div>{iconArrowNext}</div>
    </Link>
  );
};

export default MyLink;
