import { useState, useEffect } from "react";
import { NavLink , Link } from "react-router-dom";
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
  padding: 1.5rem 5%;
  transition: all 0.4s ease-in-out; /* Controls the smooth transition */

  /* If scrolled, use Navy Blue; if not, stay transparent */
  background-color: ${props => props.$scrolled ? "#101826" : "transparent"};
  
  /* Adds a subtle blur effect when transparent for a premium feel */
  backdrop-filter: ${props => props.$scrolled ? "none" : "none"};
  
  /* Shadow only appears after scrolling */
  box-shadow: ${props => props.$scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none"};
`;

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
  /* Efficient font color change: White when transparent, slightly muted when on Navy */
  color: white; 
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #e63946; /* Brand red from your UI */
  }

  &.active {
    color: #e63946;
  }
`;

const ConnectButton = styled.button`
  background-color: #e63946; /* Using your red color directly */
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
  gap: 0.5rem; /* Gap between icon and text */

  &:hover {
    background-color: #d62839;
  }
`
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic to trigger transition at roughly 20% of viewport height
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <StyledHeader $scrolled={isScrolled}>
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
            <Phone size={18} /> {/* The Call Icon */}
            Call-Us
          </ConnectButton>
        </a>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
