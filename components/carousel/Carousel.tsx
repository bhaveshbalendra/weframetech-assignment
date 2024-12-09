import React from "react";
import table_transparent from "@/public/images/product/Table_ronde_165cm_Festi_1-removebg-preview.png";
import ProductCard from "../product-card/ProductCard";

const Carousel: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium">Articles similaires</h2>
        <p className="text-blue-500 cursor-pointer">VOIR TOUTE LA COLLECTION</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <ProductCard
              key={index}
              title="Title"
              price="0"
              unitPrice="0.35€/Pièce"
              reference="VABGN5"
              pieces={20}
              imageSrc={table_transparent}
              category="ART DE LA TABLE"
              isFavorite={false}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
