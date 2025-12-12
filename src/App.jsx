import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { TextSizeProvider } from "./components/context/TextSizeContext";

function App() {
  return (
    <BrowserRouter>
      <TextSizeProvider>
        <AppRoutes />
      </TextSizeProvider>
    </BrowserRouter>
  );
}

export default App;
