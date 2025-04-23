import { useLanguage } from "../context/useLanguage";

const Hero = () => {
  const { translations } = useLanguage();

  return (
    <section id="hero">
      <div
        className="
           bg-void 
    pt-[4vw] md:pt-[3vw] 
    pb-[10vw] md:pb-[3vw] 
    bg-cover bg-center 
    w-full aspect-[909/427]
          "
        style={{
          backgroundImage: `url('/assets/home-bg.avif')`,
        }}
      >
        <h1 >aqui outro</h1>
        <span>aqui texto</span>
       
      </div>
    </section>
  );
};

export default Hero;
