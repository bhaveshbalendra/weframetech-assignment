import React from "react";
import search from "@/public/svgs/headers/search-lg.svg";
import Image from "next/image";

const Search: React.FC = () => {
  return (
    <div className="relative max-w-[768px]">
      <input
        type="text"
        placeholder="Rechercher un produit"
        className="w-full border h-[50px] border-gray-300 rounded-[6px] py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <Image src={search} alt="search" width={24} height={24} />
      </div>
    </div>
  );
};

export default Search;
