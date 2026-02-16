import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";
import Contact from "../components/pages/contact/ContactUs";
import NotFound from "../components/pages/NotFound";
import MainLayout from "../components/layout/MainLayout";
import DetailNews from "../components/pages/details-news/DetailNews";
import AuthorPage from "../components/pages/details-news/AuthorPage";
import TermsAndConditions from "../components/pages/Policy/TermsandConditions";
import PrivacyPolicy from "../components/pages/Policy/PrivacyPolicy";
import SecurityPolicy from "../components/pages/Policy/SecurityPolicy";
import LegalDisclaimer from "../components/pages/Policy/LegalDisclaimer";
import MeetTheTeam from "../components/pages/about/MeetTheTeam";

import NavbarDataLayout from "../components/navbarScreen/NavbarDataLayout";
function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="MeetTheTeam" element={<MeetTheTeam />} />
        <Route path="TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="SecurityPolicy" element={<SecurityPolicy />} />
        <Route path="LegalDisclaimer" element={<LegalDisclaimer />} />
        <Route path="/detail-news/:slug/myitronline" element={<DetailNews />} />
        <Route path="/author/myitronline/:name" element={<AuthorPage />} />
        <Route path="navbar" element={<NavbarDataLayout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
