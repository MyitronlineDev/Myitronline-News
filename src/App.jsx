import { Routes, Route } from "react-router-dom";

// Normal imports
import Home from "./components/pages/Home";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Not found */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;
