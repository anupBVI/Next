import React, { Children } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomHead from "@/components/Head/Head";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

type LayoutProps = {
  children: React.ReactNode;
  noFooter?: boolean;
};

const MainLayout = ({ children, noFooter }: LayoutProps) => {
  const router = useRouter();
  const path = router.pathname;

  const q = router.query

  const serviceName =
    path.replace("/", "").charAt(0).toUpperCase() + path.slice(2);

    console.log("object" , q)

  return (
    <>
      <CustomHead title={path !== "/" ? serviceName : "Home"} />
      <Navbar />

      <Breadcrumb crumbs={serviceName}/>
      {/* {
      serviceName
      } */}
      <main>{children}</main>
      {noFooter ? "" : <Footer />}
    </>
  );
};

export default MainLayout;
