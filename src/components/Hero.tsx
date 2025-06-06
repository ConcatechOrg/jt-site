import { useLanguage } from "../context/useLanguage";

const Hero = () => {
  const { translations } = useLanguage();

  return (
    <section id="hero">
      <div
        className="relative bg-cover bg-center w-full aspect-[209/197] max-h-[427px]"
        style={{
          backgroundImage: `url('/assets/home-bg.avif')`,
        }}
      >
        <div className="absolute inset-0 flex items-end"> 
          <div className="bg-navy bg-opacity-90 text-white p-6 md:p-8 pt-[5vw] md:pt-10 w-full md:w-1/2 h-[330px] max-h-[74vw] sm:max-h-[70vw] md:max-h-[330px] md:h-[330px]">
            <h1 className="font-bai font-semibold text-bai-36-600">
              {translations.hero_title_line1}
              <br />
              <span className="font-bai font-regular text-bai-36-400 opacity-90">
                {translations.hero_title_line2_part1} 
                <br />
                {translations.hero_title_line2_part2}{" "}
                <br/>
                <em className="italic">{translations.hero_title_emphasized}</em>
              </span>
            </h1>

            <p className="font-shoulders font-regular text-shoulders-24-400 pt-[5vw] md:pt-8">
              {translations.hero_paragraph_line1}
              <br />
              {translations.hero_paragraph_line2}
              <br />
              {translations.hero_paragraph_line3}
            </p>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
