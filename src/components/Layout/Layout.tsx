import { Outlet } from "react-router-dom";
import { Footer } from "../Sections/Footer/Footer";
import { Header } from "../Sections/Header/Header";
import "./Layout.scss";

const CusomLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default CusomLayout;
