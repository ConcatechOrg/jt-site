// src/context/commodities.tsx
import { createContext, useContext, ReactNode } from "react";

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

const commodities: Commodity[] = [
  {
    slug: "agricola",
    title: "sugar, soybean,corn ...",
    description: "High-quality acricola commodity for export",
    imageCard: "/assets/acricola-card-image.png",
    imageDetail: "/assets/acricola-commodities-image.png",
    procedures: [
        {
            actor: "Buyer",
            text: "Sends LOI + CIS/KYC with ID (CEO/Manager).",
          },
          {
            actor: "Seller",
            text: "Sends FCO to Buyer",
          },
          {
            actor: "Buyer",
            text: "Signs and returns FCO with ICPO (corporate email to xxx).",
          },
          {
            actor: "Seller",
            text: "Sends Draft SPA to Buyer.",
          },
          {
            actor: "Buyer",
            text: "Signs SPA and returns (corporate email to xxx).",
          },
          {
            actor: "Seller",
            text: "Signs SPA and returns with Proforma Invoice.",
          },
          {
            actor: "Buyer",
            text: "Returns signed Proforma Invoice with BCL+ATV (Buyer’s bank to Seller’s bank).",
          },
          {
            actor: "Seller",
            text: "Seller and Buyer sign/stamp manually, then Seller sends via DocuSign (legally binding substitute for original paper).",
          },
          {
            actor: "Buyer",
            text: "Issues Financial Instrument Draft (real draft with confirming bank details) to Seller (official email).",
          },
          {
            actor: "Third-Party Issuer SBLC",
            text: "0.1% upfront TT-MT103 for legal/platform fees (30-day validity, renewable monthly at 0.1%). This fee is deducted from the first shipment payment.",
          },
    ],
  },
  {
    slug: "ores",
    title: "steal, aluminium,silver ...",
    description: "High-quality ore commodity for export",
    imageCard: "/assets/ore-card-image.png",
    imageDetail: "/assets/ore-commodities-image.png",
    procedures: [
        {
            actor: "Buyer",
            text: "Sends LOI + CIS/KYC with ID (CEO/Manager).",
          },
          {
            actor: "Seller",
            text: "Sends FCO to Buyer",
          },
          {
            actor: "Buyer",
            text: "Signs and returns FCO with ICPO (corporate email to xxx).",
          },
          {
            actor: "Seller",
            text: "Sends Draft SPA to Buyer.",
          },
          {
            actor: "Buyer",
            text: "Signs SPA and returns (corporate email to xxx).",
          },
          {
            actor: "Seller",
            text: "Signs SPA and returns with Proforma Invoice.",
          },
          {
            actor: "Buyer",
            text: "Returns signed Proforma Invoice with BCL+ATV (Buyer’s bank to Seller’s bank).",
          },
          {
            actor: "Seller",
            text: "Seller and Buyer sign/stamp manually, then Seller sends via DocuSign (legally binding substitute for original paper).",
          },
          {
            actor: "Buyer",
            text: "Issues Financial Instrument Draft (real draft with confirming bank details) to Seller (official email).",
          },
          {
            actor: "Third-Party Issuer SBLC",
            text: "0.1% upfront TT-MT103 for legal/platform fees (30-day validity, renewable monthly at 0.1%). This fee is deducted from the first shipment payment.",
          },
    ],
  },
  {
    slug: "meat",
    title: "pigmeat, chicken,cow ...",
    description: "High-quality meat commodity for export",
    imageCard: "/assets/meat-card-image.png",
    imageDetail: "/assets/meat-commodities-image.png",
    procedures: [
        {
            actor: "Buyer",
            text: "Sends LOI + CIS/KYC with ID (CEO/Manager).",
          },
          {
            actor: "Seller",
            text: "Sends FCO to Buyer",
          },
          {
            actor: "Buyer",
            text: "Signs and returns FCO with ICPO (corporate email to xxx).",
          },
          {
            actor: "Seller",
            text: "Sends Draft SPA to Buyer.",
          },
          {
            actor: "Buyer",
            text: "Signs SPA and returns (corporate email to xxx).",
          },
          {
            actor: "Seller",
            text: "Signs SPA and returns with Proforma Invoice.",
          },
          {
            actor: "Buyer",
            text: "Returns signed Proforma Invoice with BCL+ATV (Buyer’s bank to Seller’s bank).",
          },
          {
            actor: "Seller",
            text: "Seller and Buyer sign/stamp manually, then Seller sends via DocuSign (legally binding substitute for original paper).",
          },
          {
            actor: "Buyer",
            text: "Issues Financial Instrument Draft (real draft with confirming bank details) to Seller (official email).",
          },
          {
            actor: "Third-Party Issuer SBLC",
            text: "0.1% upfront TT-MT103 for legal/platform fees (30-day validity, renewable monthly at 0.1%). This fee is deducted from the first shipment payment.",
          },
    ],
  },
  {
    slug: "energy",
    title: "clean energy, oil, gas ...",
    description: "High-quality energy commodity for export",
    imageCard: "/assets/energy-card-image.png",
    imageDetail: "/assets/energy-commodities-image.png",
    procedures: [
        {
            actor: "Buyer",
            text: "Sends LOI + CIS/KYC with ID (CEO/Manager).",
          },
          {
            actor: "Seller",
            text: "Sends FCO to Buyer",
          },
          {
            actor: "Buyer",
            text: "Signs and returns FCO with ICPO (corporate email to xxx).",
          },
          {
            actor: "Seller",
            text: "Sends Draft SPA to Buyer.",
          },
          {
            actor: "Buyer",
            text: "Signs SPA and returns (corporate email to xxx).",
          },
          {
            actor: "Seller",
            text: "Signs SPA and returns with Proforma Invoice.",
          },
          {
            actor: "Buyer",
            text: "Returns signed Proforma Invoice with BCL+ATV (Buyer’s bank to Seller’s bank).",
          },
          {
            actor: "Seller",
            text: "Seller and Buyer sign/stamp manually, then Seller sends via DocuSign (legally binding substitute for original paper).",
          },
          {
            actor: "Buyer",
            text: "Issues Financial Instrument Draft (real draft with confirming bank details) to Seller (official email).",
          },
          {
            actor: "Third-Party Issuer SBLC",
            text: "0.1% upfront TT-MT103 for legal/platform fees (30-day validity, renewable monthly at 0.1%). This fee is deducted from the first shipment payment.",
          },
    ],
  },
  // ...outros
];

const CommoditiesContext = createContext<CommoditiesContextType>({
    getCommodity: () => undefined,
    listCommodities: () => [],
  });
  
  type Props = {
    children: ReactNode;
  };
  
  export const CommoditiesProvider = ({ children }: Props) => {
    const getCommodity = (slug: string) =>
      commodities.find((c) => c.slug === slug);
  
    return (
      <CommoditiesContext.Provider value={{ getCommodity, listCommodities: () => commodities }}>
        {children}
      </CommoditiesContext.Provider>
    );
  };
  
  export const useCommodities = () => useContext(CommoditiesContext);
