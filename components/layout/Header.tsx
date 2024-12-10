"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/svgs/headers/logo.svg";
import lightbulb from "@/public/svgs/headers/lightbulb-01.svg";
import heart from "@/public/svgs/heart.svg";
import cart from "@/public/svgs/headers/cart.svg";
import cart2 from "@/public/svgs/headers/cart2.svg";
import avatar from "@/public/svgs/headers/Avatar.svg";
import menuIcon from "@/public/svgs/headers/menu.svg";
import closeIcon from "@/public/svgs/headers/close.svg";
import Search from "@/components/ui/Search";
import down from "@/public/svgs/headers/chevron-down.svg";
import NavButton from "@/components/ui/NavButton";
import Link from "next/link";

const navItems = [
  "ART DE LA TABLE",
  "MOBILIER",
  "NAPPAGE",
  "MATÉRIEL DE SALLE",
  "CUISINE",
  "BARBECUE",
  "TENTE",
  "CHAUFFAGE",
  "PODIUM - PISTE DE DANSE",
  "SON ET LUMIÈRE",
  "PACKS",
  "CONSOMMABLES",
];

const Header: React.FC = () => {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);

  return (
    <header className="h-auto p-10 lg:p-0 lg:h-[168px] border-b border-gray-200 text-[14px] bg-white">
      {/* Desktop Header */}
      <div className="lg:block hidden">
        <div className="flex flex-col h-full">
          {/* Top Navigation */}
          <nav className="flex justify-between items-center h-[112px] px-8">
            <div className="flex items-center gap-6 flex-1">
              <Image src={logo} height={65} alt="Weframetech logo" />
              <div className="flex-grow">
                <Search />
              </div>
            </div>
            <div className="flex items-center gap-[6px] ml-4">
              <NavButton className="text-[#3B4347]">
                <Image
                  src={lightbulb}
                  height={18}
                  width={18}
                  alt="Inspiration"
                />
                <span className="ml-2">Inspiration</span>
              </NavButton>
              <NavButton className="flex p-[14px] text-[#3B4347] items-center gap-x-2">
                <Image src={heart} width={20} height={20} alt="Heart icon" />
                <span>Mes favoris</span>
                <span className="bg-[#CAD2D5] text-[#242D30] text-[10px] flex justify-center items-center h-[18px] w-[28px] rounded-full">
                  24
                </span>
              </NavButton>
              <NavButton className="bg-[#0093D0] py-[13px] px-[18px] text-white rounded-[6px]">
                <Image src={cart} width={20} height={20} alt="Cart" />
                <span className="ml-2">Panier</span>
              </NavButton>
              <NavButton className="ml-[19px] ">
                <Image src={avatar} width={44} height={44} alt="User Avatar" />
              </NavButton>
              <NavButton className="ml-2">
                <span className="mr-2">FR</span>
                <Image src={down} width={16} height={16} alt="Dropdown" />
              </NavButton>
            </div>
          </nav>
          {/* Bottom Navigation */}
          <nav className="h-[56px] hidden xl:block">
            <ul className="flex justify-between max-w-[1537px] mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto items-center h-full">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className={`font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap ${
                      index === 0 ? "text-[#0093D0] " : ""
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <nav className="block lg:hidden h-auto w-full bg-white">
        <div className="relative flex items-center h-full">
          <button
            onClick={() => setIsLeftDrawerOpen(!isLeftDrawerOpen)}
            className="absolute  z-50"
          >
            <Image alt="menu icon" src={menuIcon} width={24} height={24} />
          </button>
          <div className="absolute inset-x-0 flex justify-center">
            <Image alt="logo" src={logo} width={120} height={40} />
          </div>
        </div>
      </nav>

      {/* Left Drawer */}
      {isLeftDrawerOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white p-4">
            <button onClick={() => setIsLeftDrawerOpen(false)} className="mb-4">
              <Image src={closeIcon} alt="Close" width={24} height={24} />
            </button>
            <nav>
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 lg:hidden z-50">
        <div className="flex justify-around py-2">
          <button className="flex flex-col items-center text-gray-600">
            <Image src={lightbulb} width={24} height={24} alt="Inspiration" />
            <span className="text-xs">Inspiration</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            <Image src={heart} width={24} height={24} alt="Favorites" />
            <span className="text-xs">Favoris</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            <Image src={cart2} width={24} height={24} alt="Cart" />
            <span className="text-xs">Panier</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            <Image src={avatar} width={24} height={24} alt="Profile" />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
