import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/home/Home";

import About from "../components/pages/about/About";
import Contact from "../components/pages/contact/Contact";

import NotFound from "../components/pages/NotFound";
import MainLayout from "../components/layout/MainLayout";
import DetailNews from "../components/pages/details-news/DetailNews";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/detail-news/:id/myitronline" element={<DetailNews />} />

        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;
