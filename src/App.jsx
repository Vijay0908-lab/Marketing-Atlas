import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeContext";
import Applayout from "./ui/Applayout";
import GlobalStyles from "./styles/globalStyles";
import Dashboard from "./pages/Dashboard";
import MarketingAtlas from "./pages/Marketing-Atlas";
import Advertising from "./pages/real-estate/advertising";
import Branding from "./pages/real-estate/branding";
import ProfessionalMarketing from "./pages/real-estate/pro-marketing";
import Service from "./pages/villa-owner/service";
import AboutOwner from "./pages/villa-owner/about";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="marketing-atlas" element={<MarketingAtlas />} />
            <Route path="advertising" element={<Advertising />} />
            <Route path="branding" element={<Branding />} />
            <Route path="pro-marketing" element={<ProfessionalMarketing />} />
            <Route path="service" element={<Service />} />
            <Route path="about" element={<AboutOwner />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
