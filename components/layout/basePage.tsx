import Footer from "./footer";
import Header, { HeaderProps } from "./header";

interface BasePageProps {
  children: React.ReactNode;
  headerProps: HeaderProps;
  isHome?: true;
}

export default function BasePage({
  children,
  headerProps,
  isHome,
}: BasePageProps) {
  return (
    <>
      <Header {...headerProps} />
      {children}
      <Footer isHome={isHome} />
    </>
  );
}
