import { FC, Fragment } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
