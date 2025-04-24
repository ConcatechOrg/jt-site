import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCommodities } from "../context/CommoditiesProvider";
import WhatsappButton from "../components/WhatsappButton";

const Commodities = () => {
  const { slug } = useParams();
  const { getCommodity } = useCommodities();
  const commodity = getCommodity(slug || "");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  if (!commodity) return <p className="p-10 text-center">Commodity not found.</p>;

 
  return (
    <section className="bg-softWhite pt-24 w-full">
      <div className="flex items-center gap-4 p-6">
        <img
          src={commodity.imageDetail}
          alt={commodity.title}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div>
          <h2 className="font-bai font-semibold text-bai-24-600 pb-2">
            {commodity.title}
          </h2>
          <p className="font-shoulders font-regular text-shoulders-16-400 text-gray-700">
            {commodity.description}
          </p>
        </div>
      </div>

      <div className="bg-blueSoft text-white rounded-t-[16px] px-6 py-8">
        <div className="max-w-md mx-auto">
          <h3 className="font-shoulders font-bold text-shoulders-16-400 uppercase mb-6">
          SBLC/DLC Transaction Procedure:
          </h3>

          <ul className="space-y-6">
            {commodity.procedures.map((step, index) => (
              <li key={index} className="flex gap-3 items-start">
                <div className="flex flex-col items-center pt-1">
                  <div className="w-4 h-4 bg-gold rounded-full" />
                  {index !== commodity.procedures.length - 1 && (
                    <div className="w-2 h-8 bg-gold rounded-full mt-1" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-gold">{step.actor}</p>
                  <p className="font-shoulders font-regular text-shoulders-16-400 text-white mt-1">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-softWhite px-6 py-8">
        <div className="flex justify-center">
          <WhatsappButton />
        </div>
      </div>
    </section>
  );
};

export default Commodities;
