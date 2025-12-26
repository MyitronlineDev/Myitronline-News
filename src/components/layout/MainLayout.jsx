import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
<<<<<<< HEAD
import BackToTop from "../common/BackToTop";
=======
import TopBar from "../common/TopBar";
>>>>>>> 31ff11c496d59484d97b9dff21753c3e70f6b495

function MainLayout() {
  return (
    <>
      <TopBar />

      {/* Visual separator */}
      <div className="h-2 bg-gray-50 border-b sm:hidden" />

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
