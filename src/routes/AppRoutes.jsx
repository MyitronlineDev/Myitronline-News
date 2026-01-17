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
import FinanceNews from "../components/Navbar Screens/finance/FinanceNews";
import FinanceNotifications from "../components/Navbar Screens/finance/FinanceNotifications";

// income-tax
import Articles from "../components/Navbar Screens/Income Tax/Articles";
import Circular from "../components/Navbar Screens/Income Tax/Circular";

import News from "../components/Navbar Screens/Income Tax/News";

// Budget

import Budget2026 from "../components/Navbar Screens/bubget/Budget2026";
import Budget2025 from "../components/Navbar Screens/bubget/Budget2025";

// gst
import GstArticles from "../components/Navbar Screens/gst/GstArticles";
import GstNews from "../components/Navbar Screens/gst/GstNews";
import GstCircular from "../components/Navbar Screens/gst/GstCircular";

// Rbi
import RbiArticles from "../components/Navbar Screens/rbi/RbiArticles";

import RbiCircular from "../components/Navbar Screens/rbi/RbiCircular";
import RbiNews from "../components/Navbar Screens/rbi/RbiNews";

// corporate article
import CorporateArticles from "../components/Navbar Screens/corporatelaw/CorporateArticles";
import CorporateNews from "../components/Navbar Screens/corporatelaw/CorporateNews";
import CorporateNotifications from "../components/Navbar Screens/corporatelaw/CorporateNotifications";

// global news
import GlobalArticles from "../components/Navbar Screens/globalnews/GlobalArticles";
import GlobalNews from "../components/Navbar Screens/globalnews/GlobalNews";

import TermsAndConditions from "../components/pages/Policy/TermsandConditions";
import PrivacyPolicy from "../components/pages/Policy/PrivacyPolicy";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="TermsAndConditions" element={<TermsAndConditions />} />
           <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/detail-news/:slug/myitronline" element={<DetailNews />} />

        {/* Income Tax */}
        <Route path="/navbar/income-tax/article" element={<Articles />} />
        <Route path="/navbar/income-tax/circular" element={<Circular />} />

        <Route path="/navbar/income-tax/news" element={<News />} />

        {/* Budget */}

        <Route path="/navbar/budget/2026" element={<Budget2026 />} />
        <Route path="/navbar/budget/2025" element={<Budget2025 />} />

        {/* Gst */}
        <Route path="/navbar/gst/article" element={<GstArticles />} />
        <Route path="/navbar/gst/news" element={<GstNews />} />
        <Route path="/navbar/gst/circular" element={<GstCircular />} />

        {/* RBI */}
        <Route path="/navbar/rbi/article" element={<RbiArticles />} />
        <Route path="/navbar/rbi/news" element={<RbiNews />} />
        <Route path="/navbar/rbi/circular" element={<RbiCircular />} />

        {/* Finance */}
        <Route path="/navbar/finance/article" element={<Article />} />
        <Route path="/navbar/finance/news" element={<FinanceNews />} />
        <Route
          path="/navbar/finance/notifications"
          element={<FinanceNotifications />}
        />

        {/* corporate law */}
        <Route
          path="/navbar/corporate-law/article"
          element={<CorporateArticles />}
        />
        <Route path="/navbar/corporate-law/news" element={<CorporateNews />} />
        <Route
          path="/navbar/corporate-law/notifications"
          element={<CorporateNotifications />}
        />

        {/* global news */}
        <Route path="/navbar/global/article" element={<GlobalArticles />} />
        <Route path="/navbar/global/news" element={<GlobalNews />} />

        <Route path="/author/myitronline/:name" element={<AuthorPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
