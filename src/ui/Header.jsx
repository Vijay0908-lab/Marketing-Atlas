import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react"; // Added Menu and X icons
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
  background-color: ${props => (props.$isHome && !props.$scrolled) ? "transparent" : "#FFFFFF"};
  color: ${props => (props.$scrolled || !props.$isHome) ? "#000000" : "#FFFFFF"};
  box-shadow: ${props => props.$scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none"};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  z-index: 1001; /* Stay above mobile overlay */
  img {
    width: 60px;
    height: 40px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none; /* Hide standard nav on tablet/mobile */
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: inherit;
  transition: color 0.3s;

  &:hover, &.active {
    color: #e63946;
  }
`;

/* --- Mobile Specific Styles --- */

const MenuButton = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001;
  color: ${props => (props.$scrolled || !props.$isHome || props.$isOpen) ? "#000000" : "#FFFFFF"};

  @media (max-width: 1024px) {
    display: block;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 1001;
  transition: all 0.3s ease; /* Smoothly scale when resizing */

  img {
    width: 60px; /* Default desktop width */
    height: auto; /* Maintain aspect ratio */
    transition: width 0.3s ease;
  }

  @media (max-width: 768px) {
    img {
      width: 45px; /* Smaller width for tablets/phones */
    }
  }

  @media (max-width: 480px) {
    img {
      width: 40px; /* Even smaller for very small devices */
    }
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.$isOpen ? "0" : "-100%")};
  width: 60%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 8rem 2rem 2rem 2rem;
  gap: 2rem;
  transition: right 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
  box-shadow: -10px 0 30px rgba(0,0,0,0.1);
  z-index: 1000;

  /* Links inside mobile menu should always be dark */
  a {
    color: #101826;
    font-size: 1.5re
  width: 0.5remm          
  wid;
    font-weight: 600;
    text-decoration: none;
  }
`;

const ConnectButton = styled.button`
  background-color: #e63946;
  color: white !important; /* Ensure text stays white */
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d62839;
  }
`;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Toggle Menu
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <StyledHeader $scrolled={isScrolled} $isHome={isHome}>
      <Link to="/" onClick={closeMenu}>
  <LogoWrapper>
    <img src={logoImage} alt="Logo" />
  </LogoWrapper>
</Link>

      {/* Desktop Navigation */}
      <DesktopNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/villa-owner">For Villa Owners</StyledNavLink>
        <StyledNavLink to="/property-marketing">Property Marketing</StyledNavLink>
        <StyledNavLink to="/service">Our Services</StyledNavLink>
        <StyledNavLink to="/sign-up">Sign-Up</StyledNavLink>
        <a href="tel:+918591131447" style={{ textDecoration: 'none' }}>
          <ConnectButton>
            <Phone size={18} /> Connect-Us
          </ConnectButton>
        </a>
      </DesktopNav>

      {/* Hamburger Icon */}
      <MenuButton onClick={toggleMenu} $isOpen={isOpen} $scrolled={isScrolled} $isHome={isHome}>
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </MenuButton>

      {/* Mobile Navigation Overlay */}
      <MobileOverlay $isOpen={isOpen}>
        <StyledNavLink to="/" onClick={closeMenu}>Home</StyledNavLink>
        <StyledNavLink to="/villa-owner" onClick={closeMenu}>For Villa Owners</StyledNavLink>
        <StyledNavLink to="/property-marketing" onClick={closeMenu}>Property Marketing</StyledNavLink>
        <StyledNavLink to="/service" onClick={closeMenu}>Our Services</StyledNavLink>
        <StyledNavLink to="/sign-up" onClick={closeMenu}>Sign-Up</StyledNavLink>
        <a href="tel:+918591131447" onClick={closeMenu}>
          <ConnectButton>
            <Phone size={18} /> Connect-Us
          </ConnectButton>
        </a>
      </MobileOverlay>
    </StyledHeader>
  );
}

export default Header;