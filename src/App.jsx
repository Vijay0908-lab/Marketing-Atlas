import { Route, Routes } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeContext";

import GlobalStyles from "./styles/globalStyles";
import Home from "./pages/Home";
import VillaOwner from "./pages/Villa-Owners";
import ProMarketing from "./pages/Property-marketing";
import Services from "./pages/services";
import NavBar from "./ui/Header";
import SignUp from "./pages/Sign-Up";
import Footer from "./ui/Footer"; 
function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
    
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/service" element={<Services />} />
          <Route path="/property-marketing" element={<ProMarketing />} />
          <Route path="/villa-owner" element={<VillaOwner />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      
    </DarkModeProvider>
  );
}

export default App;
