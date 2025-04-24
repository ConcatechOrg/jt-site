import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const CommoditiesSliver = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };


  const commodities = [
    {
      slug: "agricola",
      title: "Eco-Friendly Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/assets/acricola-card-image.png",
    },
    {
      slug: "energy",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/assets/energy-card-image.png",
    },
    {
      slug: "meat",
      title: "Multilingual Functionality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/assets/meat-card-image.png",
    },
    {
      slug: "ores",
      title: "Advanced Tech",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/assets/ore-card-image.png",
    },
  ];
  const navigate = useNavigate();

  return (
    <section id="commodities" className=" py-[50px]">
      <h2 className="pl-4 pb-[2.5rem] font-bai font-semibold text-bai-24-600 text-left">
        Commodities
      </h2>
      <div className="flex flex-col items-center justify-center relative w-full px-4">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 w-full scrollbar-hide"
        >
          {commodities.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[22rem] bg-white rounded-[8px] shadow-md text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] object-cover rounded-[8px]"
              />
              <div className="p-4">
                <h3 className="text-bai-base  mt-3 font-shoulders font-medium text-darkBlue pb-[2rem]">
                  {item.title}
                </h3>
                <p className="text-bai-base font-shoulders font-regular text-darkBlue pb-[2rem]">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-end mb-4 mr-4">
                <button onClick={() => navigate(`/commodity/${item.slug}`)} className="flex items-center justify-center  px-[0.9375rem] py-[0.5rem] gap-[0.625rem] rounded-[0.5rem] bg-navy text-softWhite font-shoulders font-meidum text-shoulders-16-400">
                  show products
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center shadow"
            onClick={scrollLeft}
          >
            &lt;
          </button>
          <button
            className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center shadow"
            onClick={scrollRight}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommoditiesSliver;
