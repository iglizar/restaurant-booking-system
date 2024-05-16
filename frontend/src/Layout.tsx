import React, { ReactNode } from "react";
import Footer from "./components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
