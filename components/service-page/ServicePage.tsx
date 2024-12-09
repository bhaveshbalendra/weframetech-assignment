// import { Mail } from "lucide-react";
"use client";
import Image from "next/image";
import { useState } from "react";

export default function ServicesPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-white">
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Livraison & Reprise",
              subtitle: "Selon vos besoins",
              icon: "🚚",
            },
            {
              title: "Nettoyage",
              subtitle: "Selon vos besoins",
              icon: "🧹",
            },
            {
              title: "Commande illimitée",
              subtitle: "Tout est possible",
              icon: "🛒",
            },
            {
              title: "Transport & Enlèvement",
              subtitle: "On s'occupe de tout",
              icon: "🚛",
            },
          ].map((service) => (
            <div key={service.title} className="text-center">
              <div className="text-4xl mb-4" aria-label={service.title}>
                {service.icon}
              </div>
              <h3 className="font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Promotional Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-[#f4f4f4] rounded-lg overflow-hidden">
            {/* <Image
              src="/images/sofa.jpg" // Replace with your valid image path
              alt="Green sofa with coffee table"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            /> */}
          </div>
          <div className="bg-[#FFF5F7] p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              S&apos;inscrire & économiser{" "}
              <span className="text-[#40E0D0]">10%</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest meat opportunity didn&apos;t. Yet busy any
              meeting shark light marginalised 4-blocker message. Productize
              corporate nail caught synergy highlights lunch. Company another
              pushback items dear or any.
            </p>
            <div className="flex gap-4">
              {/* <input
                type="email"
                placeholder="john@doe.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#40E0D0]"
              /> */}
              <button
                className="bg-[#40E0D0] hover:bg-[#3BC9C9] px-6 py-2 text-white rounded-md"
                onClick={() => {
                  if (email) {
                    alert(`Thank you for subscribing, ${email}!`);
                  } else {
                    alert("Please enter a valid email address.");
                  }
                }}
              >
                S&apos;INSCRIRE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
