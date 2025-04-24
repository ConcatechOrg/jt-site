import WhatsappButton from "./WhatsappButton";

const OpeningHours = () => {
  return (
    <section className=" pl-[1.5rem]">
      <div className=" mx-auto">
        <h2 className="font-bai font-semibold text-bai-24-600 pb-[2rem]">
          Opening hours
        </h2>
        <div className="font-shoulders font-regular text-shoulders-16-400">
          <p className="mb-2">Mon - Fri: 8:00 am / 6:00 pm</p>
          <p>Saturday: 9:00 am / 7:00 pm</p>
        </div>

        <div className="mt-6">
          <WhatsappButton />
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
