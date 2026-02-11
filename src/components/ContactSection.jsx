import React, { useState } from "react";
import styled from "styled-components";
import { FaInstagram, FaWhatsapp, FaYoutube, FaTimes } from "react-icons/fa";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const SectionContainer = styled.section`
  padding: 5rem 10%;
  background-color: #ffffff;
  display: flex;
  gap: 4rem;
  
  @media (max-width: 968px) {
    flex-direction: column;
    padding: 3rem 5%;
  }
`;

// Why Contact Us Initial Section
const WhyContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 0rem 2rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #101826;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 2rem auto;
    text-align: left;
    max-width: 400px;
  }

  li {
    font-size: 1.2rem;
    color: #374151;
    margin-bottom: 1rem;
    padding-left: 1.2rem;
    position: relative;
    line-height: 1.5;
    
    &:before {
      content: "•";
      color: #e63946;
      font-weight: bold;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

const SendMessageBtn = styled.button`
  background:  linear-gradient(135deg, #be3c2e 0%, #a53625 100%);
  color: white;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  
  &:hover { 
    background: #333333; 
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const InfoSide = styled.div`
  flex: 1;
  text-align: center;
  
  h2 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #101826;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    color: #6b7280;
    font-size: 1.1rem;
    margin-bottom: 3rem;
    line-height: 1.5;
  }
`;

const ContactCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 1.5rem;
    max-width: 400px;
  }
  
  @media (max-width: 480px) {
    gap: 1.2rem;
    padding: 0 1rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactCard = styled.div`
  background: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: #d1d5db;
  }
  
  .icon {
    color: #b03b2b;
    margin-bottom: 1rem;
    display: block;
    flex-shrink: 0;
  }
  
  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #b03b2b;
    margin-bottom: 0.75rem;
    letter-spacing: -0.025em;
  }
  
  .main-info {
    font-size: 0.95rem;
    font-weight: 600;
    color: #b03b2b;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }
  
  .sub-info {
    font-size: 0.85rem;
    color: #b03b2b;
    line-height: 1.4;
    font-weight: 400;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    min-height: 160px;
    
    h4 {
      font-size: 1rem;
    }
    
    .main-info {
      font-size: 0.9rem;
    }
    
    .sub-info {
      font-size: 0.8rem;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  /* Darker grey for contact text */
  color: #1f2937; 
  
  .icon-box {
    color: #b03b2b;
    margin-top: 3px;
    flex-shrink: 0;
  }
  span { 
  margin-top: 0.35rem;
    font-size: 1rem; 
    line-height: 1.5; 
    font-weight: 500;
    color: #b03b2b;
  }
    p{
    font-size: 1rem; 
    line-height: 1.5; 
    font-weight: 500;
    color: #b03b2b;
    }
`;

const SocialSection = styled.div`
  margin-top: 3rem;
  text-align: center;
  
  h3 {
    color: #101826;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  .social-icon {
    width: 44px;
    height: 44px;
    background: #f3f4f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e63946;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
    
    &:hover { 
      background: #e63946; 
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const FormSide = styled.div`
  flex: 1.2;
  position: relative;
  padding-top: 20px;
  margn-top:20px;
  h2 { 
    font-size: 1.8rem; 
    color: #101826;
    margin-bottom: 2rem; 
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%; 
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
  
  &:hover {
    background: #f3f4f6;
    color: #e63946;
    outline: none;
  }
`;

const FormGrid = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  .full-width { grid-column: span 2; }
  
  label {
    display: block;
    font-weight: 700; /* Bolded for visibility */
    margin-bottom: 0.6rem;
    font-size: 1.2rem;
    color: #111827; /* Near black */
  }
  
  input, textarea {
    width: 100%;
    padding: 1rem;
    border: 1.5px solid #9ca3af; 
    border-radius: 10px;
    outline: none;
    font-size: 1.2rem;
    transition: all 0.2s ease;
    color: black;
    &::placeholder {
      color: #6b7280; /* Standard placeholder grey */
    }

    &:focus { 
      border-color: #e63946;
      box-shadow: 0 0 0 4px rgba(230, 57, 70, 0.1);
    }
  }
`;

const CheckboxArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem; /* Increased gap for better touch targets */
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #374151; /* High visibility grey */

  input[type='checkbox'] {
    width: 18px;
    height: 18px;
    margin: 0;
    cursor: pointer;
    accent-color: #e63946; /* Colors the checkbox red */
  }

  label {
    margin-bottom: 0;
    cursor: pointer;
    font-weight: 500;
    line-height: 1.4;
    white-space: normal; /* Better for mobile wrapping */
  }
`;

const SubmitBtn = styled.button`
  background: #c2412c;
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover { 
    background: #a53625; 
    box-shadow: 0 10px 20px rgba(194, 65, 44, 0.2);
  }
`;


// INFO SIDE COMPONENT
const InfoSideComponent = () => {
  return (
    <InfoSide>
      <h2>Get In Touch</h2>
      <p className="subtitle">Ready to book your dream villa? Contact us and let's make your perfect getaway happen!</p>
      
      <ContactCardsGrid>
        <ContactCard>
          <Phone className="icon" size={32} />
          <h4>Call Us</h4>
          <div className="main-info">+91 9967352803</div>
          <div className="sub-info">Available 24/7 for your queries</div>
        </ContactCard>
        
        <ContactCard>
          <Mail className="icon" size={32} />
          <h4>Email Us</h4>
          <div className="main-info">marketingatlasin@gmail.com</div>
          <div className="sub-info">Get a response within 2 hours</div>
        </ContactCard>
        
        <ContactCard>
          <MapPin className="icon" size={32} />
          <h4>Visit Us</h4>
          <div className="main-info">Malad, Mumbai, 400064</div>
          <div className="sub-info">Our headquarter in Mumbai</div>
        </ContactCard>
        
        <ContactCard>
          <Clock className="icon" size={32} />
          <h4>Business Hours</h4>
          <div className="main-info">Mon-Sun: 9AM-9PM</div>
          <div className="sub-info">Extended hours for your convenience</div>
        </ContactCard>
      </ContactCardsGrid>
      
      <SocialSection>
        <h3>Follow Us</h3>
        <Socials>
          <a 
            href="https://instagram.com/marketingatlas.in" 
            className="social-icon" 
            aria-label="Instagram"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram size={20}/>
          </a>

          <a 
            href="https://wa.me/919967352803" 
            className="social-icon" 
            aria-label="Whatsapp"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20}/>
          </a>

          <a 
            href="https://www.youtube.com/@MarketingAtlasOfficial" 
            className="social-icon" 
            aria-label="Youtube"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaYoutube size={20} />
          </a>
        </Socials>
      </SocialSection>
    </InfoSide>
  );
};

// FORM SIDE COMPONENT
const FormSideComponent = ({ onSubmit, onClose }) => {
  return (
    <FormSide>
      <CloseButton onClick={onClose} title="Close Form">
        <FaTimes />
      </CloseButton>
      <h2>Get in Touch</h2>
      <FormGrid onSubmit={onSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" placeholder="Your name" required />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" placeholder="Your email" required />
        </div>
        <div className="full-width">
          <label>Subject</label>
          <input type="text" placeholder="How can we help?" />
        </div>
        <div className="full-width">
          <label>Message</label>
          <textarea rows="5" placeholder="Your message" required />
        </div>
        
        <div className="full-width">
          <CheckboxArea>
            <input type="checkbox" id="marketing" />
            <label htmlFor="marketing">
              I agree to receive marketing communications from Marketing Atlas.
            </label>
          </CheckboxArea>
          <SubmitBtn type="submit">Send Message</SubmitBtn>
        </div>
      </FormGrid>
    </FormSide>
  );
};

function ContactSection() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  const handleSendMessageClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <SectionContainer id="contact-us">
      <InfoSideComponent />
      
      {!showForm ? (
        <WhyContactContainer>
          <h2>Why Contact Us?</h2>
          <ul>
            <li>Personalized villa recommendations</li>
            <li>Special deals and exclusive offers</li>
            <li>24/7 booking assistance</li>
            <li>Travel planning and concierge services</li>
          </ul>
          <SendMessageBtn onClick={handleSendMessageClick}>
            Send Message
          </SendMessageBtn>
        </WhyContactContainer>
      ) : (
        <FormSideComponent onSubmit={handleSubmit} onClose={handleCloseForm} />
      )}
    </SectionContainer>
  );
}

export default ContactSection;