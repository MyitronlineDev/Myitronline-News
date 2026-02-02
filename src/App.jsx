import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { TextSizeProvider } from "./components/context/TextSizeContext";
import { Toaster } from "react-hot-toast";
import StickySocials from "./components/pages/socials/StickySocials";
import ScrollToTop from "./components/common/ScrollToTop";
function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />

      <BrowserRouter>
        <TextSizeProvider>
          <ScrollToTop />
          <StickySocials />
          <AppRoutes />
        </TextSizeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
