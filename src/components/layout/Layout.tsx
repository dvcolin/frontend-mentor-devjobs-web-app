import Header from "./Header";
import Container from "../Container";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container as="main">{children}</Container>
    </>
  );
};

export default Layout;
