import { BrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AppRoutes from "../../App";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
