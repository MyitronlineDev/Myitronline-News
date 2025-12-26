import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BackToTop from "../common/BackToTop";

function MainLayout() {
  return (
    <>
      <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
      <Footer />
      <BackToTop/>
    </>
  );
}

export default MainLayout;
