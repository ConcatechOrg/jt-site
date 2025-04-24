import { useRef } from "react";

const SliverCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const tasks = [
    {
      title: "Eco-Friendly Design",
      description:
        "Eco-friendly design is at the core of our strategy. We are committed to improving our offerings and expanding our capabilities in design and production. ",
    },
    {
      title: "24/7 Support",
      description:
        "We are dedicated to providing the highest level of customer support, ensuring quality and excellence in everything we do. Customer service is our priority.",
    },
    {
      title: "Multilingual Functionality",
      description:
        "With our multilingual functionality, you can effectively communicate across borders and broaden your global impact.",
    },
    {
      title: "Advanced Tech",
      description:
        "Constantly innovating, our expert team develops leading-edge technology. Experience the future – contact us.",
    },
  ];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="pb-8 ">
  <div className="pl-4"> {/* apenas padding lateral */}
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
    >
      {tasks.map((item, index) => (
        <div
          key={index}
          className="max-w-[22.56rem] bg-blueSoft rounded-lg p-6 text-white flex-shrink-0 shadow-md"
        >
          <h3 className="text-bai-24-400 font-bai font-semibold mb-4">
            {item.title}
          </h3>
          <p className="text-shoulders-16-400 font-shoulders font-regular leading-snug">
            {item.description}
          </p>
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

export default SliverCard;
