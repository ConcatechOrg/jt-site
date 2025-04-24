import { useRef } from "react";
import { useLanguage } from "../context/useLanguage";

const SliverCard = () => {
  const { translations } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="pb-8">
      <div className="pl-4">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {translations.sliver_cards.map((item, index) => (
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
