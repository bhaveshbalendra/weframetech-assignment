import ProductDetailsPage from "@/components/product/ProductDetailSection";
import React from "react";
import cheese from "@/public/images/product/Location Cheese big picture 1.webp";
import table from "@/public/images/product/Table ronde 165cm Festi 2.webp";
import Carousel from "@/components/carousel/Carousel";
import ServicesPage from "@/components/service/ServiceSection";
import Collection from "@/components/collections/Collection";

// Page Component
const page: React.FC = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <p className="text-sm lg:text-base py-4 ml-[32px] lg:ml-[64px] ">
        <span className="font-medium">Home</span>
        <span className="text-[#9c9c9c]"> • Art de la table</span>
      </p>
      {/* Product Detail Section */}
      <ProductDetailsPage
        description="Festi vous propose à la location un/une 'Jewel – grand couteau/10pc' pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence 'VAJGC'. Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie 'Art de la Table'."
        title="Cheese - appareil à raclette 1/2 roue"
        price="39,50€"
        unit="pièce"
        reference="VAGON5"
        dimensions={{ width: 20, height: 50 }}
        features={[
          // Highlighted product features
          "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
          "Réglable en hauteur",
          "Appareil à raclette professionnel",
          "Boîtier de chauffe horizontal réglable en hauteur",
        ]}
        specifications={{
          // Technical specifications of the product
          Voltage: "220V",
          Power: "900W",
        }}
        mainImage={cheese} // Main product image
        additionalImages={[table, table, table, table]} // Additional product images
        accordionItems={[
          // Expandable sections for more details
          { title: "Livraisons", content: "Information de livraison..." },
          {
            title: "Questions",
            content:
              "Festi vous propose à la location un/une 'Jewel - grand couteau/10pc'...",
          },
        ]}
      />

      {/* Carousel Section */}
      <Carousel />

      {/* Collection Section */}
      <Collection />

      {/* Services Page Section */}
      <ServicesPage />
    </div>
  );
};

export default page;
