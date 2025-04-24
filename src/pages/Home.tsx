// src/pages/Home.tsx

import BussinessImage from "../components/BussinessImage";
import CommoditiesSliver from "../components/CommoditiesSliver";
import ContactUs from "../components/ContactUs";
import FaqSection from "../components/Faq";
import Hero from "../components/Hero";
import OpeningHours from "../components/OpeningHours";
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
        <div>
          <FaqSection />
        </div>
        <div className="pb-[2rem]">
          <ContactUs  />
        </div>
        <div>
          <OpeningHours />
        </div>
      </section>
    </>
  );
};

export default Home;
