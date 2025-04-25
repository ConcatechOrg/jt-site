import { useLanguage } from "../context/useLanguage";

const BussinessImage = () => {
  const { translations } = useLanguage();

  return (
    <>
      <div
        className="relative bg-cover bg-center w-full aspect-[509/137]"
        style={{
          backgroundImage: `url('/assets/bussiness-image.jpg')`,
        }}
      ></div>
      <div className="flex flex-col items-center justify-center bg-white py-[1.5rem]">
        <p className="font-shoulders font-regular text-shoulders-20-400 text-center">
          {translations.business_image_line1}
        </p>
        <br />
        <p className="font-shoulders font-bold text-shoulders-20-700 text-center">
          {translations.business_image_line2}
        </p>
        <br />
        <p className="font-shoulders font-regular text-shoulders-20-400 text-center">
          {translations.business_image_line3}
        </p>
      </div>
    </>
  );
};

export default BussinessImage;
