<<<<<<< HEAD
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
=======
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-red-500'>Hello GUYSSSSSSSSSSSSS!</h1>
      <h2>keshav</h2>
    </>
  )
}

export default App
>>>>>>> 1e5945286b79ad55a65a9400fe715876ee6589b0
