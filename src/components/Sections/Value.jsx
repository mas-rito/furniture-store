import { value } from "../../constant";
const Value = () => {
  return (
    <div className="px-4 md:px-8 lg:px-[160px] flex flex-wrap justify-between gap-y-3 my-12">
      {value.map((item) => (
        <div
          key={item.id}
          className="w-[48.5%] md:w-[23%] bg-[#F3F5F7] rounded-md py-12 px-8"
        >
          {item.icon}
          <h2 className="text-sm lg:text-lg font-medium mt-4">{item.title}</h2>
          <p className="text-sm text-secondary mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Value;
