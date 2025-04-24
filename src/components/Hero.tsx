// import { useLanguage } from "../context/useLanguage";

const Hero = () => {
  // const { translations } = useLanguage();

  return (
    <section id="hero">
      <div
        className="relative bg-cover bg-center w-full aspect-[509/177]"
        style={{
          backgroundImage: `url('/assets/home-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 flex items-end "> 
          <div className="bg-navy bg-opacity-90 text-white p-6 md:p-8 max-w-[30rem]">
          <h1 className="font-bai font-semibold text-bai-36-600" >
              Conecting
              <br />
              <span className="font-bai font-regular text-bai-36-400">
                the world to   <br /> essential <em className="italic">raw   <br /> materials</em>
              </span>
            </h1>

            <p className="font-shoulders font-regular text-shoulders-24-400 pt-4">
              We <strong>facilitate direct connections</strong>
              <br />
              <strong>between buyers and product owners</strong>,<br />
              ensuring a responsible supply of essential resources.
            </p>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
