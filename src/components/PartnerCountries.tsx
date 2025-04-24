import { useRef } from "react";
import { useLanguage } from "../context/useLanguage";

const PartnerCountries = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { translations } = useLanguage();

  const countries = [
    {
      title: translations.partner_brazil_title,
      description: translations.partner_brazil_description,
      image: "/assets/brazil.png",
    },
    {
      title: translations.partner_mexico_title,
      description: translations.partner_mexico_description,
      image: "/assets/mexico.png",
    },
    {
      title: translations.partner_china_title,
      description: translations.partner_china_description,
      image: "/assets/china.png",
    },
    {
      title: translations.partner_vietnam_title,
      description: translations.partner_vietnam_description,
      image: "/assets/vietnam.png",
    },
  ];

  return (
    <section className="pb-8">
      <h2 className="pl-4 pb-[2.5rem] font-bai font-semibold text-bai-24-600 text-left">
        {translations.partner_section_title}
      </h2>
      <div className="pl-4">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {countries.map((item, index) => (
            <div
              key={index}
              className="max-w-[22.56rem] rounded-lg text-white flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[11.67rem] h-[10.5rem] object-cover rounded-[8px]"
              />
              <h3 className="text-bai-24-400 text-darkBlue font-bai font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-shoulders-16-400 text-darkBlue font-shoulders font-regular">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCountries;
