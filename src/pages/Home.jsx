import styled from "styled-components";
import heroBg from "../assets/images/Marketing-Home.avif"; 
import Services from "./Services";

const HeroContainer = styled.section`
  height: 90vh; /* Adjust based on your header height */
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url(${heroBg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  max-width: 900px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background-color: #e63946; /* Brand Red */
  color: white;
  padding: 1rem 2.8rem; /* Slightly wider for better visual balance */
  border: 1px solid #e63946; /* Border matches bg to keep size consistent with Outline */
  border-radius: 100px; /* Fully pill-shaped as seen in UI */
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    background-color: #d62839;
    border-color: #d62839;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(230, 57, 70, 0.2);
  }
`;

const OutlineButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 1rem 2.8rem;
  /* Optimized: 1.5px provides a premium, sharp look without being too chunky */
  border: 1.5px solid rgba(255, 255, 255, 0.7); 
  border-radius: 100px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: #101826; /* Dark navy color to match your Footer background */
    border-color: rgba(255, 255, 255, 1);
    transform: translateY(-3px);
  }
`;
function Home() {
  return (
    <>
    
    <HeroContainer>
      <Title>Premium Marketing for Villas & Real Estate</Title>
      <Subtitle>
        Elevate your visibility, influence your market, and unlock elite branding with 
        Marketing Atlas—crafted exclusively for property professionals.
      </Subtitle>
      <ButtonGroup>
        <PrimaryButton>Get Started</PrimaryButton>
        <OutlineButton>View Services</OutlineButton>
      </ButtonGroup>
    </HeroContainer>
    <div id="services-section">
        <Services />
      </div>
      </>
  );
}

export default Home;