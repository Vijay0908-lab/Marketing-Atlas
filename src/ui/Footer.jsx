import styled from "styled-components";
import { Link } from "react-router-dom";
import { 
 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import logoImage from "../assets/images/Marketing-logo.png"; // Using your existing logo path

const StyledFooter = styled.footer`
  background-color: #101826; /* Dark navy background */
  color: #d1d5db;
  padding: 1rem 5% 2rem;
  font-family: sans-serif;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr 1.5fr; /* 4 columns with custom widths */
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr; /* Stack into 2 columns on tablets */
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr ; /* Stack into 1 column on mobile */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  img {
    
    width: 65px; 
    height: 65px; 
    object-fit: contain; 
    border-radius: 8px;
  }
  
`;

const Title = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.95rem;

  &:hover {
    color: #fff;
  }
`;

const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  font-size: 0.95rem;
  line-height: 1.5;

  svg {
    color: #e63946; /* Matches your header red */
    flex-shrink: 0;
    margin-top: 3px;
  }
    p{
    margin-bottom: 0.25rem;
    }
    span{
    margin-top: 0.42rem;}
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  align-items: center;
  
  svg {
  display: block;
    cursor: pointer;
    transition: color 0.3s;
    &:hover { color: #fff; }
  }
`;

const CopyrightBar = styled.div`
  border-top: 1px solid #1f2937;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #6b7280;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterGrid>
        {/* Brand Column */}
        <Column>
          <img src={logoImage} alt="Marketing Atlas" style={{ width: "65px" }} />
          <p>Comprehensive marketing solutions for real estate professionals and villa owners.</p>
          <SocialLinks>
            <a href="https://instagram.com/marketingatlas.in"  target="_blank" ><FaInstagram size={19} /></a>
             <a href="https://www.youtube.com/@MarketingAtlasOfficial"   target="_blank" ><FaYoutube size={21} /></a>
          </SocialLinks>
        </Column>

        {/* Quick Links */}
        <Column>
          <Title>Quick Links</Title>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/villa-owner">Villa Owners</FooterLink>
          <FooterLink to="/marketing-atlas">Property Marketing</FooterLink>
          <FooterLink to="/service">Our Services</FooterLink>
          <FooterLink to="/contact">Connect Us</FooterLink>
        </Column>

        {/* Services */}
        <Column>
          <Title>Services</Title>
          <FooterLink to="#">Professional Photography</FooterLink>
          <FooterLink to="#">Video Production</FooterLink>
          <FooterLink to="#">Website Design</FooterLink>
          <FooterLink to="#">SEO & Analytics</FooterLink>
          <FooterLink to="#">Social Media Marketing</FooterLink>
        </Column>

        {/* Contact Us */}
        <Column>
          <Title>Contact Us</Title>
          <ContactItem>
            <MapPin size={19} />
            <p>Office number 620, Ijmima Complex, near Infiniti Mall Malad West, Mumbai - 400064</p>
          </ContactItem>
          <ContactItem>
            <Phone size={19} />
            <span>+91 9967352803</span>
          </ContactItem>
          <ContactItem>
            <Mail size={19} />
            <span>marketingatlasin@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <Clock size={19} />
            <span>Mon-Fri: 11:00 AM - 8:00 PM</span>
          </ContactItem>
        </Column>
      </FooterGrid>

      <CopyrightBar>
        <p>© 2025 Marketing Atlas. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/terms">Terms of Service</FooterLink>
        </div>
      </CopyrightBar>
    </StyledFooter>
  );
}

export default Footer;