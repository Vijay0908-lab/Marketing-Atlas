import React from "react";
import styled from "styled-components";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

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

const InfoSide = styled.div`
  flex: 1;
  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #101826;
    margin-bottom: 1.5rem;
  }
  p.desc {
    /* Made grey much darker for better readability */
    color: #374151; 
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    max-width: 400px;
    line-height: 1.6;
  }

  h3 {
    color: #101826;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
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
    color: #e63946;
    margin-top: 3px;
    flex-shrink: 0;
  }
  span { 
    font-size: 1rem; 
    line-height: 1.5; 
    font-weight: 500; /* Added slight weight for clarity */
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
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
    border: 1px solid #e5e7eb; /* Added subtle border */
    
    &:hover { 
      background: #e63946; 
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const FormSide = styled.div`
  flex: 1.2;
  h2 { 
    font-size: 2.5rem; 
    color: #101826;
    margin-bottom: 2rem; 
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
    font-size: 0.95rem;
    color: #111827; /* Near black */
  }
  
  input, textarea {
    width: 100%;
    padding: 1rem;
    /* Darkened border from #d1d5db to #9ca3af */
    border: 1.5px solid #9ca3af; 
    border-radius: 10px;
    outline: none;
    font-size: 1rem;
    transition: all 0.2s ease;
    
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

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <SectionContainer id="contact-us">
      <InfoSide>
        <h2>Connect With Us</h2>
        <p className="desc">Have questions about our services? Reach out to our team for personalized assistance.</p>
        
        <h3>Contact Information</h3>
        <ContactItem>
          <MapPin className="icon-box" size={22} />
          <span>Office number 620, Ijmima Complex,<br/>near Infiniti Mall Malad West, Mumbai - 400064</span>
        </ContactItem>
        <ContactItem>
          <Phone className="icon-box" size={22} />
          <span>+91 9967352803</span>
        </ContactItem>
        <ContactItem>
          <Mail className="icon-box" size={22} />
          <span>marketingatlasin@gmail.com</span>
        </ContactItem>

        <h3 style={{marginTop: '2rem'}}>Follow Us</h3>
        <Socials>
          <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="social-icon" aria-label="Whatsapp"><FaWhatsapp /></a>
          <a href="#" className="social-icon" aria-label="Youtube"><FaYoutube /></a>
        </Socials>
      </InfoSide>

      <FormSide>
        <h2>Get in Touch</h2>
        <FormGrid onSubmit={handleSubmit}>
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
    </SectionContainer>
  );
}

export default ContactSection;