import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeContext";
import Applayout from "./ui/Applayout";
import GlobalStyles from "./styles/globalStyles";
import Dashboard from "./pages/Dashboard";
import MarketingAtlas from "./pages/Marketing-Atlas";
import Advertising from "./pages/advertising";
import Branding from "./pages/branding";
import ProfessionalMarketing from "./pages/pro-marketing";
import Service from "./pages/service";
import AboutOwner from "./pages/about";

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
