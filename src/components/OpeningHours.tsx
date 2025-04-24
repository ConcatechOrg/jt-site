import { useLanguage } from "../context/useLanguage";
import WhatsappButton from "./WhatsappButton";

const OpeningHours = () => {
  const { translations } = useLanguage();

  return (
    <section className="pl-[1.5rem]">
      <div className="mx-auto">
        <h2 className="font-bai font-semibold text-bai-24-600 pb-[2rem]">
          {translations.opening_title}
        </h2>
        <div className="font-shoulders font-regular text-shoulders-16-400">
          <p className="mb-2">{translations.opening_weekdays}</p>
          <p>{translations.opening_saturday}</p>
        </div>

        <div className="mt-6 mb-4 flex justify-center">
          <WhatsappButton />
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
