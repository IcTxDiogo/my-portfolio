import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiFillHome } from "react-icons/ai";
import { SocialIconSize, iconSize } from "..";

interface FooterProps {
  isHome?: true;
}

export default function Footer({ isHome }: FooterProps = {}) {
  return (
    <footer className="text-center border-t-2">
      <div className="flex items-center justify-center gap-4 p-4">
        <Link href="https://www.linkedin.com/in/diogofrancasantos/">
          <AiFillLinkedin size={SocialIconSize} />
        </Link>
        {!isHome && (
          <Link href="/">
            <AiFillHome size={iconSize} />
          </Link>
        )}
        <Link href="https://github.com/IcTxDiogo">
          <AiFillGithub size={SocialIconSize} />
        </Link>
      </div>
      <p>© 2023 Diogo França dos Santos</p>
    </footer>
  );
}
