import styled from "styled-components";
import { Rocket, Layers, Lightbulb, BarChart3 } from "lucide-react";

const ServicesSection = styled.section`
  padding: 3rem 5%;
  background-color: #f9f9f9;
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #101826;
    margin-bottom: 1rem;
  }

  p {
    color: #6b7280;
    font-size: 1.1rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  gap: 2rem; 
  max-width: 1200px; /* Optimized container width */
  margin: 0 auto;
  padding: 0 2rem; /* Added consistent padding */
  grid-auto-rows: minmax(280px, auto); /* Ensure proper row height */

  /* BIG SCREENS: 4 Columns */
  grid-template-columns: repeat(4, 1fr);

  /* SMALLER SCREENS / TABLETS: 2 Columns */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 800px;
    padding: 0 1.5rem;
    grid-auto-rows: minmax(260px, auto);
  }

  /* MOBILE DEVICES: 2 Columns */
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem; /* Increased gap for mobile */
    padding: 0 1rem; /* Equal padding both sides */
    max-width: 100%;
    grid-auto-rows: minmax(220px, auto);
  }
  
  /* VERY SMALL MOBILE: Better spacing */
  @media (max-width: 480px) {
    gap: 1.2rem;
    padding: 0 0.8rem;
    grid-auto-rows: minmax(200px, auto);
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, #be3c2e 0%, #a53625 100%);
  padding: 2rem 1.5rem;
  border-radius: 16px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  position: relative;
  overflow: hidden;
  
  /* Fixed square dimensions */
  width: 100%;
  height: 280px;
  
  /* Glassmorphism effect */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  /* Subtle pattern overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(190, 60, 46, 0.4);
    background: linear-gradient(135deg, #d44438 0%, #be3c2e 100%);
    z-index: 10;
  }
  
  @media (max-width: 1024px) {
    height: 260px;
  }
  
  @media (max-width: 600px) {
    height: 220px;
    padding: 1.5rem 1rem;
  }
  
  @media (max-width: 480px) {
    height: 200px;
    padding: 1.2rem 0.8rem;
  }
`;

const IconWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  /* Glow effect */
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  
  ${ServiceCard}:hover & {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.95;
  text-align: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 600px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

const servicesData = [
  {
    title: "Brand Acceleration",
    description: "Launch your identity with our immersive, results-focused campaigns.",
    icon: <Rocket size={32} />,
  },
  {
    title: "Omnichannel Strategy",
    description: "Integrate campaigns seamlessly across digital, social, and offline platforms.",
    icon: <Layers size={32} />,
  },
  {
    title: "Creative Innovation",
    description: "Stand out with trendsetting design, motion visuals, and storytelling.",
    icon: <Lightbulb size={32} />,
  },
  {
    title: "Behavioral Analytics",
    description: "Understand and influence customer journeys through smart data patterns.",
    icon: <BarChart3 size={32} />,
  },
];

function Services() {
  return (
    <ServicesSection id="services-section">
      <SectionHeader>
        <h2>Our Premium Services</h2>
        <p>Crafted for businesses seeking high-impact, visually elevated marketing experiences.</p>
      </SectionHeader>

      <GridContainer>
        {servicesData.map((service, index) => (
          <ServiceCard key={index}>
            <IconWrapper>{service.icon}</IconWrapper>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </ServiceCard>
        ))}
      </GridContainer>
    </ServicesSection>
  );
}

export default Services;