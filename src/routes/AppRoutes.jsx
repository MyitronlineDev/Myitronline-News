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
import ITR from "../components/Navbar Screens/Income Tax/ITR";
import Judiciary from "../components/Navbar Screens/Income Tax/Judiciary";
import Notifications from "../components/Navbar Screens/Income Tax/Notifications";
import News from "../components/Navbar Screens/Income Tax/News";

// Budget
import Budget2022 from "../components/Navbar Screens/bubget/Budget2022";
import Budget2023 from "../components/Navbar Screens/bubget/Budget2023";
import Budget2024 from "../components/Navbar Screens/bubget/Budget2024";
import Budget2025 from "../components/Navbar Screens/bubget/Budget2025";

// company article
import CompanyArticle from "../components/Navbar Screens/companylaw/CompanyArticle";
import CompanyNews from "../components/Navbar Screens/companylaw/CompanyNews";

// gst
import GstArticles from "../components/Navbar Screens/gst/GstArticles";
import GstNews from "../components/Navbar Screens/gst/GstNews";
import GstCircular from "../components/Navbar Screens/gst/GstCircular";
import GstNotification from "../components/Navbar Screens/gst/GstNotification";
import NotificationsCGST from "../components/Navbar Screens/gst/NotificationsCGST";
import NotificationsIGST from "../components/Navbar Screens/gst/NotificationsIGST";
import NotificationsSGST from "../components/Navbar Screens/gst/NotificationsSGST";

// Rbi
import RbiArticles from "../components/Navbar Screens/rbi/RbiArticles";
import Notification from "../components/Navbar Screens/rbi/Notification";
import RbiCircular from "../components/Navbar Screens/rbi/RbiCircular";
import RbiNews from "../components/Navbar Screens/rbi/RbiNews";

// corporate article
import CorporateArticles from "../components/Navbar Screens/corporatelaw/CorporateArticles";
import CorporateNews from "../components/Navbar Screens/corporatelaw/CorporateNews";
import CorporateNotifications from "../components/Navbar Screens/corporatelaw/CorporateNotifications";

// global news
import GlobalArticles from "../components/Navbar Screens/globalnews/GlobalArticles";
import GlobalNews from "../components/Navbar Screens/globalnews/GlobalNews";

// crypto
import CryptoArticles from "../components/Navbar Screens/crypto/CryptoArticles";
import CryptoNews from "../components/Navbar Screens/crypto/CryptoNews";

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
        <Route path="/navbar/income-tax/circular" element={<Circular />} />
        <Route path="/navbar/income-tax/itr" element={<ITR />} />
        <Route path="/navbar/income-tax/news" element={<News />} />
        <Route path="/navbar/income-tax/judiciary" element={<Judiciary />} />
        <Route
          path="/navbar/income-tax/notification"
          element={<Notifications />}
        />

        {/* Budget */}
        <Route path="/navbar/budget/2022" element={<Budget2022 />} />
        <Route path="/navbar/budget/2023" element={<Budget2023 />} />
        <Route path="/navbar/budget/2024" element={<Budget2024 />} />
        <Route path="/navbar/budget/2025" element={<Budget2025 />} />

        {/* company law */}
        <Route
          path="/navbar/company-law/article"
          element={<CompanyArticle />}
        />
        <Route path="/navbar/company-law/news" element={<CompanyNews />} />

        {/* Gst */}
        <Route path="/navbar/gst/article" element={<GstArticles />} />
        <Route path="/navbar/gst/news" element={<GstNews />} />
        <Route path="/navbar/gst/circular" element={<GstCircular />} />
        <Route path="/navbar/gst/notifications" element={<GstNotification />} />
        <Route
          path="/navbar/gst/notifications-cgst"
          element={<NotificationsCGST />}
        />
        <Route
          path="/navbar/gst/notifications-sgst"
          element={<NotificationsIGST />}
        />
        <Route
          path="/navbar/gst/notifications-igst"
          element={<NotificationsSGST />}
        />

        {/* RBI */}
        <Route path="/navbar/rbi/article" element={<RbiArticles />} />
        <Route path="/navbar/rbi/news" element={<RbiNews />} />
        <Route path="/navbar/rbi/circular" element={<RbiCircular />} />
        <Route path="/navbar/rbi/notifications" element={<Notification />} />

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

        {/* crypto */}
        <Route path="/navbar/crypto/article" element={<CryptoArticles />} />
        <Route path="/navbar/crypto/news" element={<CryptoNews />} />

        <Route path="/author/myitronline/:name" element={<AuthorPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
