import Footer from "./footer";
import Header, { HeaderProps } from "./header";

interface PageProps {
  children: React.ReactNode;
  headerProps: HeaderProps;
}

export default function Page({ children, headerProps }: PageProps) {
  return (
    <>
      <Header {...headerProps} />
      {children}
      <Footer />
    </>
  );
}
