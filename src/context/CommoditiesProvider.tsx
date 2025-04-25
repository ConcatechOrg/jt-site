import { createContext, useContext, ReactNode } from "react";
import { useLanguage } from "./useLanguage";

type Procedure = {
  actor: string;
  text: string;
};

type Commodity = {
  slug: string;
  title: string;
  description: string;
  imageCard: string;
  imageDetail: string;
  procedures: Procedure[];
};

type CommoditiesContextType = {
  getCommodity: (slug: string) => Commodity | undefined;
  listCommodities: () => Commodity[];
};

const CommoditiesContext = createContext<CommoditiesContextType>({
  getCommodity: () => undefined,
  listCommodities: () => [],
});

type Props = {
  children: ReactNode;
};

export const CommoditiesProvider = ({ children }: Props) => {
  const { translations } = useLanguage();

  const commodities: Commodity[] = translations.commodities;

  const getCommodity = (slug: string) =>
    commodities.find((c) => c.slug === slug);

  return (
    <CommoditiesContext.Provider value={{ getCommodity, listCommodities: () => commodities }}>
      {children}
    </CommoditiesContext.Provider>
  );
};

export const useCommodities = () => useContext(CommoditiesContext);
