import { Route, Routes , useLocation} from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeContext";

import GlobalStyles from "./styles/globalStyles";
import Home from "./pages/Home";
import VillaOwner from "./pages/Villa-Owners";
import ProMarketing from "./pages/Property-marketing";
import Services from "./pages/services";
import NavBar from "./ui/Header";
import SignUp from "./pages/Sign-Up";
import Footer from "./ui/Footer"; 
import styled from "styled-components";


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height of the browser window */
`;


const MainContent = styled.main`
     flex: 1; 
  padding-top: ${props => props.$isHome ? "0" : "80px"}; 
`;



function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <DarkModeProvider>
      <GlobalStyles />
    <PageWrapper>
        <NavBar />
        <MainContent $isHome={isHome}>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/service" element={<Services />} />
          <Route path="/property-marketing" element={<ProMarketing />} />
          <Route path="/villa-owner" element={<VillaOwner />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        </MainContent>
        <Footer />
      </PageWrapper>
    </DarkModeProvider>
  );
}

export default App;
