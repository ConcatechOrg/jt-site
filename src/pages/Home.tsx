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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
useEffect(() => {
  if (location.state?.scrollTo) {
    const section = document.getElementById(location.state.scrollTo);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);
  return (
    <>
      <section className="bg-softWhite">
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
        <div className="pb-[0.5rem] md:pb-[5.56rem]">
          <CommoditiesSliver />
        </div>
        <div>
          <PartnerCountries />
        </div>
        <div>
          <FaqSection />
        </div>
        <div className="pb-[2rem]">
          <ContactUs imageName="assets/image-all-commodities.png" useBlueBackground={true} />
        </div>
        <div>
          <OpeningHours />
        </div>
      </section>
    </>
  );
};

export default Home;
