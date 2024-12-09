import Link from "next/link";
// import { Twitter, Instagram, Linkedin } from 'lucide-react'
import logo from "@/public/svgs/headers/logo.svg";
import instagram from "@/public/svgs/footer/instagram.svg";
import twitter from "@/public/svgs/footer/twitter.svg";
import linkedin from "@/public/svgs/footer/linkedin.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="border-t w-full">
      <div className=" px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} height={65} alt="logo" />
            </Link>
          </div>

          {/* Info Pratiques Section */}
          <div className="space-y-4">
            <h3 className="text-[18px] font-semibold uppercase tracking-wider">
              INFOS PRATIQUES
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Livraisons & Reprises
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Mode d&apos;emploi
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  F.A.Q
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-[18px]  font-semibold uppercase tracking-wider">
              LEGAL
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  CGU
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  CGV
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Mon Compte Section */}
          <div className="space-y-4">
            <h3 className="text-[18px]  font-semibold uppercase tracking-wider">
              MON COMPTE
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Accéder à mon compte
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Ma liste d&apos;envie
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Créer un compte
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Mot de passe oublié
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-[18px]  font-semibold uppercase tracking-wider">
              NOUS SUIVRE
            </h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary  h-[42px]"
              >
                <Image src={twitter} alt="twitter" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary  h-[42px]"
              >
                <Image src={instagram} alt="instagram" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground h-[42px] hover:text-primary"
              >
                <Image src={linkedin} alt="linkedin" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
