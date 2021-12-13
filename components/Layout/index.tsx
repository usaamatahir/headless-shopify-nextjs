import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
