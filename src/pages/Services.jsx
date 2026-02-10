import styled from "styled-components";
import { Rocket, Layers, Lightbulb, BarChart3 } from "lucide-react";

const ServicesSection = styled.section`
  padding: 5rem 5%;
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
  max-width: 1400px; /* Wider container for 4 columns */
  margin: 0 auto;

  /* BIG SCREENS: 4 Columns */
  grid-template-columns: repeat(4, 1fr);

  /* SMALLER SCREENS / TABLETS: 2 Columns */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  /* MOBILE DEVICES: 1 Column */
  @media (max-width: 600px) {
   grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem;
  }
`;

const ServiceCard = styled.div`
  background: #be3c2e; /* Your Brand Red */
  padding: 2.5rem 1.5rem;
  border-radius: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  height: 100%; /* Ensures all cards in a row have equal height */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(190, 60, 46, 0.3);
  }
`;

const IconWrapper = styled.div`
  background: rgba(255, 255, 255, 0.15);
  padding: 1.2rem;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 1.35rem; /* Slightly smaller to fit 4 columns better */
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
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