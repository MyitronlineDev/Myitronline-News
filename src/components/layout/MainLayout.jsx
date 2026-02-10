import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import TopBar from "../common/TopBar";
// import Breadcrumbs from "../common/Breadcrumbs";

function MainLayout() {
  return (
    <>
      <TopBar />
      {/* Visual separator */}
      <div className="h-2 bg-gray-50 border-b sm:hidden" />

      <Header />

      {/* <Breadcrumbs /> */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}


export default MainLayout;
