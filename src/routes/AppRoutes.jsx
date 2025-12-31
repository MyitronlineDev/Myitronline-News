import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/home/Home";

import About from "../components/pages/about/About";
import Contact from "../components/pages/contact/ContactUs";

import NotFound from "../components/pages/NotFound";
import MainLayout from "../components/layout/MainLayout";
import DetailNews from "../components/pages/details-news/DetailNews";

import AuthorPage from "../components/pages/details-news/AuthorPage";


// Navbar screens
// finance
import Article from "../components/Navbar Screens/finance/Article";

// income-tax
import Articles from "../components/Navbar Screens/Income Tax/Articles";

function AppRoutes() {
  return (
    <Routes>
      
      <Route element={<MainLayout />}>
           
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/detail-news/:slug/myitronline" element={<DetailNews />} />

        {/* Income Tax */}
        <Route path="/navbar/income-tax/article" element={<Articles />} />

        {/* Finance */}
        <Route path="/navbar/finance/article" element={< Article/>} />

        <Route path="/author/myitronline/:name" element={<AuthorPage />} />
        
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;
