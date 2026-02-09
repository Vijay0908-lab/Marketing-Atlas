import styled from "styled-components";
import { Rocket, Layers, Lightbulb, BarChart3 } from "lucide-react";

const ServicesSection = styled.section`
  padding: 5rem 5%;
  background-color: #f9f9f9; /* Light background to contrast with the dark cards */
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
  gap: 2.5rem; /* Increased gap for a more premium feel */
  max-width: 1200px; /* Increased max-width to allow growth */
  margin: 0 auto;

  /* Mobile First: 1 column by default */
  grid-template-columns: 1fr;

  /* Small tablets: 2 columns */
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop: 3 columns (This makes the layout "grow" horizontally/vertically) */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const ServiceCard = styled.div`
  /* Gradient background matching your UI image */
  background: #be3c2e;
  padding: 3rem 2rem;
  border-radius: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
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
    <ServicesSection>
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