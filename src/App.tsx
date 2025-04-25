import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageProvider";
import AppRoutes from "./routes";
import Navbar from "./components/NavBar";
import { CommoditiesProvider } from "./context/CommoditiesProvider";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <LanguageProvider>
      <CommoditiesProvider>
        <BrowserRouter>
          <Helmet>
            <title>J&T</title>
            <link rel="icon" type="image/svg+xml" href="assets/logo.png" />
          </Helmet>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
        <ToastContainer />
      </CommoditiesProvider>
    </LanguageProvider>
  );
};

export default App;
