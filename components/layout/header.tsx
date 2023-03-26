import Link from "next/link";
import { ReactNode } from "react";
import { NavItem } from "..";

export interface HeaderProps {
  pageTitle: ReactNode;
  NavItems: NavItem[];
}

export default function Header({ pageTitle, NavItems }: HeaderProps) {
  return (
    <header className="stick w-full flex justify-center p-4 border-b-2">
      <div className=" w-full flex justify-between">
        <h2>{pageTitle}</h2>
        <nav>
          <ul className="flex gap-4">
            {NavItems.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
