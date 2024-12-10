import Link from "next/link";
import Image from "next/image";
import logo from "@/public/svgs/headers/logo.svg";
import instagram from "@/public/svgs/footer/instagram.svg";
import twitter from "@/public/svgs/footer/twitter.svg";
import linkedin from "@/public/svgs/footer/linkedin.svg";

// Reusable FooterLink Component
interface FooterLinkProps {
  label: string;
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href }) => (
  <li>
    <Link
      href={href}
      className="text-sm text-muted-foreground hover:text-primary"
    >
      {label}
    </Link>
  </li>
);

const Footer: React.FC = () => {
  return (
    <footer className="border-t w-full mb-[56px]">
      <div className="px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo Section */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6">
            <Link href="/" className="flex items-center">
              <Image src={logo} height={65} alt="logo" />
            </Link>

            {/* Info Pratiques Section */}
            <div>
              <h3 className="text-[18px] font-semibold uppercase tracking-wider">
                INFOS PRATIQUES
              </h3>
              <ul className="space-y-2">
                <FooterLink label="À propos" href="#" />
                <FooterLink label="Livraisons & Reprises" href="#" />
                <FooterLink label="Mode d'emploi" href="#" />
                <FooterLink label="F.A.Q" href="#" />
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-[18px] font-semibold uppercase tracking-wider">
                LEGAL
              </h3>
              <ul className="space-y-2">
                <FooterLink label="Mentions légales" href="#" />
                <FooterLink label="CGU" href="#" />
                <FooterLink label="CGV" href="#" />
                <FooterLink label="Politique de confidentialité" href="#" />
              </ul>
            </div>

            {/* Mon Compte Section */}
            <div>
              <h3 className="text-[18px] font-semibold uppercase tracking-wider">
                MON COMPTE
              </h3>
              <ul className="space-y-2">
                <FooterLink label="Accéder à mon compte" href="#" />
                <FooterLink label="Ma liste d'envie" href="#" />
                <FooterLink label="Créer un compte" href="#" />
                <FooterLink label="Mot de passe oublié" href="#" />
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-[18px] font-semibold uppercase tracking-wider">
              NOUS SUIVRE
            </h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Image src={twitter} alt="Twitter" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Image src={instagram} alt="Instagram" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Image src={linkedin} alt="LinkedIn" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
