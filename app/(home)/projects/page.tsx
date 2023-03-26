import { v4 as uuidv4 } from "uuid";

import BasePage from "@/components/layout/basePage";
import { HeaderProps } from "@/components/layout/header";

export default function ProjectsPage() {
  return (
    <BasePage headerProps={headerProps} isHome={true}>
      <h1>projects</h1>
    </BasePage>
  );
}

const headerProps: HeaderProps = {
  pageTitle: "Diogo França dos Santos",
  NavItems: [
    {
      id: uuidv4(),
      label: "Home",
      url: "/",
    },
    {
      id: uuidv4(),
      label: "Projects",
      url: "/projects",
    },
    {
      id: uuidv4(),
      label: "About",
      url: "/about",
    },
  ],
};
