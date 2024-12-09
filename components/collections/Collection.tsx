import React from "react";
import ProductCard from "../product-card/ProductCard";
import table_transparent from "@/public/images/product/Table_ronde_165cm_Festi_1-removebg-preview.png";

const Collection: React.FC = () => {
  const items = Array(3).fill(1);
  return (
    <div>
      <div>
        <h2>Ces produits pourraient vous intéresser</h2>
        <p>Voir toute la collection</p>
      </div>
      <div>
        <div className="flex overflow-hidden w-full">
          {items.map((_, index) => (
            <ProductCard
              key={index}
              title="Round Table"
              price="0€"
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
    </div>
  );
};

export default Collection;
