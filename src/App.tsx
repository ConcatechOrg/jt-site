import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageProvider";
import AppRoutes from "./routes";
import Navbar from "./components/NavBar";
import { CommoditiesProvider } from "./context/CommoditiesProvider";

const App = () => {
  return (
    <LanguageProvider>
      <CommoditiesProvider>
      <BrowserRouter>
        <Helmet>
          <title>MG</title>
          <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        </Helmet>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
      </CommoditiesProvider>
    </LanguageProvider>
  );
};

export default App;
