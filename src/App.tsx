import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageProvider";
import AppRoutes from "./routes";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Helmet>
          <title>MG</title>
          <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        </Helmet>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
