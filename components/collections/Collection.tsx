import React from "react";
import ProductCards from "@/components/ui/ProductCards";
import table_transparent from "@/public/images/product/Table_ronde_165cm_Festi_1-removebg-preview.webp";

const Collection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Section Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-2xl lg:text-[35px]  ">
          Ces produits pourraient vous intéresser
        </h2>
        {/* Link to view all items in the collection */}
        <p className="text-[#393939] text-[12px] pl-2 md:pl-0 md:text-[16px] underline cursor-pointer">
          VOIR TOUTE LA COLLECTION
        </p>
      </div>

      {/* Grid layout to display product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Render multiple ProductCards */}
        {Array(3) // Array to render 3 product cards
          .fill("") // Create an array of 3 empty elements
          .map((_, index) => (
            <div className="w-full h-full" key={index}>
              {/* Product card component with static props for now */}
              <ProductCards
                title="Title"
                price="0"
                unitPrice="0.35€/Pièce"
                reference="VABGN5"
                pieces={20}
                imageSrc={table_transparent} // Example product image
                category="ART DE LA TABLE" // Product category
                isFavorite={false} // Set whether the product is marked as favorite
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Collection;
