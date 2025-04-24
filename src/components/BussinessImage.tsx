
const BussinessImage = () => {
  return (
    <>
    <div
        className="relative bg-cover bg-center w-full aspect-[509/77]"
        style={{
          backgroundImage: `url('/assets/bussiness-image.jpg')`,
        }}
      >
        </div>
      <div className="flex flex-col items-center justify-center bg-white py-[1.5rem]">
      <p className="font-shoulders font-regular text-shoulders-20-400 text-center">International shipping involves complex compliance paperwork. </p>
      <br />
      <p className="font-shoulders font-bold text-shoulders-20-700 text-center">We provide completelogistics solutions </p>
      <br />
      <p className="font-shoulders font-regular text-shoulders-20-400 text-center">to streamline your global supply chain</p>

      </div>
        </>
  );
};

export default BussinessImage;
