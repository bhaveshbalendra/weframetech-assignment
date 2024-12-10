"use client";
import Image from "next/image";
import sopha from "@/public/images/service/BUFFET_037 1.webp";
import helper from "@/public/images/service/helper.webp";
import dish from "@/public/images/service/dish.webp";
import computer from "@/public/images/service/computer.webp";
import truck from "@/public/images/service/truck.webp";

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#fef7fb] to-[#FFFFFF]">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-medium">
          On s&apos;occupe de <span className="text-[#40E0D0]">tout</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Office ipsum you must be muted, it meeting commitment busy pain.
        </p>
      </header>

      {/* Services Section */}
      <div className="max-w-[928px] mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Livraison & Reprise",
              subtitle: "Selon vos besoins",
              icon: helper,
            },
            {
              title: "Nettoyage",
              subtitle: "Selon vos besoins",
              icon: dish,
            },
            {
              title: "Commande illimitée",
              subtitle: "Tout est possible",
              icon: computer,
            },
            {
              title: "Transport & Enlèvement",
              subtitle: "On s'occupe de tout",
              icon: truck,
            },
          ].map((service, index) => (
            <div key={service.title} className="relative text-center">
              <div
                className="text-4xl flex justify-center"
                aria-label={service.title}
              >
                <Image src={service.icon} alt={service.title} />
              </div>
              <p className="text-[20px] p-[13px]">{service.title}</p>
              <p className="text-gray-500 text-[14px]">{service.subtitle}</p>
              {index !== 3 && (
                <div className="hr-lines after:content-[''] hidden md:block after:h-[2px] md:after:w-[100px] lg:after:w-[130px] after:bg-[#454545] after:block after:absolute after:top-[15%] after:-right-20"></div>
              )}
              {/* Line with absolute positioning */}
              {/* <div className="absolute left-0 right-0 border-b-2 top-[80%] mx-4"></div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Promotional Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-[#f4f4f4] rounded-lg overflow-hidden">
            <Image
              src={sopha} // Replace with your valid image path
              alt="Green sofa with coffee table"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-[#FFF5F7] p-14 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              S&apos;inscrire & économiser
              <span className="text-[#62d4de]"> 10%</span>
            </h2>
            <p className=" text-[#9c9c9c] font-normal  mb-6">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest meat opportunity didn&apos;t. Yet busy any
              meeting shark light marginalised 4-blocker message. Productize
              corporate nail caught synergy highlights lunch. Company another
              pushback items dear or any.
            </p>
            <div className="flex gap-4 flex-wrap">
              <input
                type="text"
                placeholder="john@doe.com"
                className="flex-grow p-2 border rounded-md"
              />
              <button className="bg-[#62d4de] hover:bg-[#62d4de] px-6 py-2 text-white rounded-md">
                S&apos;INSCRIRE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
