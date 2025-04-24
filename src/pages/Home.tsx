// src/pages/Home.tsx

import BussinessImage from "../components/BussinessImage";
import CommoditiesSliver from "../components/CommoditiesSliver";
import Hero from "../components/Hero";
import PartnerCountries from "../components/PartnerCountries";
import SliverCard from "../components/SliverCard";
import WhatsappButton from "../components/WhatsappButton";

const Home = () => {
  return (
    <>
      <section className="bg-white">
        <Hero />
        <div className="flex justify-center items-center py-8">
          <WhatsappButton />
        </div>
        <div>
          <SliverCard />
        </div>
        <div>
          <BussinessImage />
        </div>
        <div className="pb-[5.56rem]">
          <CommoditiesSliver />
        </div>
        <div>
          <PartnerCountries />
        </div>
      </section>
    </>
  );
};

export default Home;
