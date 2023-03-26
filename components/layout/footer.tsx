import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SocialIconSize } from "..";

export default function Footer() {
  return (
    <footer className="text-center border-t-2">
      <div className="flex items-center justify-center gap-4 p-4">
        <Link href="https://www.linkedin.com/in/diogofrancasantos/">
          <AiFillLinkedin size={SocialIconSize} />
        </Link>
        <Link href="https://github.com/IcTxDiogo">
          <AiFillGithub size={SocialIconSize} />
        </Link>
      </div>
      <p>© 2023 Diogo França dos Santos</p>
    </footer>
  );
}
