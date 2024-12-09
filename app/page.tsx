import ProductCard from "@/components/product-card/ProductCard";
import ProductDetail from "@/components/product/ProductDetail";
import React from "react";
import chessa from "@/public/images/product/Location Cheese big picture 1.png";
import table from "@/public/images/product/Table ronde 165cm Festi 2.png";
import table_transparent from "@/public/images/product/Table_ronde_165cm_Festi_1-removebg-preview.png";
import Carousel from "@/components/carousel/Carousel";
import ServicesPage from "@/components/service-page/ServicePage";
import Collection from "@/components/collections/Collection";
const images = [
  "<https://via.placeholder.com/800x400.png?text=Slide+1>",

  "<https://via.placeholder.com/800x400.png?text=Slide+2>",
  "<https://via.placeholder.com/800x400.png?text=Slide+3>",
];
const page: React.FC = () => {
  return (
    <div>
      <ProductDetail
        description="Festi vous propose à la location un/une 'Jewel – grand couteau/10pc' pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence 'VAJGC'. Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie 'Art de la Table'."
        title="Cheese - appareil à raclette 1/2 roue"
        price="39,50€"
        unit="pièce"
        reference="VAGON5"
        dimensions={{ width: 20, height: 50 }}
        features={[
          "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
          "Réglable en hauteur",
          "Appareil à raclette professionnel",
          "Boîtier de chauffe horizontal réglable en hauteur",
        ]}
        specifications={{ Voltage: "220V", Power: "900W" }}
        mainImage={chessa}
        additionalImages={[table, table, table, table]}
        accordionItems={[
          { title: "Livraisons", content: "Information de livraison..." },
          {
            title: "Questions",
            content:
              "Festi vous propose à la location un/une 'Jewel - grand couteau/10pc'...",
          },
        ]}
      />
      <Carousel />
      <Collection />
      <ServicesPage />
      {/* <ProductCard
        title="Round Table"
        price="0€"
        unitPrice="0.35€/Pièce"
        reference="VABGN5"
        pieces={20}
        imageSrc={table_transparent}
        category="ART DE LA TABLE"
        isFavorite={false}
      /> */}
    </div>
  );
};

export default page;
