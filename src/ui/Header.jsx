import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom"; // Added useLocation
import { Phone } from "lucide-react";
import styled from "styled-components";
import logoImage from "../assets/images/Marketing-logo.png";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.$scrolled ? "1rem 5%" : "1.5rem 5%"};
  transition: all 0.4s ease-in-out;

  /* Transparent ONLY if on Home AND not scrolled. Otherwise, Navy Blue. */
  background-color: ${props => (props.$isHome && !props.$scrolled) ? "transparent" : "#101826"};
  
  box-shadow: ${props => props.$scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none"};
`;

// ... (Logo, Nav, StyledNavLink, ConnectButton styles remain the same)

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white; 
  text-decoration: none;
  font-size: 1.5rem; /* Adjusted from 1.5rem for better fit */
  font-weight: 500;
  transition: color 0.3s;

  &:hover, &.active {
    color: #e63946;
  }
`;

const ConnectButton = styled.button`
  background-color: #e63946;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #d62839;
  }
`;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if current path is exactly "/"
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Trigger sooner for better UX
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledHeader $scrolled={isScrolled} $isHome={isHome}>
      <Link to="/">
        <Logo>
          <img src={logoImage} alt="Logo" />
        </Logo>
      </Link>

      <Nav>
        <StyledNavLink to="/villa-owner">For Villa Owners</StyledNavLink>
        <StyledNavLink to="/property-marketing">Property Marketing</StyledNavLink>
        <StyledNavLink to="/service">Our Services</StyledNavLink>
        <StyledNavLink to="/sign-up">Sign-Up</StyledNavLink>
        <a href="tel:+918591131447" style={{ textDecoration: 'none' }}>
          <ConnectButton>
            <Phone size={18} />
            Call-Us
          </ConnectButton>
        </a>
      </Nav>
    </StyledHeader>
  );
}

export default Header;